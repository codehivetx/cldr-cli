import type { OneOf } from "openapi-axios/client"
import { DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT, resolveURL } from "openapi-axios/client";
import type {AxiosRequestConfig, AxiosPromise} from "axios";
import axios from "axios";
const BASE_URL = "https://st.unicode.org/cldr-apps";
export type AddAltPathRequest = {/**
 * @description New alt value
 */
alt?:string;
/**
 * @description XPath Hex ID
 */
hexId?:string;
/**
 * @description Locale ID
 */
localeId?:string;};

export type AddUserRequest = {/**
 * @description New user e-mail
 */
email?:string;
/**
 * @description New user level
 */
level?:number;
/**
 * @description New user locales
 */
locales?:string;
/**
 * @description New user name
 */
name?:string;
/**
 * @description New user organization
 */
org?:string;};

/**
 * @description Response for AddUser query
 */
export type AddUserResponse = {/**
 * @description Normalized e-mail of new user
 */
email?:string;
/**
 * @description Error code
 */
err?:"BAD_NAME"|"BAD_EMAIL"|"BAD_ORG"|"BAD_LEVEL"|"DUP_EMAIL"|"UNKNOWN";
/**
 * @description User ID of successfully created new user
 */
userId?:number;};

/**
 * @description Response for XPath alt set query
 */
export type AltSetResponse = {/**
 * @description Array of possible alt attributes.
 */
alt?:Array<string>;
/**
 * @description Hex ID of XPath.
 */
hexId?:string;};

/**
 * @description Single announcement
 */
export type Announcement = {/**
 * @description audience
 */
audience?:string;
/**
 * @description body
 */
body?:string;
/**
 * @description checked
 */
checked?:boolean;
/**
 * @description date
 */
date?:string;
/**
 * @description announcement id as stored in database
 */
id?:number;
/**
 * @description locales
 */
locs?:string;
/**
 * @description orgs
 */
orgs?:string;
/**
 * @description poster id
 */
poster?:number;
/**
 * @description poster name
 */
posterName?:string;
/**
 * @description subject
 */
subject?:string;};

/**
 * @description List of announcements
 */
export type AnnouncementResponse = {/**
 * @description announcements
 */
announcements?:Array<Announcement>;};

export type Candidate = {displayValue?:string;
example?:string;
history?:string;
isBaselineValue?:boolean;
pClass?:string;
rawValue?:string;
tests?:Array<CheckStatusSummary>;
value?:string;
valueHash?:string;
votes?:{[key: string]:VoteEntry;};};

export type CheckReadRequest = {/**
 * @description checked
 */
checked?:boolean;
/**
 * @description id
 */
id?:number;};

export type CheckStatusSummary = {cause?:string;
message?:string;
phase?:"BUILD"|"SUBMISSION"|"VETTING"|"FINAL_TESTING";
subtype?:"none"|"no unproposed variant"|"deprecated attribute"|"illegal plural"|"invalid locale"|"incorrect casing"|"value must be overridden"|"value always overridden"|"null child file"|"internal error"|"coverage level"|"missing plural info"|"currency symbol too wide"|"incorrect date pattern"|"abbreviated date field too wide"|"display collision"|"illegal exemplar set"|"missing auxiliary exemplars"|"extra placeholders"|"missing placeholders"|"shouldnt have placeholders"|"could not access exemplars"|"no exemplar characters"|"modified english value"|"invalid currency match set"|"multiple metazone mappings"|"no metazone mapping"|"no metazone mapping after1970"|"no metazone mapping before now"|"cannot create zone formatter"|"insufficient coverage"|"missing language territory info"|"missing euro country info"|"deprecated attribute with replacement"|"missing or extra date field"|"internal unicode set formatting error"|"auxiliary exemplars overlap"|"missing punctuation characters"|"characters not in currency exemplars"|"ascii characters not in currency exemplars"|"characters not in main or auxiliary exemplars"|"ascii characters not in main or auxiliary exemplars"|"narrow date field too wide"|"illegal characters in exemplars"|"orientation disagrees with exemplars"|"inconsistent date pattern"|"inconsistent time pattern"|"missing date pattern"|"illegal date pattern"|"missing main exemplars"|"must not start or end with space"|"illegal characters in number pattern"|"number pattern not canonical"|"currency pattern missing currency symbol"|"currency pattern unexpected currency symbol"|"missing minus sign"|"bad numeric type"|"percent pattern missing percent symbol"|"illegal number format"|"unexpected attribute value"|"metazone contains digit"|"too many grouping separators"|"inconsistent plural format"|"missing zeros"|"same as english"|"same as code"|"date symbol collision"|"incomplete logical group"|"extra metazone string"|"inconsistent draft status"|"error or warning in logical group"|"value too wide"|"value too narrow"|"name contains year"|"pattern cannot contain digits"|"pattern contains invalid characters"|"parentheses not allowed"|"illegal numbering system"|"unexpected order of era year"|"invalid place holder"|"ascii quotes not allowed"|"bad minimum grouping digits"|"inconsistent periods"|"inheritance marker not allowed"|"invalid duration unit pattern"|"invalid delimiter"|"illegal characters in pattern"|"bad parse lenient"|"too many values"|"invalid symbol"|"invalid gender code"|"mismatched unit component"|"long power with subscripts"|"gaps in placeholder numbers"|"duplicate placeholders"|"larger differences"|"missing non alt path"|"bad sample person name"|"missing language"|"name placeholder problem"|"missing space between name fields"|"illegal parameter value"|"illegal annotation code";
subtypeUrl?:string;
type?:"Comment"|"Warning"|"Error"|"Example"|"Demo";};

export type CLDRLocale = {baseName?:string;
country?:string;
displayName?:string;
displayRegion?:string;
displayVariant?:string;
highestNonrootParent?:CLDRLocale;
language?:string;
languageLocale?:CLDRLocale;
parent?:CLDRLocale;
parentIterator?:IterableCLDRLocale;
parentRoot?:boolean;
rank?:number;
script?:string;
variant?:string;};

export type Comparable = {[key: string]: never};

export type CookieSession = {id?:string;
ip?:string;
/**
 * @format int64
 */
lastActionMillisSinceEpoch?:number;
/**
 * @format int64
 */
lastBrowserCallMillisSinceEpoch?:number;
locales?:{[key: string]:{[key: string]:{[key: string]: never};};};
message?:string;
prefs?:{[key: string]:Comparable;};
stuff?:{[key: string]:{[key: string]: never};};
user?:User;
userOrg?:string;};

export type CoverageResult = {adjustedGoal?:string;
cldrLocaleLevelGoal?:"undetermined"|"core"|"basic"|"moderate"|"modern"|"comprehensive";
/**
 * @format int64
 */
found?:number;
icu?:boolean;
locale?:string;
/**
 * @format int64
 */
missing?:number;
proportions?:Array</**
 * @format double
 */
number>;
shownMissingPaths?:Array<string>;
staticLevel?:"undetermined"|"core"|"basic"|"moderate"|"modern"|"comprehensive";
sumFound?:number;
sumUnconfirmed?:number;
/**
 * @format int64
 */
unconfirmedc?:number;
visibleLevelComputed?:string;};

export type CoverageStatusResponse = {levelNames?:Array<string>;
results?:Array<CoverageResult>;};

export type DisplaySet = {partitions?:Array<Partition>;
rows?:Array<string>;
sortMode?:SortMode;};

export type DisplaySets = {ph?:DisplaySet;};

/**
 * @description Single category of votes for downgraded paths
 */
export type DowngradeCategory = {/**
 * @description The number of downgraded votes with this type
 */
count?:number;
/**
 * @description Whether this type of vote is classified as being imported
 */
isImported?:boolean;
/**
 * @description The vote type
 */
voteType?:"NONE"|"UNKNOWN"|"DIRECT"|"AUTO_IMPORT"|"MANUAL_IMPORT"|"BULK_UPLOAD";};

/**
 * @description Stats of downgraded paths
 */
export type DowngradedStatsResponse = {/**
 * @description Number of votes for downgraded paths, categorized by vote type
 */
cats?:Array<DowngradeCategory>;};

export type EntityTag = {value?:string;
weak?:boolean;};

/**
 * @description Response for Inheritance query
 */
export type InheritanceResponse = {/**
 * @description Array of inheritance items.
 */
items?:Array<LocaleInheritance>;};

export type IntLocsRequest = {/**
 * @description Email address
 */
email:string;
/**
 * @description Interest locales
 */
intlocs:string;
/**
 * @description Session string
 */
sessionString:string;};

export type Iterable = {[key: string]: never};

export type IterableCLDRLocale = {[key: string]: never};

export type JSONArray = {[key: string]: never};

export type Link = {params?:{[key: string]:string;};
rel?:string;
rels?:Array<string>;
title?:string;
type?:string;
/**
 * @format uri
 */
uri?:string;
uriBuilder?:UriBuilder;};

export type Locale = {country?:string;
displayCountry?:string;
displayLanguage?:string;
displayName?:string;
displayScript?:string;
displayVariant?:string;
extensionKeys?:Array<string>;
iso3Country?:string;
iso3Language?:string;
language?:string;
script?:string;
unicodeLocaleAttributes?:Array<string>;
unicodeLocaleKeys?:Array<string>;
variant?:string;};

export type LocaleCompletionResponse = {/**
 * @description error+missing+provisional from baseline (HEAD)
 */
baselineCount?:number;
/**
 * @description number of items with errors
 */
error?:number;
/**
 * @description coverage level
 */
level?:string;
/**
 * @description number of missing items
 */
missing?:number;
/**
 * @description number of provisional items
 */
provisional?:number;};

export type LocaleInheritance = {/**
 * @description which attribute was implicated in a change
 */
attribute?:string;
/**
 * @description true if not shown in the SurveyTool
 */
hidden?:boolean;
/**
 * @description locale of item if present
 */
locale?:string;
/**
 * @description reason for the entry
 */
reason?:"value: Found: explicit value"|"codeFallback: Found: code fallback"|"alias: An alias was found at this location"|"constructed: Constructed value"|"none: The value was not found in this locale."|"inheritanceMarker: Found: Inheritance marker"|"removedAttribute: Removed attribute: ${attribute}"|"changedAttribute: Changed attribute: ${attribute}"|"fallback: Other fallback path";
/**
 * @description xpath stringid to item
 */
xpath?:string;
/**
 * @description xpath full of item
 */
xpathFull?:string;};

export type LocaleNormalizerResponse = {/**
 * @description List of messages of why some locales were rejected
 */
messages?:{[key: string]:"Outside org. coverage"|"Unknown";};
/**
 * @description Normalized locale array
 */
normalized?:string;};

export type LocaleReportVettingResult = {locale?:string;
reports?:Array<ReportVettingResult>;
/**
 * @description Total voters for this locale. Does not count abstentions.
 */
totalVoters?:number;};

export type LocaleReportVettingResults = {locales?:Array<LocaleReportVettingResult>;};

export type LocaleSet = {allLocales?:boolean;
empty?:boolean;
set?:Array<CLDRLocale>;};

export type LockRequest = {email?:string;
reason?:string;
session?:string;};

export type LoginRequest = {email?:string;
password?:string;};

export type LoginResponse = {/**
 * @description CookieSession string id
 */
sessionId?:string;
/**
 * @description True if there is a user
 */
user?:boolean;};

export type MediaType = {parameters?:{[key: string]:string;};
subtype?:string;
type?:string;
wildcardSubtype?:boolean;
wildcardType?:boolean;};

export type NewCookie = {comment?:string;
domain?:string;
/**
 * @format date-time
 */
expiry?:string;
httpOnly?:boolean;
maxAge?:number;
name?:string;
path?:string;
secure?:boolean;
value?:string;
version?:number;};

export type Number = {[key: string]: never};

/**
 * @description Response for organizations query
 */
export type OrgMapResponse = {/**
 * @description Map from short names to display names
 */
map?:{[key: string]:string;};};

export type OrgParticipation = {coverageLocales?:Array<string>;
defaultCoverage?:string;
localesWithVetters?:Array<string>;
org?:"adlam"|"adobe"|"afghan_csa"|"afghan_mcit"|"afrigen"|"anii"|"apple"|"bangladesh"|"bangor_univ"|"bhutan"|"breton"|"cherokee"|"choctaw"|"cldr"|"gaeilge"|"georgia_isi"|"gnome"|"google"|"ibm"|"india"|"iran_hci"|"kendra"|"kotoistus"|"kunsill_malti"|"lakota_lc"|"lao_dpt"|"longnow"|"meta"|"microsoft"|"mikmaw_kinamatnewey"|"mozilla"|"netflix"|"nyiakeng_puachue_hmong"|"openinstitute"|"openoffice_org"|"oracle"|"pakistan"|"rodakych"|"rohingyazuban"|"rumantscha"|"sardware"|"sil"|"special"|"srilanka"|"surveytool"|"unaffiliated"|"venetian"|"welsh_lc"|"wikimedia"|"wod_nko"|"wsci_wg"|"yahoo";};

export type OrgValueVotes = {conflicted?:boolean;
orgVote?:{[key: string]: never};
status?:string;
votes?:{/**
 * @format int64
 */
[key: string]:number;};};

export type OrgValueVotesObject = {conflicted?:boolean;
orgVote?:{[key: string]: never};
status?:string;
votes?:{/**
 * @format int64
 */
[key: string]:number;};};

export type OrgValueVotesReportAcceptability = {conflicted?:boolean;
orgVote?:"notAcceptable"|"acceptable";
status?:string;
votes?:{/**
 * @format int64
 */
[key: string]:number;};};

export type OrgValueVotesString = {conflicted?:boolean;
orgVote?:string;
status?:string;
votes?:{/**
 * @format int64
 */
[key: string]:number;};};

export type Page = {nocontent?:boolean;
rows?:{[key: string]:Row;};};

export type ParticipationResults = {coverageLevel?:string;
voterProgress?:VoterProgress;};

export type Partition = {helptext?:string;
limit?:number;
name?:string;
start?:number;};

export type PathAndValue = {path?:string;
value?:string;};

/**
 * @description Path, Value Pair
 */
export type PathValuePair = {/**
 * @description Value
 */
value?:string;
/**
 * @description Path
 */
xpstrid?:string;};

export type PlaceholderInfo = {example?:string;
name?:string;};

export type ReasonInfo = {/**
 * @description Description for reason. String substitution of 'attribute' may be required.
 */
description?:string;
/**
 * @description reason id
 * @example codeFallback
 */
reason?:string;
/**
 * @description true if a terminal reason
 * @example true
 */
terminal?:boolean;};

export type ReportStatus = {acceptable?:Array<"datetime"|"zones"|"compact"|"personnames">;
completed?:Array<"datetime"|"zones"|"compact"|"personnames">;
/**
 * @format date-time
 */
date?:string;};

/**
 * @description update to user’s report status
 */
export type ReportUpdate = {/**
 * @description True if values were acceptable. False if values weren’t acceptable, but user has voted for correct ones.
 */
acceptable?:boolean;
/**
 * @description True if user has completed evaluating this report, False if not complete. May not be !complete&&acceptable.
 */
completed?:boolean;};

export type ReportVettingResult = {acceptability?:"notAcceptable"|"acceptable";
/**
 * @format int64
 */
acceptableScore?:number;
/**
 * @format int64
 */
notAcceptableScore?:number;
report?:"datetime"|"zones"|"compact"|"personnames";
resolvedVoteCounts?:{/**
 * @format int64
 */
[key: string]:number;};
status?:"missing"|"unconfirmed"|"provisional"|"contributed"|"approved";
transcript?:string;
votersForAcceptable?:number;
votersForNotAcceptable?:number;
votes?:{[key: string]:"notAcceptable"|"acceptable";};
votingResults?:VotingResultsReportAcceptability;};

export type Response = {allowedMethods?:Array<string>;
cookies?:{[key: string]:NewCookie;};
/**
 * @format date-time
 */
date?:string;
entity?:{[key: string]: never};
entityTag?:EntityTag;
headers?:{[key: string]:Array<{[key: string]: never}>;};
language?:Locale;
/**
 * @format date-time
 */
lastModified?:string;
length?:number;
links?:Array<Link>;
/**
 * @format uri
 */
location?:string;
mediaType?:MediaType;
metadata?:{[key: string]:Array<{[key: string]: never}>;};
status?:number;
statusInfo?:StatusType;
stringHeaders?:{[key: string]:Array<string>;};};

/**
 * @description Single entry of the dashboard that needs review
 */
export type ReviewEntry = {/**
 * @description Code for this entry
 * @example narrow-other-nominative
 */
code?:string;
/**
 * @description html comment on the error
 * @example &lt;value too wide&gt; Too wide by about 100% (with common fonts).
 */
comment?:string;
/**
 * @description English text
 * @example {0}dsp-Imp
 */
english?:string;
/**
 * @description Baseline value
 * @example {0} dstspn Imp
 */
old?:string;
/**
 * @description Previous English value, for EnglishChanged
 * @example {0} dstspn Imp
 */
previousEnglish?:string;
/**
 * @description Subtype of the error
 * @example largerDifferences
 */
subtype?:"none"|"no unproposed variant"|"deprecated attribute"|"illegal plural"|"invalid locale"|"incorrect casing"|"value must be overridden"|"value always overridden"|"null child file"|"internal error"|"coverage level"|"missing plural info"|"currency symbol too wide"|"incorrect date pattern"|"abbreviated date field too wide"|"display collision"|"illegal exemplar set"|"missing auxiliary exemplars"|"extra placeholders"|"missing placeholders"|"shouldnt have placeholders"|"could not access exemplars"|"no exemplar characters"|"modified english value"|"invalid currency match set"|"multiple metazone mappings"|"no metazone mapping"|"no metazone mapping after1970"|"no metazone mapping before now"|"cannot create zone formatter"|"insufficient coverage"|"missing language territory info"|"missing euro country info"|"deprecated attribute with replacement"|"missing or extra date field"|"internal unicode set formatting error"|"auxiliary exemplars overlap"|"missing punctuation characters"|"characters not in currency exemplars"|"ascii characters not in currency exemplars"|"characters not in main or auxiliary exemplars"|"ascii characters not in main or auxiliary exemplars"|"narrow date field too wide"|"illegal characters in exemplars"|"orientation disagrees with exemplars"|"inconsistent date pattern"|"inconsistent time pattern"|"missing date pattern"|"illegal date pattern"|"missing main exemplars"|"must not start or end with space"|"illegal characters in number pattern"|"number pattern not canonical"|"currency pattern missing currency symbol"|"currency pattern unexpected currency symbol"|"missing minus sign"|"bad numeric type"|"percent pattern missing percent symbol"|"illegal number format"|"unexpected attribute value"|"metazone contains digit"|"too many grouping separators"|"inconsistent plural format"|"missing zeros"|"same as english"|"same as code"|"date symbol collision"|"incomplete logical group"|"extra metazone string"|"inconsistent draft status"|"error or warning in logical group"|"value too wide"|"value too narrow"|"name contains year"|"pattern cannot contain digits"|"pattern contains invalid characters"|"parentheses not allowed"|"illegal numbering system"|"unexpected order of era year"|"invalid place holder"|"ascii quotes not allowed"|"bad minimum grouping digits"|"inconsistent periods"|"inheritance marker not allowed"|"invalid duration unit pattern"|"invalid delimiter"|"illegal characters in pattern"|"bad parse lenient"|"too many values"|"invalid symbol"|"invalid gender code"|"mismatched unit component"|"long power with subscripts"|"gaps in placeholder numbers"|"duplicate placeholders"|"larger differences"|"missing non alt path"|"bad sample person name"|"missing language"|"name placeholder problem"|"missing space between name fields"|"illegal parameter value"|"illegal annotation code";
/**
 * @description Winning value in this locale
 * @example {0} dstspn Imp
 */
winning?:string;
/**
 * @example 7bd36b15a66d02cf
 */
xpstrid?:string;};

/**
 * @description Heading for a portion of the notifications
 */
export type ReviewNotification = {/**
 * @description Notification category
 * @example English_Changed
 */
category?:string;
groups?:Array<ReviewNotificationGroup>;};

/**
 * @description Group of notifications which share the same section/page/header
 */
export type ReviewNotificationGroup = {entries?:Array<ReviewEntry>;
/**
 * @description SurveyTool header
 * @example dessert-spoon-imperial
 */
header?:string;
/**
 * @description SurveyTool page
 * @example Area
 */
page?:string;
/**
 * @description SurveyTool section
 * @example Units
 */
section?:string;};

/**
 * @description Output of Dashboard
 */
export type ReviewOutput = {/**
 * @description Coverage level for this dashboard
 */
coverageLevel?:string;
/**
 * @description Notifications that the user has chosen to hide
 */
hidden?:{[key: string]:Array<PathValuePair>;};
/**
 * @description list of notifications
 */
notifications?:Array<ReviewNotification>;
voterProgress?:VoterProgress;};

export type Row = {canFlagOnLosing?:boolean;
code?:string;
confirmStatus?:"missing"|"unconfirmed"|"provisional"|"contributed"|"approved";
coverageValue?:number;
dir?:string;
displayExample?:string;
displayName?:string;
extraAttributes?:{[key: string]:string;};
/**
 * @description True if candidates are fixed (disable plus).
 * @example false
 */
fixedCandidates?:boolean;
flagged?:boolean;
hasVoted?:boolean;
helpHtml?:string;
inheritedDisplayValue?:string;
inheritedLocale?:string;
inheritedValue?:string;
inheritedXpid?:string;
items?:{[key: string]:Candidate;};
/**
 * @description map of placeholder string to example value
 */
placeholderInfo?:{[key: string]:PlaceholderInfo;};
/**
 * @description status of placeholder value
 * @example REQUIRED
 */
placeholderStatus?:"DISALLOWED: No placeholders allowed."|"REQUIRED: Specific number of placeholders allowed."|"LOCALE_DEPENDENT: Some placeholders may be omitted in certain locales"|"MULTIPLE: May have multiple instances of the same placeholder, eg “{0} cats and {0} dogs”."|"OPTIONAL: Any specific placeholder is optional (and non-numeric); there must be at least one.";
rawEnglish?:string;
rdf?:string;
rowFlagged?:boolean;
statusAction?:"ALLOW"|"ALLOW_VOTING_AND_TICKET"|"ALLOW_VOTING_BUT_NO_ADD"|"ALLOW_TICKET_ONLY"|"FORBID_ERRORS"|"FORBID_READONLY"|"FORBID_UNLESS_DATA_SUBMISSION"|"FORBID_NULL"|"FORBID_ROOT"|"FORBID_CODE"|"FORBID_PERMANENT_WITHOUT_FORUM";
translationHint?:string;
/**
 * @description prose description of voting outcome
 */
voteTranscript?:string;
voteVhash?:string;
votingResults?:VotingResultsString;
winningValue?:string;
winningVhash?:string;
xpath?:string;
xpathId?:number;
xpstrid?:string;};

export type RowResponse = {canModify?:{[key: string]: never};
/**
 * @description If set, row is not available because there is a Default Content parent. See the specified locale instead.
 */
dcParent?:string;
displaySets?:DisplaySets;
issues?:JSONArray;
localeDisplayName?:string;
notifications?:Array<ReviewNotification>;
page?:Page;
pageId?:string;
xpstrid?:string;};

export type SearchRequest = {/**
 * @description Value to search for
 */
value?:string;};

export type SearchResponse = {/**
 * @description true if the search is now complete (all results in)
 */
isComplete?:boolean;
/**
 * @description true if the search is still ongoing (not cancelled or finished)
 */
isOngoing?:boolean;
/**
 * @description when the search was started
 * @format date-time
 */
lastUpdated?:string;
/**
 * @description array of search results, in found order
 */
results?:Array<SearchResult>;
/**
 * @description when the search was started
 * @format date-time
 */
searchStart?:string;
/**
 * @description token for retrieving further data from the query
 */
token?:string;};

export type SearchResult = {/**
 * @description context of the match
 */
context?:string;
/**
 * @description locale of the match
 */
locale?:string;
/**
 * @description xpath to the resource
 */
xpath?:string;
/**
 * @description xpstrid to the resource
 */
xpstrid?:string;};

/**
 * @description Response for List Snapshots request
 */
export type SnapshotListResponse = {/**
 * @description Array of available snapshots
 */
array?:Array<string>;};

export type SortMode = {[key: string]: never};

export type StandardCodeResult = {code?:string;
data?:Array<StandardCodeResultDataItem>;
type?:string;};

export type StandardCodeResultDataItem = {isWinner?:boolean;
s?:string;};

export type StatusType = {family?:"INFORMATIONAL"|"SUCCESSFUL"|"REDIRECTION"|"CLIENT_ERROR"|"SERVER_ERROR"|"OTHER";
reasonPhrase?:string;
statusCode?:number;};

/**
 * @description Error return object
 */
export type STError = {/**
 * @description Error code if present
 */
code?:"E_UNKNOWN"|"E_INTERNAL"|"E_BAD_SECTION"|"E_BAD_LOCALE"|"E_NOT_STARTED"|"E_SPECIAL_SECTION"|"E_SESSION_DISCONNECTED"|"E_DISCONNECTED"|"E_NO_PERMISSION"|"E_NOT_LOGGED_IN"|"E_BAD_VALUE"|"E_BAD_XPATH"|"E_NO_OLD_VOTES"|"E_PERMANENT_VOTE_NO_FORUM"|"E_VOTE_NOT_ACCEPTED";
/**
 * @description Always set to true, identifies this as an error.
 */
err?:boolean;
/**
 * @description Error message
 */
message?:string;
status?:"OK"|"Created"|"Accepted"|"No Content"|"Reset Content"|"Partial Content"|"Moved Permanently"|"Found"|"See Other"|"Not Modified"|"Use Proxy"|"Temporary Redirect"|"Bad Request"|"Unauthorized"|"Payment Required"|"Forbidden"|"Not Found"|"Method Not Allowed"|"Not Acceptable"|"Proxy Authentication Required"|"Request Timeout"|"Conflict"|"Gone"|"Length Required"|"Precondition Failed"|"Request Entity Too Large"|"Request-URI Too Long"|"Unsupported Media Type"|"Requested Range Not Satisfiable"|"Expectation Failed"|"Precondition Required"|"Too Many Requests"|"Request Header Fields Too Large"|"Internal Server Error"|"Not Implemented"|"Bad Gateway"|"Service Unavailable"|"Gateway Timeout"|"HTTP Version Not Supported"|"Network Authentication Required";};

export type SubmissionRequest = {/**
 * @description audience
 */
audience?:string;
/**
 * @description body
 */
body?:string;
/**
 * @description locales
 */
locs?:string;
/**
 * @description orgs
 */
orgs?:string;
/**
 * @description subject
 */
subject?:string;
valid?:boolean;};

/**
 * @description Summary Request
 */
export type SummaryRequest = {/**
 * @default NOSTART
 */
loadingPolicy?:"START"|"NOSTART"|"FORCESTOP";
snapshotId?:string;
snapshotPolicy?:string;
summarizeAllLocales?:boolean;};

/**
 * @description Summary Response
 */
export type SummaryResponse = {/**
 * @description HTML current status message
 */
message?:string;
/**
 * @description HTML output on success
 */
output?:string;
/**
 * @description Estimated percentage complete
 */
percent?:{[key: string]: never};
/**
 * @description Snapshot ID, or NA for Not Applicable
 */
snapshotId?:string;
/**
 * @description vetting viewer status enum
 */
status?:"WAITING"|"PROCESSING"|"READY"|"STOPPED";};

export type SurveyParticipation = {allParticipationByLocale?:{[key: string]:number;};
allParticipationByOrgLocale?:{[key: string]:{[key: string]:number;};};};

export type UriBuilder = {[key: string]: never};

export type User = {authorizedLocaleSet?:LocaleSet;
/**
 * @description User email
 */
email?:string;
emailHash?:string;
/**
 * @description User ID
 */
id?:number;
interestLocales?:LocaleSet;
/**
 * @description User name
 */
name?:string;
/**
 * @description User org
 */
org?:string;
organization?:"adlam"|"adobe"|"afghan_csa"|"afghan_mcit"|"afrigen"|"anii"|"apple"|"bangladesh"|"bangor_univ"|"bhutan"|"breton"|"cherokee"|"choctaw"|"cldr"|"gaeilge"|"georgia_isi"|"gnome"|"google"|"ibm"|"india"|"iran_hci"|"kendra"|"kotoistus"|"kunsill_malti"|"lakota_lc"|"lao_dpt"|"longnow"|"meta"|"microsoft"|"mikmaw_kinamatnewey"|"mozilla"|"netflix"|"nyiakeng_puachue_hmong"|"openinstitute"|"openoffice_org"|"oracle"|"pakistan"|"rodakych"|"rohingyazuban"|"rumantscha"|"sardware"|"sil"|"special"|"srilanka"|"surveytool"|"unaffiliated"|"venetian"|"welsh_lc"|"wikimedia"|"wod_nko"|"wsci_wg"|"yahoo";
/**
 * @description array of permissions for this user
 */
permissions?:{[key: string]:boolean;};
/**
 * @format date-time
 */
time?:string;
/**
 * @description numeric userlevel
 */
userlevel?:number;
/**
 * @description VoteResolver.Level user level
 */
userLevelName?:"locked"|"guest"|"anonymous"|"vetter"|"manager"|"tc"|"admin";
/**
 * @description how much this user’s vote counts for
 */
voteCount?:number;
voterInfo?:VoterInfo;};

export type UserInfo = {email?:string;
emailHash?:string;
level?:"locked"|"guest"|"anonymous"|"vetter"|"manager"|"tc"|"admin";
name?:string;
org?:string;
userid?:number;};

export type UserReport = {/**
 * @description User ID
 */
id?:number;
/**
 * @description the latest date that something was changed, or null
 */
lastMod?:string;
/**
 * @description User’s status for all reports
 */
statuses?:{[key: string]:ReportStatus;};};

export type VoteEntry = {email?:string;
level?:"locked"|"guest"|"anonymous"|"vetter"|"manager"|"tc"|"admin";
name?:string;
org?:string;
overridedVotes?:number;
userid?:string;
votes?:number;};

export type VoteRequest = {/**
 * @description String value for vote
 */
value?:string;
/**
 * @description If set/nonzero, integer level of vote for an overridden vote level, otherwise the default level for the user is used
 * @default null
 */
voteLevelChanged?:number;};

export type VoteResponse = {/**
 * @description If set, some other reason why the submission failed.
 */
didNotSubmit?:string;
/**
 * @description True if voting succeeded.
 */
didVote?:boolean;
/**
 * @description If not ALLOW_*, gives reason why the voting was not allowed.
 */
statusAction?:"ALLOW"|"ALLOW_VOTING_AND_TICKET"|"ALLOW_VOTING_BUT_NO_ADD"|"ALLOW_TICKET_ONLY"|"FORBID_ERRORS"|"FORBID_READONLY"|"FORBID_UNLESS_DATA_SUBMISSION"|"FORBID_NULL"|"FORBID_ROOT"|"FORBID_CODE"|"FORBID_PERMANENT_WITHOUT_FORUM";
/**
 * @description True if testResults include errors.
 */
testErrors?:boolean;
/**
 * @description Results of status checks.
 */
testResults?:Array<CheckStatusSummary>;
/**
 * @description True if testResults include warnings.
 */
testWarnings?:boolean;};

export type VoterInfo = {level?:"locked"|"guest"|"anonymous"|"vetter"|"manager"|"tc"|"admin";
locales?:IterableCLDRLocale;
name?:string;
organization?:"adlam"|"adobe"|"afghan_csa"|"afghan_mcit"|"afrigen"|"anii"|"apple"|"bangladesh"|"bangor_univ"|"bhutan"|"breton"|"cherokee"|"choctaw"|"cldr"|"gaeilge"|"georgia_isi"|"gnome"|"google"|"ibm"|"india"|"iran_hci"|"kendra"|"kotoistus"|"kunsill_malti"|"lakota_lc"|"lao_dpt"|"longnow"|"meta"|"microsoft"|"mikmaw_kinamatnewey"|"mozilla"|"netflix"|"nyiakeng_puachue_hmong"|"openinstitute"|"openoffice_org"|"oracle"|"pakistan"|"rodakych"|"rohingyazuban"|"rumantscha"|"sardware"|"sil"|"special"|"srilanka"|"surveytool"|"unaffiliated"|"venetian"|"welsh_lc"|"wikimedia"|"wod_nko"|"wsci_wg"|"yahoo";};

export type VoterProgress = {typeCount?:{[key: string]:number;};
votablePathCount?:number;
votedPathCount?:number;};

export type VotingParticipationResults = {onlyOrg?:"adlam"|"adobe"|"afghan_csa"|"afghan_mcit"|"afrigen"|"anii"|"apple"|"bangladesh"|"bangor_univ"|"bhutan"|"breton"|"cherokee"|"choctaw"|"cldr"|"gaeilge"|"georgia_isi"|"gnome"|"google"|"ibm"|"india"|"iran_hci"|"kendra"|"kotoistus"|"kunsill_malti"|"lakota_lc"|"lao_dpt"|"longnow"|"meta"|"microsoft"|"mikmaw_kinamatnewey"|"mozilla"|"netflix"|"nyiakeng_puachue_hmong"|"openinstitute"|"openoffice_org"|"oracle"|"pakistan"|"rodakych"|"rohingyazuban"|"rumantscha"|"sardware"|"sil"|"special"|"srilanka"|"surveytool"|"unaffiliated"|"venetian"|"welsh_lc"|"wikimedia"|"wod_nko"|"wsci_wg"|"yahoo";
participationByVersion?:{[key: string]:SurveyParticipation;};
results?:Array<OrgParticipation>;};

export type VotingResults = {nameTime?:{/**
 * @format int64
 */
[key: string]:number;};
orgs?:{[key: string]:OrgValueVotesObject;};
requiredVotes?:number;
/**
 * @description 1-dimensional array of value, vote, value, vote…
 */
value_vote?:Array<{[key: string]: never}>;
valueIsLocked?:boolean;};

export type VotingResultsReportAcceptability = {nameTime?:{/**
 * @format int64
 */
[key: string]:number;};
orgs?:{[key: string]:OrgValueVotesReportAcceptability;};
requiredVotes?:number;
/**
 * @description 1-dimensional array of value, vote, value, vote…
 */
value_vote?:Array<{[key: string]: never}>;
valueIsLocked?:boolean;};

export type VotingResultsString = {nameTime?:{/**
 * @format int64
 */
[key: string]:number;};
orgs?:{[key: string]:OrgValueVotesString;};
requiredVotes?:number;
/**
 * @description 1-dimensional array of value, vote, value, vote…
 */
value_vote?:Array<{[key: string]: never}>;
valueIsLocked?:boolean;};

/**
 * @description Return value for Whatis query
 */
export type WhatisResponse = {err?:string;
exact?:Array<StandardCodeResult>;
full?:Array<StandardCodeResult>;
localesSearched?:number;
pathsSearched?:number;
/**
 * @description query string
 */
q?:string;
q2?:string;
xpath?:Array<XpathResult>;};

/**
 * @description Return value for XPath query
 */
export type XPathInfo = {/**
 * @description Decimal (serial number). Not portable across instances.
 */
decimalId?:number;
/**
 * @description Hex (hash) of XPath.
 */
hexId?:string;
/**
 * @description XPath (String) value
 */
xpath?:string;};

export type XPathRequest = {/**
 * @description XPath string
 * @example //ldml/localeDisplayNames/localeDisplayPattern/localeSeparator
 */
str:string;};

export type XpathResult = {loc?:string;
matches?:Array<PathAndValue>;
name?:string;};
/**
 * @example [object Object]
 */
export type GetAboutResData = {[key: string]: never};
/**
 * @title Get ST info
 * @description Returns detailed information about the Survey Tool
 */
export async function getAbout(config?:AxiosRequestConfig): AxiosPromise<GetAboutResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/about`),
method: GET,
...config
              });
            }

export type AddUserReqData = AddUserRequest;
/**
 * @description Response for AddUser query
 * @example {"email":"test@example.com","userId":2526}
 */
export type AddUserResData = {/**
 * @description Normalized e-mail of new user
 */
email?:string;
/**
 * @description Error code
 */
err?:"BAD_NAME"|"BAD_EMAIL"|"BAD_ORG"|"BAD_LEVEL"|"DUP_EMAIL"|"UNKNOWN";
/**
 * @description User ID of successfully created new user
 */
userId?:number;};
/**
 * @title Add User
 * @description This handles a request to add a new user
 */
export async function addUser(data:AddUserReqData, config?:AxiosRequestConfig): AxiosPromise<AddUserResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/adduser`),
method: POST,
data,
...config
              });
            }

export type GetAnnouncementsResData = AnnouncementResponse;
/**
 * @title Get announcements
 * @description Get announcements
 */
export async function getAnnouncements(config?:AxiosRequestConfig): AxiosPromise<GetAnnouncementsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/announce`),
method: GET,
...config
              });
            }

export type SubmitAnnouncementReqData = SubmissionRequest;
export type SubmitAnnouncementResData = Response;
/**
 * @title Submit an announcement
 * @description Submit an announcement
 */
export async function submitAnnouncement(data:SubmitAnnouncementReqData, config?:AxiosRequestConfig): AxiosPromise<SubmitAnnouncementResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/announce`),
method: POST,
data,
...config
              });
            }

export type CheckReadReqData = CheckReadRequest;
export type CheckReadResData = Response;
/**
 * @title Set already-read status
 * @description Indicate whether an announcement has been read
 */
export async function checkRead(data:CheckReadReqData, config?:AxiosRequestConfig): AxiosPromise<CheckReadResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/announce/checkread`),
method: POST,
data,
...config
              });
            }

export type InfoReqParams = {/**
 * @description Session ID to check
 */
session?:string;
/**
 * @description Whether to mark the session as updated
 * @default false
 */
touch?:boolean;};
export type InfoResData = LoginResponse;
/**
 * @title Validate session
 * @description Validate session and return user info.
 */
export async function info(params?:InfoReqParams, config?:AxiosRequestConfig): AxiosPromise<InfoResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/auth/info`),
method: GET,
params,
...config
              });
            }

export type LockReqData = LockRequest;
export type LockResData = LoginResponse;
/**
 * @title Lock (disable) account
 * @description Lock (disable, unsubscribe) the account of the user making the request.
 */
export async function lock(data:LockReqData, config?:AxiosRequestConfig): AxiosPromise<LockResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/auth/lock`),
method: POST,
data,
...config
              });
            }

export type LoginReqParams = {/**
 * @description If true, remember login
 * @default false
 */
remember?:boolean;};
export type LoginReqData = LoginRequest;
export type LoginResData = LoginResponse;
/**
 * @title Login and get a CookieSession id
 * @description This logs in with a username/password and returns a CookieSession
 */
export async function login(data:LoginReqData, params?:LoginReqParams, config?:AxiosRequestConfig): AxiosPromise<LoginResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/auth/login`),
method: POST,
params,
data,
...config
              });
            }

export type LogoutReqParams = {/**
 * @description Session ID to logout
 */
session?:string;};
/**
 * @title Logout, clear cookies
 * @description Clear auto-login cookies, and log out the specified session.
 */
export async function logout(params?:LogoutReqParams, config?:AxiosRequestConfig): AxiosPromise<never>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/auth/logout`),
method: GET,
params,
...config
              });
            }

export type GetLocaleCompletionReqPath = {/**
 * @description Locale ID
 * @example aa
 */
locale:string;};
export type GetLocaleCompletionResData = LocaleCompletionResponse;
/**
 * @title Get locale completion statistics
 * @description Get locale completion statistics for the given locale
 */
export async function getLocaleCompletion(path:GetLocaleCompletionReqPath, config?:AxiosRequestConfig): AxiosPromise<GetLocaleCompletionResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/completion/locale/${path.locale}`),
method: GET,
...config
              });
            }

export type SetIntLocsReqData = IntLocsRequest;
/**
 * @example {
 *   "status": "OK",
 * }
 * 
 */
export type SetIntLocsResData = {[key: string]: never};
/**
 * @title Set interest locales
 * @description Enables users to specify their locales of interest
 */
export async function setIntLocs(data:SetIntLocsReqData, config?:AxiosRequestConfig): AxiosPromise<SetIntLocsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/intlocs`),
method: POST,
data,
...config
              });
            }

export type CombineRegionalVariantsReqParams = {/**
 * @description Space-separated list of locales
 * @example zh fr_BE fr_CA
 */
locs:string;};
export type CombineRegionalVariantsResData = LocaleNormalizerResponse;
/**
 * @title Combine regional variants and normalize a list of Locales
 * @description Return a combined/normalized list of locales
 */
export async function combineRegionalVariants(params:CombineRegionalVariantsReqParams, config?:AxiosRequestConfig): AxiosPromise<CombineRegionalVariantsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/locales/combine-variants`),
method: GET,
params,
...config
              });
            }

export type NormalizeReqParams = {/**
 * @description Space-separated list of locales
 * @example jgo vec kjj
 */
locs:string;
/**
 * @description Optional Organization, as a coverage limit
 * @example adlam
 */
org?:string;};
export type NormalizeResData = LocaleNormalizerResponse;
/**
 * @title Normalize a list of Locales
 * @description Return a list of all locales
 */
export async function normalize(params:NormalizeReqParams, config?:AxiosRequestConfig): AxiosPromise<NormalizeResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/locales/normalize`),
method: GET,
params,
...config
              });
            }

export type GetMissingXmlReqPath = {/**
 * @description Locale ID
 */
locale:string;
/**
 * @description Coverage Level
 */
level:string;};
/**
 * @title Generate missing XML
 * @description Generate XML for error/missing/provisional paths, as basis for bulk submission
 */
export async function getMissingXml(path:GetMissingXmlReqPath, config?:AxiosRequestConfig): AxiosPromise<never>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/missingxml/${path.locale}/${path.level}`),
method: GET,
...config
              });
            }

export type GetOrgsResData = OrgMapResponse;
/**
 * @title Get Organization Map
 * @description This handles a request for the list of organizations
 */
export async function getOrgs(config?:AxiosRequestConfig): AxiosPromise<GetOrgsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/organizations`),
method: GET,
...config
              });
            }

export type SearchDeleteReqPath = {token:string;};
/**
 * @title Cancel search
 * @description Cancel an existing search
 */
export async function searchDelete(path:SearchDeleteReqPath, config?:AxiosRequestConfig): AxiosPromise<never>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/search/status/${path.token}`),
method: DELETE,
...config
              });
            }

export type SearchStatusReqPath = {token:string;};
export type SearchStatusResData = SearchResponse;
/**
 * @title Get status of existing search
 * @description Check on status of an existing search
 */
export async function searchStatus(path:SearchStatusReqPath, config?:AxiosRequestConfig): AxiosPromise<SearchStatusResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/search/status/${path.token}`),
method: GET,
...config
              });
            }

export type NewSearchReqParams = {/**
 * @example jgo
 */
locale?:string;};
export type NewSearchReqData = SearchRequest;
export type NewSearchResData = SearchResponse;
/**
 * @title Begin a new search
 * @description Searches for paths containing the given string value
 */
export async function newSearch(data:NewSearchReqData, params?:NewSearchReqParams, config?:AxiosRequestConfig): AxiosPromise<NewSearchResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/search/value`),
method: POST,
params,
data,
...config
              });
            }

export type DoVettingSummaryReqData = SummaryRequest;
export type DoVettingSummaryResData = SummaryResponse;
/**
 * @title Get Priority Items Summary
 * @description Also known as Vetting Summary, this like a Dashboard for multiple locales.
 */
export async function doVettingSummary(data:DoVettingSummaryReqData, config?:AxiosRequestConfig): AxiosPromise<DoVettingSummaryResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/summary`),
method: POST,
data,
...config
              });
            }

export type GetDashboardReqPath = {/**
 * @description Locale ID
 */
locale:string;
/**
 * @description Coverage Level
 */
level:string;};
export type GetDashboardResData = ReviewOutput;
/**
 * @title Fetch the user's Dashboard for a locale
 * @description Given a locale, get the summary information, aka Dashboard
 */
export async function getDashboard(path:GetDashboardReqPath, config?:AxiosRequestConfig): AxiosPromise<GetDashboardResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/summary/dashboard/${path.locale}/${path.level}`),
method: GET,
...config
              });
            }

export type GetCoverageStatusResData = CoverageStatusResponse;
export async function getCoverageStatus(config?:AxiosRequestConfig): AxiosPromise<GetCoverageStatusResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/summary/dashboard/coverageStatus`),
method: GET,
...config
              });
            }

export type GetParticipationForReqPath = {/**
 * @description User ID
 */
user:number;
/**
 * @description Locale ID
 */
locale:string;
/**
 * @description Coverage Level or 'org'
 */
level:string;};
export type GetParticipationForResData = ParticipationResults;
/**
 * @title Fetch another user's participation for a locale. Manager only.
 * @description Given a locale, get the participation information, for another user
 */
export async function getParticipationFor(path:GetParticipationForReqPath, config?:AxiosRequestConfig): AxiosPromise<GetParticipationForResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/summary/participation/for/${path.user}/${path.locale}/${path.level}`),
method: GET,
...config
              });
            }

export type ListSnapshotsResData = SnapshotListResponse;
/**
 * @title List All Snapshots
 * @description Get a list of all available snapshots of the Priority Items Summary
 */
export async function listSnapshots(config?:AxiosRequestConfig): AxiosPromise<ListSnapshotsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/summary/snapshots`),
method: GET,
...config
              });
            }

export type GetLevelsResData = string;
/**
 * @title Get User Level List
 * @description Handle a request for the list of user levels and associated data partly depending on current user rights
 */
export async function getLevels(config?:AxiosRequestConfig): AxiosPromise<GetLevelsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/userlevels`),
method: GET,
...config
              });
            }

export type GetUserInfoReqPath = {/**
 * @example 1234
 */
uid:number;};
export type GetUserInfoResData = UserInfo;
/**
 * @title Get user info
 * @description Returns information about a user
 */
export async function getUserInfo(path:GetUserInfoReqPath, config?:AxiosRequestConfig): AxiosPromise<GetUserInfoResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/users/info/${path.uid}`),
method: GET,
...config
              });
            }

export type GetPageReqPath = {/**
 * @example br
 */
locale:string;
/**
 * @example Languages_K_N
 */
page:string;};
export type GetPageReqParams = {/**
 * @description Xpath string ID if page is auto
 * @default 
 */
xpstrid?:string;};
export type GetPageResData = RowResponse;
/**
 * @title Get page info
 * @description Get all info for all xpaths in a page
 */
export async function getPage(path:GetPageReqPath, params?:GetPageReqParams, config?:AxiosRequestConfig): AxiosPromise<GetPageResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/${path.locale}/page/${path.page}`),
method: GET,
params,
...config
              });
            }

export type GetRowReqPath = {/**
 * @example br
 */
locale:string;
/**
 * @example 132345490064d839
 */
xpstrid:string;};
export type GetRowReqParams = {/**
 * @description Whether to get dashboard info
 * @default false
 */
dashboard?:boolean;};
export type GetRowResData = RowResponse;
/**
 * @title Get row info
 * @description Get info for a single xpath
 */
export async function getRow(path:GetRowReqPath, params?:GetRowReqParams, config?:AxiosRequestConfig): AxiosPromise<GetRowResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/${path.locale}/row/${path.xpstrid}`),
method: GET,
params,
...config
              });
            }

export type VoteReqPath = {/**
 * @example br
 */
locale:string;
/**
 * @example 132345490064d839
 */
xpstrid:string;};
export type VoteReqData = VoteRequest;
export type VoteResData = VoteResponse;
/**
 * @title Submit a vote
 * @description Submit a specific vote
 */
export async function vote(path:VoteReqPath, data:VoteReqData, config?:AxiosRequestConfig): AxiosPromise<VoteResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/${path.locale}/row/${path.xpstrid}`),
method: POST,
data,
...config
              });
            }

export type DeleteImportedResData = DowngradedStatsResponse;
/**
 * @title Delete
 * @description Delete imported votes for downgraded paths
 */
export async function deleteImported(config?:AxiosRequestConfig): AxiosPromise<DeleteImportedResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/downgraded`),
method: DELETE,
...config
              });
            }

export type GetStatsResData = DowngradedStatsResponse;
/**
 * @title Get statistics
 * @description Get statistics about votes for downgraded paths
 */
export async function getStats(config?:AxiosRequestConfig): AxiosPromise<GetStatsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/downgraded`),
method: GET,
...config
              });
            }

export type GetParticipationResData = VotingParticipationResults;
/**
 * @title Get voting participation summary
 * @description Get voting participation summary
 */
export async function getParticipation(config?:AxiosRequestConfig): AxiosPromise<GetParticipationResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/participation`),
method: GET,
...config
              });
            }

export type ListReportsResData = Array<string>;
/**
 * @title List all report types
 */
export async function listReports(config?:AxiosRequestConfig): AxiosPromise<ListReportsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/reports`),
method: GET,
...config
              });
            }

export type GetReportLocaleStatusReqPath = {/**
 * @description Locale ID or '-' for all
 * @example en
 */
locale:string;};
export type GetReportLocaleStatusResData = LocaleReportVettingResults;
/**
 * @title List vetting results of one or more locales
 */
export async function getReportLocaleStatus(path:GetReportLocaleStatusReqPath, config?:AxiosRequestConfig): AxiosPromise<GetReportLocaleStatusResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/reports/locales/${path.locale}`),
method: GET,
...config
              });
            }

export type GetReportOutputReqPath = {/**
 * @example mt
 */
locale:string;
/**
 * @example compact
 */
report:"datetime"|"zones"|"compact"|"personnames";};
/**
 * @title Get the report output
 */
export async function getReportOutput(path:GetReportOutputReqPath, config?:AxiosRequestConfig): AxiosPromise<never>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/reports/locales/${path.locale}/reports/${path.report}.html`),
method: GET,
...config
              });
            }

export type GetAllReportsReqPath = {/**
 * @description user ID or '-' for all
 * @example 1
 */
user:string;};
export type GetAllReportsResData = Array<UserReport>;
/**
 * @title Get User Report Status
 * @description Get one or all user’s report status
 */
export async function getAllReports(path:GetAllReportsReqPath, config?:AxiosRequestConfig): AxiosPromise<GetAllReportsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/reports/users/${path.user}`),
method: GET,
...config
              });
            }

export type GetReportReqPath = {/**
 * @example 1
 */
user:number;
/**
 * @example mt
 */
locale:string;};
export type GetReportResData = ReportStatus;
/**
 * @title Get Report Status
 * @description This handles a request for a specific user and locale report status
 */
export async function getReport(path:GetReportReqPath, config?:AxiosRequestConfig): AxiosPromise<GetReportResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/reports/users/${path.user}/locales/${path.locale}`),
method: GET,
...config
              });
            }

export type UpdateReportReqPath = {/**
 * @example 1
 */
user:number;
/**
 * @example mt
 */
locale:string;
/**
 * @example compact
 */
report:"datetime"|"zones"|"compact"|"personnames";};
/**
 * @description Two parameters 
 */
export type UpdateReportReqData = {/**
 * @description True if values were acceptable. False if values weren’t acceptable, but user has voted for correct ones.
 */
acceptable?:boolean;
/**
 * @description True if user has completed evaluating this report, False if not complete. May not be !complete&&acceptable.
 */
completed?:boolean;};
/**
 * @title Update Report Status
 * @description This updates a specific user’s report status. You can only update your own status.
 */
export async function updateReport(path:UpdateReportReqPath, data?:UpdateReportReqData, config?:AxiosRequestConfig): AxiosPromise<never>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/voting/reports/users/${path.user}/locales/${path.locale}/reports/${path.report}`),
method: POST,
data,
...config
              });
            }

export type GetWhatisReqParams = {/**
 * @example jgo
 */
q:string;
/**
 * @example en_US
 */
loc:string;};
export type GetWhatisResData = WhatisResponse;
/**
 * @title Look up a code
 * @description Searches for codes containing the given string, with the given base locale
 */
export async function getWhatis(params:GetWhatisReqParams, config?:AxiosRequestConfig): AxiosPromise<GetWhatisResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/whatis`),
method: GET,
params,
...config
              });
            }

export type PutByHexReqData = AddAltPathRequest;
export type PutByHexResData = AddAltPathRequest;
/**
 * @title Add alt path
 * @description Create a new alt path in the given locale
 */
export async function putByHex(data:PutByHexReqData, config?:AxiosRequestConfig): AxiosPromise<PutByHexResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/alt`),
method: POST,
data,
...config
              });
            }

export type GetAltByHexReqPath = {/**
 * @example aa
 */
localeId:string;
/**
 * @example 6154e7673c3829ce
 */
hexId:string;};
export type GetAltByHexResData = AltSetResponse;
/**
 * @title Fetch alt values from locale and XPath Hex ID
 * @description Looks up the alt values that could be added for a specific XPath Hex ID.
 */
export async function getAltByHex(path:GetAltByHexReqPath, config?:AxiosRequestConfig): AxiosPromise<GetAltByHexResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/alt/${path.localeId}/${path.hexId}`),
method: GET,
...config
              });
            }

export type GetByDecimalReqPath = {/**
 * @example 5678
 */
decId:number;};
export type GetByDecimalResData = XPathInfo;
/**
 * @title Fetch XPath string from decimal id
 * @description Looks up a specific decimal ID.
 */
export async function getByDecimal(path:GetByDecimalReqPath, config?:AxiosRequestConfig): AxiosPromise<GetByDecimalResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/dec/${path.decId}`),
method: GET,
...config
              });
            }

export type GetByHexReqPath = {/**
 * @example 1234abcd
 */
hexId:string;};
export type GetByHexResData = XPathInfo;
/**
 * @title Fetch XPath string from hex id
 * @description Looks up a specific hex ID.
 */
export async function getByHex(path:GetByHexReqPath, config?:AxiosRequestConfig): AxiosPromise<GetByHexResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/hex/${path.hexId}`),
method: GET,
...config
              });
            }

export type GetInheritanceByHexReqPath = {/**
 * @example aa
 */
localeId:string;
/**
 * @example 6154e7673c3829ce
 */
hexId:string;};
export type GetInheritanceByHexResData = InheritanceResponse;
/**
 * @title Explain inheritance of an xpath
 * @description Looks up the xpath and explains its inheritance
 */
export async function getInheritanceByHex(path:GetInheritanceByHexReqPath, config?:AxiosRequestConfig): AxiosPromise<GetInheritanceByHexResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/inheritance/locale/${path.localeId}/${path.hexId}`),
method: GET,
...config
              });
            }

export type GetReasonsResData = Array<ReasonInfo>;
/**
 * @title Returns the descriptions of the reason enums
 */
export async function getReasons(config?:AxiosRequestConfig): AxiosPromise<GetReasonsResData>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/inheritance/reasons`),
method: GET,
...config
              });
            }

export type GetByStringReqData = XPathRequest;
/**
 * @title Fetch hex and decimal id from XPath string
 * @description Looks up the ids for a specific XPath string.
 */
export async function getByString(data:GetByStringReqData, config?:AxiosRequestConfig): AxiosPromise<never>  {
              return axios({
                url: resolveURL(BASE_URL, `/api/xpath/str`),
method: POST,
data,
...config
              });
            }