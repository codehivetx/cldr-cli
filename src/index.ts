
const { Command } = require('commander');
const { version, description } = require('../package.json');
const { Url } = require('node:url');

import * as ST from './apis/st';
import { AxiosRequestConfig, AxiosHeaders } from "axios";


const program = new Command();

const defaultEndpoint = 'https://st.unicode.org/cldr-apps';
program
.version(version)
.description(description)
.option("-H, --hostname <value>", "Set the URL endpoint", defaultEndpoint)
.option("-u, --user <value>", "Set the user for login")
.option("-p, --password <value>","Set the password")
.option("-l, --locale <value>", "Set the locale")
.option("-L, --level <value>", "Set the level", 'basic')
.option("-d, --dashboard <filename>", "Download dashboard to filename")
.parse(process.argv);

const options = program.opts();

if (process.argv.length <= 2) {
    program.outputHelp();
    process.exit(0);
}

const { hostname, user, password, locale, level } = options;

let headers = new AxiosHeaders();

let config : AxiosRequestConfig= {
    baseURL: hostname,
    headers,
};


// return a session id
async function login() : Promise<string> {
    console.log('logging in');
    const r = await ST.login({
        email: user,
        password,
    }, {
        remember: true,
    }, config);
    const { data } = r;
    const { sessionId } = data;
    if (!sessionId) throw new Error(r.statusText);
    return sessionId;
}

async function doit() {

    const sessionId = await login();

    headers.set('X-SurveyTool-Session', sessionId);

    if (options.dashboard) {
        const filename = options.dashboard;
        console.dir({ dashboard: { locale }, filename });
        const { data } = await ST.getDashboard({
            level, locale
        }, config);
        console.dir({data});
    } else {
        console.error('Please choose a verb such as -d');
        program.outputHelp();
        process.exit(1);
    }
}

doit().then(x => console.dir(x), e => console.error(e));
