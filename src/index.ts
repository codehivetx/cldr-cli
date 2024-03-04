
const { Command } = require('commander');
const { version, description } = require('../package.json');
const { Url } = require('node:url');
// declare module 'swagger-client'
import SwaggerClient from 'swagger-client';

const program = new Command();

const defaultEndpoint = "https://st.unicode.org";
program
.version(version)
.description(description)
.option("-H, --hostname <value>", "Set the URL endpoint", defaultEndpoint)
.option("-u, --user <value>", "Set the user for login")
.option("-p, --password <value>","Set the password")
.option("-l, --locale <value>", "Set the locale")
.option("-d, --dashboard <filename>", "Download dashboard to filename")
.parse(process.argv);

const options = program.opts();

if (process.argv.length <= 2) {
    program.outputHelp();
    process.exit(0);
}

const { hostname, user, password, locale } = options;

new SwaggerClient({
  url: 'http://petstore.swagger.io/v2/swagger.json',
  disableInterfaces: false,
  v2OperationIdCompatibilityMode: false,
  ...other options...
});


if (options.dashboard) {
    const filename = options.dashboard;
    console.dir({dashboard: {hostname,user,password,locale}, filename});
} else {
    console.error('Please choose a verb such as -d');
    program.outputHelp();
    process.exit(1);
}
