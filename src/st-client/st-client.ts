/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Locale {
  language?: string;
  displayName?: string;
  script?: string;
  country?: string;
  variant?: string;
  /** @uniqueItems true */
  extensionKeys?: string[];
  /** @uniqueItems true */
  unicodeLocaleAttributes?: string[];
  /** @uniqueItems true */
  unicodeLocaleKeys?: string[];
  iso3Language?: string;
  iso3Country?: string;
  displayLanguage?: string;
  displayScript?: string;
  displayCountry?: string;
  displayVariant?: string;
}

export type Comparable = object;

export interface DisplaySets {
  ph?: DisplaySet;
}

/** Return value for XPath query */
export interface XPathInfo {
  /** XPath (String) value */
  xpath?: string;
  /** Decimal (serial number). Not portable across instances. */
  decimalId?: number;
  /** Hex (hash) of XPath. */
  hexId?: string;
}

export interface SubmissionRequest {
  /** subject */
  subject?: string;
  /** body */
  body?: string;
  /** audience */
  audience?: string;
  /** locales */
  locs?: string;
  /** orgs */
  orgs?: string;
  valid?: boolean;
}

/** Stats of downgraded paths */
export interface DowngradedStatsResponse {
  /** Number of votes for downgraded paths, categorized by vote type */
  cats?: DowngradeCategory[];
}

/** Response for AddUser query */
export interface AddUserResponse {
  /** User ID of successfully created new user */
  userId?: number;
  /** Normalized e-mail of new user */
  email?: string;
  /** Error code */
  err?: "BAD_NAME" | "BAD_EMAIL" | "BAD_ORG" | "BAD_LEVEL" | "DUP_EMAIL" | "UNKNOWN";
}

export interface Page {
  nocontent?: boolean;
  rows?: Record<string, Row>;
}

export interface XpathResult {
  loc?: string;
  name?: string;
  matches?: PathAndValue[];
}

export interface ReportVettingResult {
  report?: "datetime" | "zones" | "compact" | "personnames";
  status?: "missing" | "unconfirmed" | "provisional" | "contributed" | "approved";
  acceptability?: "notAcceptable" | "acceptable";
  votersForAcceptable?: number;
  votersForNotAcceptable?: number;
  /** @format int64 */
  acceptableScore?: number;
  /** @format int64 */
  notAcceptableScore?: number;
  transcript?: string;
  resolvedVoteCounts?: Record<string, number>;
  votingResults?: VotingResultsReportAcceptability;
  votes?: Record<string, "notAcceptable" | "acceptable">;
}

export interface AddAltPathRequest {
  /** Locale ID */
  localeId?: string;
  /** XPath Hex ID */
  hexId?: string;
  /** New alt value */
  alt?: string;
}

export interface OrgValueVotes {
  conflicted?: boolean;
  orgVote?: object;
  status?: string;
  votes?: Record<string, number>;
}

/** Response for List Snapshots request */
export interface SnapshotListResponse {
  /** Array of available snapshots */
  array?: string[];
}

/** Return value for Whatis query */
export interface WhatisResponse {
  /** query string */
  q?: string;
  q2?: string;
  err?: string;
  pathsSearched?: number;
  localesSearched?: number;
  xpath?: XpathResult[];
  exact?: StandardCodeResult[];
  full?: StandardCodeResult[];
}

export interface VotingResultsString {
  nameTime?: Record<string, number>;
  orgs?: Record<string, OrgValueVotesString>;
  requiredVotes?: number;
  /** 1-dimensional array of value, vote, value, vote… */
  value_vote?: object[];
  valueIsLocked?: boolean;
}

export interface MediaType {
  type?: string;
  subtype?: string;
  parameters?: Record<string, string>;
  wildcardType?: boolean;
  wildcardSubtype?: boolean;
}

export type UriBuilder = object;

export interface LockRequest {
  email?: string;
  session?: string;
  reason?: string;
}

export interface AddUserRequest {
  /** New user name */
  name?: string;
  /** New user e-mail */
  email?: string;
  /** New user organization */
  org?: string;
  /** New user level */
  level?: number;
  /** New user locales */
  locales?: string;
}

export interface VotingResultsReportAcceptability {
  nameTime?: Record<string, number>;
  orgs?: Record<string, OrgValueVotesReportAcceptability>;
  requiredVotes?: number;
  /** 1-dimensional array of value, vote, value, vote… */
  value_vote?: object[];
  valueIsLocked?: boolean;
}

export interface Candidate {
  displayValue?: string;
  example?: string;
  history?: string;
  isBaselineValue?: boolean;
  pClass?: string;
  rawValue?: string;
  tests?: CheckStatusSummary[];
  value?: string;
  valueHash?: string;
  votes?: Record<string, VoteEntry>;
}

export interface LoginResponse {
  /** CookieSession string id */
  sessionId?: string;
  /** True if there is a user */
  user?: boolean;
}

/** Path, Value Pair */
export interface PathValuePair {
  /** Path */
  xpstrid?: string;
  /** Value */
  value?: string;
}

export interface LocaleCompletionResponse {
  /** coverage level */
  level?: string;
  /** error+missing+provisional from baseline (HEAD) */
  baselineCount?: number;
  /** number of missing items */
  missing?: number;
  /** number of provisional items */
  provisional?: number;
  /** number of items with errors */
  error?: number;
}

export interface VoteRequest {
  /** String value for vote */
  value?: string;
  /**
   * If set/nonzero, integer level of vote for an overridden vote level, otherwise the default level for the user is used
   * @default "null"
   */
  voteLevelChanged?: number | null;
}

export interface LocaleSet {
  /** @uniqueItems true */
  set?: CLDRLocale[];
  empty?: boolean;
  allLocales?: boolean;
}

export interface CoverageStatusResponse {
  levelNames?: string[];
  results?: CoverageResult[];
}

/** Heading for a portion of the notifications */
export interface ReviewNotification {
  /**
   * Notification category
   * @example "English_Changed"
   */
  category?: string;
  groups?: ReviewNotificationGroup[];
}

export interface LocaleReportVettingResult {
  locale?: string;
  reports?: ReportVettingResult[];
  /** Total voters for this locale. Does not count abstentions. */
  totalVoters?: number;
}

export interface SearchResponse {
  /** true if the search is now complete (all results in) */
  isComplete?: boolean;
  /** true if the search is still ongoing (not cancelled or finished) */
  isOngoing?: boolean;
  /** token for retrieving further data from the query */
  token?: string;
  /**
   * when the search was started
   * @format date-time
   */
  searchStart?: string;
  /**
   * when the search was started
   * @format date-time
   */
  lastUpdated?: string;
  /** array of search results, in found order */
  results?: SearchResult[];
}

export interface DisplaySet {
  partitions?: Partition[];
  rows?: string[];
  sortMode?: SortMode;
}

/** Response for XPath alt set query */
export interface AltSetResponse {
  /** Hex ID of XPath. */
  hexId?: string;
  /** Array of possible alt attributes. */
  alt?: string[];
}

export interface SurveyParticipation {
  allParticipationByLocale?: Record<string, number>;
  allParticipationByOrgLocale?: Record<string, Record<string, number>>;
}

/** Summary Request */
export interface SummaryRequest {
  /** @default "NOSTART" */
  loadingPolicy?: "START" | "NOSTART" | "FORCESTOP";
  snapshotPolicy?: string;
  snapshotId?: string;
  summarizeAllLocales?: boolean;
}

/** Response for organizations query */
export interface OrgMapResponse {
  /** Map from short names to display names */
  map?: Record<string, string>;
}

export interface VoterProgress {
  votablePathCount?: number;
  votedPathCount?: number;
  typeCount?: Record<string, number>;
}

export interface Row {
  canFlagOnLosing?: boolean;
  code?: string;
  confirmStatus?: "missing" | "unconfirmed" | "provisional" | "contributed" | "approved";
  coverageValue?: number;
  dir?: string;
  displayExample?: string;
  displayName?: string;
  rawEnglish?: string;
  extraAttributes?: Record<string, string>;
  flagged?: boolean;
  hasVoted?: boolean;
  helpHtml?: string;
  inheritedLocale?: string;
  inheritedValue?: string;
  inheritedDisplayValue?: string;
  inheritedXpid?: string;
  items?: Record<string, Candidate>;
  /** map of placeholder string to example value */
  placeholderInfo?: Record<string, PlaceholderInfo>;
  /**
   * status of placeholder value
   * @example "REQUIRED"
   */
  placeholderStatus?:
    | "DISALLOWED: No placeholders allowed."
    | "REQUIRED: Specific number of placeholders allowed."
    | "LOCALE_DEPENDENT: Some placeholders may be omitted in certain locales"
    | "MULTIPLE: May have multiple instances of the same placeholder, eg “{0} cats and {0} dogs”."
    | "OPTIONAL: Any specific placeholder is optional (and non-numeric); there must be at least one.";
  rdf?: string;
  rowFlagged?: boolean;
  statusAction?:
    | "ALLOW"
    | "ALLOW_VOTING_AND_TICKET"
    | "ALLOW_VOTING_BUT_NO_ADD"
    | "ALLOW_TICKET_ONLY"
    | "FORBID_ERRORS"
    | "FORBID_READONLY"
    | "FORBID_UNLESS_DATA_SUBMISSION"
    | "FORBID_NULL"
    | "FORBID_ROOT"
    | "FORBID_CODE"
    | "FORBID_PERMANENT_WITHOUT_FORUM";
  translationHint?: string;
  voteVhash?: string;
  votingResults?: VotingResultsString;
  winningValue?: string;
  winningVhash?: string;
  xpath?: string;
  xpathId?: number;
  xpstrid?: string;
  /** prose description of voting outcome */
  voteTranscript?: string;
  /**
   * True if candidates are fixed (disable plus).
   * @example false
   */
  fixedCandidates?: boolean;
}

export interface Link {
  type?: string;
  /** @format uri */
  uri?: string;
  uriBuilder?: UriBuilder;
  rel?: string;
  rels?: string[];
  params?: Record<string, string>;
  title?: string;
}

export interface ParticipationResults {
  voterProgress?: VoterProgress;
  coverageLevel?: string;
}

export interface VotingResults {
  nameTime?: Record<string, number>;
  orgs?: Record<string, OrgValueVotesObject>;
  requiredVotes?: number;
  /** 1-dimensional array of value, vote, value, vote… */
  value_vote?: object[];
  valueIsLocked?: boolean;
}

export interface SearchRequest {
  /** Value to search for */
  value?: string;
}

/** Single category of votes for downgraded paths */
export interface DowngradeCategory {
  /** The vote type */
  voteType?: "NONE" | "UNKNOWN" | "DIRECT" | "AUTO_IMPORT" | "MANUAL_IMPORT" | "BULK_UPLOAD";
  /** The number of downgraded votes with this type */
  count?: number;
  /** Whether this type of vote is classified as being imported */
  isImported?: boolean;
}

export interface User {
  /** User ID */
  id?: number;
  /** numeric userlevel */
  userlevel?: number;
  /** User email */
  email?: string;
  /** User org */
  org?: string;
  /** User name */
  name?: string;
  /** @format date-time */
  time?: string;
  authorizedLocaleSet?: LocaleSet;
  /** array of permissions for this user */
  permissions?: Record<string, boolean>;
  /** VoteResolver.Level user level */
  userLevelName?: "locked" | "guest" | "anonymous" | "vetter" | "manager" | "tc" | "admin";
  interestLocales?: LocaleSet;
  voterInfo?: VoterInfo;
  /** how much this user’s vote counts for */
  voteCount?: number;
  emailHash?: string;
  organization?:
    | "adlam"
    | "adobe"
    | "afghan_csa"
    | "afghan_mcit"
    | "afrigen"
    | "anii"
    | "apple"
    | "bangladesh"
    | "bangor_univ"
    | "bhutan"
    | "breton"
    | "cherokee"
    | "choctaw"
    | "cldr"
    | "gaeilge"
    | "georgia_isi"
    | "gnome"
    | "google"
    | "ibm"
    | "india"
    | "iran_hci"
    | "kendra"
    | "kotoistus"
    | "kunsill_malti"
    | "lakota_lc"
    | "lao_dpt"
    | "longnow"
    | "meta"
    | "microsoft"
    | "mikmaw_kinamatnewey"
    | "mozilla"
    | "netflix"
    | "nyiakeng_puachue_hmong"
    | "openinstitute"
    | "openoffice_org"
    | "oracle"
    | "pakistan"
    | "rodakych"
    | "rohingyazuban"
    | "rumantscha"
    | "sardware"
    | "sil"
    | "special"
    | "srilanka"
    | "surveytool"
    | "unaffiliated"
    | "venetian"
    | "welsh_lc"
    | "wikimedia"
    | "wod_nko"
    | "wsci_wg"
    | "yahoo";
}

export interface VoterInfo {
  organization?:
    | "adlam"
    | "adobe"
    | "afghan_csa"
    | "afghan_mcit"
    | "afrigen"
    | "anii"
    | "apple"
    | "bangladesh"
    | "bangor_univ"
    | "bhutan"
    | "breton"
    | "cherokee"
    | "choctaw"
    | "cldr"
    | "gaeilge"
    | "georgia_isi"
    | "gnome"
    | "google"
    | "ibm"
    | "india"
    | "iran_hci"
    | "kendra"
    | "kotoistus"
    | "kunsill_malti"
    | "lakota_lc"
    | "lao_dpt"
    | "longnow"
    | "meta"
    | "microsoft"
    | "mikmaw_kinamatnewey"
    | "mozilla"
    | "netflix"
    | "nyiakeng_puachue_hmong"
    | "openinstitute"
    | "openoffice_org"
    | "oracle"
    | "pakistan"
    | "rodakych"
    | "rohingyazuban"
    | "rumantscha"
    | "sardware"
    | "sil"
    | "special"
    | "srilanka"
    | "surveytool"
    | "unaffiliated"
    | "venetian"
    | "welsh_lc"
    | "wikimedia"
    | "wod_nko"
    | "wsci_wg"
    | "yahoo";
  level?: "locked" | "guest" | "anonymous" | "vetter" | "manager" | "tc" | "admin";
  name?: string;
  locales?: IterableCLDRLocale;
}

/** Single announcement */
export interface Announcement {
  /** announcement id as stored in database */
  id?: number;
  /** poster id */
  poster?: number;
  /** poster name */
  posterName?: string;
  /** date */
  date?: string;
  /** subject */
  subject?: string;
  /** body */
  body?: string;
  /** checked */
  checked?: boolean;
  /** locales */
  locs?: string;
  /** orgs */
  orgs?: string;
  /** audience */
  audience?: string;
}

/** List of announcements */
export interface AnnouncementResponse {
  /** announcements */
  announcements?: Announcement[];
}

export type Iterable = object;

export interface VoteResponse {
  /** True if voting succeeded. */
  didVote?: boolean;
  /** If set, some other reason why the submission failed. */
  didNotSubmit?: string;
  /** If not ALLOW_*, gives reason why the voting was not allowed. */
  statusAction?:
    | "ALLOW"
    | "ALLOW_VOTING_AND_TICKET"
    | "ALLOW_VOTING_BUT_NO_ADD"
    | "ALLOW_TICKET_ONLY"
    | "FORBID_ERRORS"
    | "FORBID_READONLY"
    | "FORBID_UNLESS_DATA_SUBMISSION"
    | "FORBID_NULL"
    | "FORBID_ROOT"
    | "FORBID_CODE"
    | "FORBID_PERMANENT_WITHOUT_FORUM";
  /** Results of status checks. */
  testResults?: CheckStatusSummary[];
  /** True if testResults include warnings. */
  testWarnings?: boolean;
  /** True if testResults include errors. */
  testErrors?: boolean;
}

export interface VoteEntry {
  overridedVotes?: number;
  userid?: string;
  votes?: number;
  email?: string;
  level?: "locked" | "guest" | "anonymous" | "vetter" | "manager" | "tc" | "admin";
  name?: string;
  org?: string;
}

export type IterableCLDRLocale = object;

/** Output of Dashboard */
export interface ReviewOutput {
  /** list of notifications */
  notifications?: ReviewNotification[];
  /** Notifications that the user has chosen to hide */
  hidden?: Record<string, PathValuePair[]>;
  voterProgress?: VoterProgress;
  /** Coverage level for this dashboard */
  coverageLevel?: string;
}

export interface OrgParticipation {
  localesWithVetters?: string[];
  coverageLocales?: string[];
  defaultCoverage?: string;
  org?:
    | "adlam"
    | "adobe"
    | "afghan_csa"
    | "afghan_mcit"
    | "afrigen"
    | "anii"
    | "apple"
    | "bangladesh"
    | "bangor_univ"
    | "bhutan"
    | "breton"
    | "cherokee"
    | "choctaw"
    | "cldr"
    | "gaeilge"
    | "georgia_isi"
    | "gnome"
    | "google"
    | "ibm"
    | "india"
    | "iran_hci"
    | "kendra"
    | "kotoistus"
    | "kunsill_malti"
    | "lakota_lc"
    | "lao_dpt"
    | "longnow"
    | "meta"
    | "microsoft"
    | "mikmaw_kinamatnewey"
    | "mozilla"
    | "netflix"
    | "nyiakeng_puachue_hmong"
    | "openinstitute"
    | "openoffice_org"
    | "oracle"
    | "pakistan"
    | "rodakych"
    | "rohingyazuban"
    | "rumantscha"
    | "sardware"
    | "sil"
    | "special"
    | "srilanka"
    | "surveytool"
    | "unaffiliated"
    | "venetian"
    | "welsh_lc"
    | "wikimedia"
    | "wod_nko"
    | "wsci_wg"
    | "yahoo";
}

export interface PlaceholderInfo {
  name?: string;
  example?: string;
}

export interface UserInfo {
  email?: string;
  emailHash?: string;
  level?: "locked" | "guest" | "anonymous" | "vetter" | "manager" | "tc" | "admin";
  org?: string;
  name?: string;
  userid?: number;
}

export interface StandardCodeResult {
  type?: string;
  code?: string;
  data?: StandardCodeResultDataItem[];
}

export interface LoginRequest {
  email?: string;
  password?: string;
}

export interface LocaleNormalizerResponse {
  /** Normalized locale array */
  normalized?: string;
  /** List of messages of why some locales were rejected */
  messages?: Record<string, "Outside org. coverage" | "Unknown">;
}

/** update to user’s report status */
export interface ReportUpdate {
  /** True if user has completed evaluating this report, False if not complete. May not be !complete&&acceptable. */
  completed?: boolean;
  /** True if values were acceptable. False if values weren’t acceptable, but user has voted for correct ones. */
  acceptable?: boolean;
}

export interface UserReport {
  /** the latest date that something was changed, or null */
  lastMod?: string;
  /** User ID */
  id?: number;
  /** User’s status for all reports */
  statuses?: Record<string, ReportStatus>;
}

export interface OrgValueVotesString {
  conflicted?: boolean;
  orgVote?: string;
  status?: string;
  votes?: Record<string, number>;
}

export interface XPathRequest {
  /**
   * XPath string
   * @example "//ldml/localeDisplayNames/localeDisplayPattern/localeSeparator"
   */
  str: string;
}

export interface StandardCodeResultDataItem {
  s?: string;
  isWinner?: boolean;
}

export type Number = object;

/** Summary Response */
export interface SummaryResponse {
  /** vetting viewer status enum */
  status?: "WAITING" | "PROCESSING" | "READY" | "STOPPED";
  /** HTML current status message */
  message?: string;
  /** Estimated percentage complete */
  percent?: object;
  /** HTML output on success */
  output?: string;
  /** Snapshot ID, or NA for Not Applicable */
  snapshotId?: string;
}

export interface PathAndValue {
  path?: string;
  value?: string;
}

/** Error return object */
export interface STError {
  /** Error message */
  message?: string;
  /** Always set to true, identifies this as an error. */
  err?: boolean;
  /** Error code if present */
  code?:
    | "E_UNKNOWN"
    | "E_INTERNAL"
    | "E_BAD_SECTION"
    | "E_BAD_LOCALE"
    | "E_NOT_STARTED"
    | "E_SPECIAL_SECTION"
    | "E_SESSION_DISCONNECTED"
    | "E_DISCONNECTED"
    | "E_NO_PERMISSION"
    | "E_NOT_LOGGED_IN"
    | "E_BAD_VALUE"
    | "E_BAD_XPATH"
    | "E_NO_OLD_VOTES"
    | "E_PERMANENT_VOTE_NO_FORUM"
    | "E_VOTE_NOT_ACCEPTED";
  status?:
    | "OK"
    | "Created"
    | "Accepted"
    | "No Content"
    | "Reset Content"
    | "Partial Content"
    | "Moved Permanently"
    | "Found"
    | "See Other"
    | "Not Modified"
    | "Use Proxy"
    | "Temporary Redirect"
    | "Bad Request"
    | "Unauthorized"
    | "Payment Required"
    | "Forbidden"
    | "Not Found"
    | "Method Not Allowed"
    | "Not Acceptable"
    | "Proxy Authentication Required"
    | "Request Timeout"
    | "Conflict"
    | "Gone"
    | "Length Required"
    | "Precondition Failed"
    | "Request Entity Too Large"
    | "Request-URI Too Long"
    | "Unsupported Media Type"
    | "Requested Range Not Satisfiable"
    | "Expectation Failed"
    | "Precondition Required"
    | "Too Many Requests"
    | "Request Header Fields Too Large"
    | "Internal Server Error"
    | "Not Implemented"
    | "Bad Gateway"
    | "Service Unavailable"
    | "Gateway Timeout"
    | "HTTP Version Not Supported"
    | "Network Authentication Required";
}

export interface EntityTag {
  value?: string;
  weak?: boolean;
}

export interface ReportStatus {
  completed?: ("datetime" | "zones" | "compact" | "personnames")[];
  acceptable?: ("datetime" | "zones" | "compact" | "personnames")[];
  /** @format date-time */
  date?: string;
}

/** Single entry of the dashboard that needs review */
export interface ReviewEntry {
  /**
   * Code for this entry
   * @example "narrow-other-nominative"
   */
  code?: string;
  /** @example "7bd36b15a66d02cf" */
  xpstrid?: string;
  /**
   * English text
   * @example "{0}dsp-Imp"
   */
  english?: string;
  /**
   * Previous English value, for EnglishChanged
   * @example "{0} dstspn Imp"
   */
  previousEnglish?: string;
  /**
   * Baseline value
   * @example "{0} dstspn Imp"
   */
  old?: string;
  /**
   * Winning value in this locale
   * @example "{0} dstspn Imp"
   */
  winning?: string;
  /**
   * html comment on the error
   * @example "&lt;value too wide&gt; Too wide by about 100% (with common fonts)."
   */
  comment?: string;
  /**
   * Subtype of the error
   * @example "largerDifferences"
   */
  subtype?:
    | "none"
    | "no unproposed variant"
    | "deprecated attribute"
    | "illegal plural"
    | "invalid locale"
    | "incorrect casing"
    | "value must be overridden"
    | "value always overridden"
    | "null child file"
    | "internal error"
    | "coverage level"
    | "missing plural info"
    | "currency symbol too wide"
    | "incorrect date pattern"
    | "abbreviated date field too wide"
    | "display collision"
    | "illegal exemplar set"
    | "missing auxiliary exemplars"
    | "extra placeholders"
    | "missing placeholders"
    | "shouldnt have placeholders"
    | "could not access exemplars"
    | "no exemplar characters"
    | "modified english value"
    | "invalid currency match set"
    | "multiple metazone mappings"
    | "no metazone mapping"
    | "no metazone mapping after1970"
    | "no metazone mapping before now"
    | "cannot create zone formatter"
    | "insufficient coverage"
    | "missing language territory info"
    | "missing euro country info"
    | "deprecated attribute with replacement"
    | "missing or extra date field"
    | "internal unicode set formatting error"
    | "auxiliary exemplars overlap"
    | "missing punctuation characters"
    | "characters not in currency exemplars"
    | "ascii characters not in currency exemplars"
    | "characters not in main or auxiliary exemplars"
    | "ascii characters not in main or auxiliary exemplars"
    | "narrow date field too wide"
    | "illegal characters in exemplars"
    | "orientation disagrees with exemplars"
    | "inconsistent date pattern"
    | "inconsistent time pattern"
    | "missing date pattern"
    | "illegal date pattern"
    | "missing main exemplars"
    | "must not start or end with space"
    | "illegal characters in number pattern"
    | "number pattern not canonical"
    | "currency pattern missing currency symbol"
    | "currency pattern unexpected currency symbol"
    | "missing minus sign"
    | "bad numeric type"
    | "percent pattern missing percent symbol"
    | "illegal number format"
    | "unexpected attribute value"
    | "metazone contains digit"
    | "too many grouping separators"
    | "inconsistent plural format"
    | "missing zeros"
    | "same as english"
    | "same as code"
    | "date symbol collision"
    | "incomplete logical group"
    | "extra metazone string"
    | "inconsistent draft status"
    | "error or warning in logical group"
    | "value too wide"
    | "value too narrow"
    | "name contains year"
    | "pattern cannot contain digits"
    | "pattern contains invalid characters"
    | "parentheses not allowed"
    | "illegal numbering system"
    | "unexpected order of era year"
    | "invalid place holder"
    | "ascii quotes not allowed"
    | "bad minimum grouping digits"
    | "inconsistent periods"
    | "inheritance marker not allowed"
    | "invalid duration unit pattern"
    | "invalid delimiter"
    | "illegal characters in pattern"
    | "bad parse lenient"
    | "too many values"
    | "invalid symbol"
    | "invalid gender code"
    | "mismatched unit component"
    | "long power with subscripts"
    | "gaps in placeholder numbers"
    | "duplicate placeholders"
    | "larger differences"
    | "missing non alt path"
    | "bad sample person name"
    | "missing language"
    | "name placeholder problem"
    | "missing space between name fields"
    | "illegal parameter value"
    | "illegal annotation code";
}

export interface NewCookie {
  name?: string;
  value?: string;
  version?: number;
  path?: string;
  domain?: string;
  comment?: string;
  maxAge?: number;
  /** @format date-time */
  expiry?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export interface IntLocsRequest {
  /** Session string */
  sessionString: string;
  /** Email address */
  email: string;
  /** Interest locales */
  intlocs: string;
}

export interface Partition {
  name?: string;
  helptext?: string;
  start?: number;
  limit?: number;
}

export interface RowResponse {
  canModify?: object;
  /** If set, row is not available because there is a Default Content parent. See the specified locale instead. */
  dcParent?: string;
  displaySets?: DisplaySets;
  issues?: JSONArray;
  localeDisplayName?: string;
  notifications?: ReviewNotification[];
  page?: Page;
  pageId?: string;
  xpstrid?: string;
}

export interface CLDRLocale {
  parent?: CLDRLocale;
  language?: string;
  displayName?: string;
  script?: string;
  country?: string;
  variant?: string;
  displayVariant?: string;
  baseName?: string;
  languageLocale?: CLDRLocale;
  parentIterator?: IterableCLDRLocale;
  displayRegion?: string;
  parentRoot?: boolean;
  highestNonrootParent?: CLDRLocale;
  rank?: number;
}

export type SortMode = object;

/** Response for Inheritance query */
export interface InheritanceResponse {
  /** Array of inheritance items. */
  items?: LocaleInheritance[];
}

export type JSONArray = object;

export interface LocaleInheritance {
  /** xpath stringid to item */
  xpath?: string;
  /** locale of item if present */
  locale?: string;
  /** xpath full of item */
  xpathFull?: string;
  /** which attribute was implicated in a change */
  attribute?: string;
  /** reason for the entry */
  reason?:
    | "value: Found: explicit value"
    | "codeFallback: Found: code fallback"
    | "alias: An alias was found at this location"
    | "constructed: Constructed value"
    | "none: The value was not found in this locale."
    | "inheritanceMarker: Found: Inheritance marker"
    | "removedAttribute: Removed attribute: ${attribute}"
    | "changedAttribute: Changed attribute: ${attribute}"
    | "fallback: Other fallback path";
  /** true if not shown in the SurveyTool */
  hidden?: boolean;
}

export interface SearchResult {
  /** xpath to the resource */
  xpath?: string;
  /** xpstrid to the resource */
  xpstrid?: string;
  /** context of the match */
  context?: string;
  /** locale of the match */
  locale?: string;
}

export interface CookieSession {
  id?: string;
  ip?: string;
  stuff?: Record<string, object>;
  prefs?: Record<string, Comparable>;
  user?: User;
  /** @format int64 */
  lastActionMillisSinceEpoch?: number;
  /** @format int64 */
  lastBrowserCallMillisSinceEpoch?: number;
  message?: string;
  locales?: Record<string, Record<string, object>>;
  userOrg?: string;
}

/** Group of notifications which share the same section/page/header */
export interface ReviewNotificationGroup {
  entries?: ReviewEntry[];
  /**
   * SurveyTool section
   * @example "Units"
   */
  section?: string;
  /**
   * SurveyTool page
   * @example "Area"
   */
  page?: string;
  /**
   * SurveyTool header
   * @example "dessert-spoon-imperial"
   */
  header?: string;
}

export interface CheckStatusSummary {
  message?: string;
  type?: "Comment" | "Warning" | "Error" | "Example" | "Demo";
  subtype?:
    | "none"
    | "no unproposed variant"
    | "deprecated attribute"
    | "illegal plural"
    | "invalid locale"
    | "incorrect casing"
    | "value must be overridden"
    | "value always overridden"
    | "null child file"
    | "internal error"
    | "coverage level"
    | "missing plural info"
    | "currency symbol too wide"
    | "incorrect date pattern"
    | "abbreviated date field too wide"
    | "display collision"
    | "illegal exemplar set"
    | "missing auxiliary exemplars"
    | "extra placeholders"
    | "missing placeholders"
    | "shouldnt have placeholders"
    | "could not access exemplars"
    | "no exemplar characters"
    | "modified english value"
    | "invalid currency match set"
    | "multiple metazone mappings"
    | "no metazone mapping"
    | "no metazone mapping after1970"
    | "no metazone mapping before now"
    | "cannot create zone formatter"
    | "insufficient coverage"
    | "missing language territory info"
    | "missing euro country info"
    | "deprecated attribute with replacement"
    | "missing or extra date field"
    | "internal unicode set formatting error"
    | "auxiliary exemplars overlap"
    | "missing punctuation characters"
    | "characters not in currency exemplars"
    | "ascii characters not in currency exemplars"
    | "characters not in main or auxiliary exemplars"
    | "ascii characters not in main or auxiliary exemplars"
    | "narrow date field too wide"
    | "illegal characters in exemplars"
    | "orientation disagrees with exemplars"
    | "inconsistent date pattern"
    | "inconsistent time pattern"
    | "missing date pattern"
    | "illegal date pattern"
    | "missing main exemplars"
    | "must not start or end with space"
    | "illegal characters in number pattern"
    | "number pattern not canonical"
    | "currency pattern missing currency symbol"
    | "currency pattern unexpected currency symbol"
    | "missing minus sign"
    | "bad numeric type"
    | "percent pattern missing percent symbol"
    | "illegal number format"
    | "unexpected attribute value"
    | "metazone contains digit"
    | "too many grouping separators"
    | "inconsistent plural format"
    | "missing zeros"
    | "same as english"
    | "same as code"
    | "date symbol collision"
    | "incomplete logical group"
    | "extra metazone string"
    | "inconsistent draft status"
    | "error or warning in logical group"
    | "value too wide"
    | "value too narrow"
    | "name contains year"
    | "pattern cannot contain digits"
    | "pattern contains invalid characters"
    | "parentheses not allowed"
    | "illegal numbering system"
    | "unexpected order of era year"
    | "invalid place holder"
    | "ascii quotes not allowed"
    | "bad minimum grouping digits"
    | "inconsistent periods"
    | "inheritance marker not allowed"
    | "invalid duration unit pattern"
    | "invalid delimiter"
    | "illegal characters in pattern"
    | "bad parse lenient"
    | "too many values"
    | "invalid symbol"
    | "invalid gender code"
    | "mismatched unit component"
    | "long power with subscripts"
    | "gaps in placeholder numbers"
    | "duplicate placeholders"
    | "larger differences"
    | "missing non alt path"
    | "bad sample person name"
    | "missing language"
    | "name placeholder problem"
    | "missing space between name fields"
    | "illegal parameter value"
    | "illegal annotation code";
  subtypeUrl?: string;
  phase?: "BUILD" | "SUBMISSION" | "VETTING" | "FINAL_TESTING";
  cause?: string;
}

export interface ReasonInfo {
  /**
   * reason id
   * @example "codeFallback"
   */
  reason?: string;
  /**
   * true if a terminal reason
   * @example true
   */
  terminal?: boolean;
  /** Description for reason. String substitution of 'attribute' may be required. */
  description?: string;
}

export interface Response {
  length?: number;
  /** @format uri */
  location?: string;
  language?: Locale;
  /** @format date-time */
  lastModified?: string;
  /** @format date-time */
  date?: string;
  /** @uniqueItems true */
  links?: Link[];
  metadata?: Record<string, object[]>;
  mediaType?: MediaType;
  statusInfo?: StatusType;
  /** @uniqueItems true */
  allowedMethods?: string[];
  entityTag?: EntityTag;
  stringHeaders?: Record<string, string[]>;
  entity?: object;
  cookies?: Record<string, NewCookie>;
  status?: number;
  headers?: Record<string, object[]>;
}

export interface VotingParticipationResults {
  onlyOrg?:
    | "adlam"
    | "adobe"
    | "afghan_csa"
    | "afghan_mcit"
    | "afrigen"
    | "anii"
    | "apple"
    | "bangladesh"
    | "bangor_univ"
    | "bhutan"
    | "breton"
    | "cherokee"
    | "choctaw"
    | "cldr"
    | "gaeilge"
    | "georgia_isi"
    | "gnome"
    | "google"
    | "ibm"
    | "india"
    | "iran_hci"
    | "kendra"
    | "kotoistus"
    | "kunsill_malti"
    | "lakota_lc"
    | "lao_dpt"
    | "longnow"
    | "meta"
    | "microsoft"
    | "mikmaw_kinamatnewey"
    | "mozilla"
    | "netflix"
    | "nyiakeng_puachue_hmong"
    | "openinstitute"
    | "openoffice_org"
    | "oracle"
    | "pakistan"
    | "rodakych"
    | "rohingyazuban"
    | "rumantscha"
    | "sardware"
    | "sil"
    | "special"
    | "srilanka"
    | "surveytool"
    | "unaffiliated"
    | "venetian"
    | "welsh_lc"
    | "wikimedia"
    | "wod_nko"
    | "wsci_wg"
    | "yahoo";
  results?: OrgParticipation[];
  participationByVersion?: Record<string, SurveyParticipation>;
}

export interface LocaleReportVettingResults {
  locales?: LocaleReportVettingResult[];
}

export interface CheckReadRequest {
  /** id */
  id?: number;
  /** checked */
  checked?: boolean;
}

export interface StatusType {
  family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";
  statusCode?: number;
  reasonPhrase?: string;
}

export interface OrgValueVotesReportAcceptability {
  conflicted?: boolean;
  orgVote?: "notAcceptable" | "acceptable";
  status?: string;
  votes?: Record<string, number>;
}

export interface OrgValueVotesObject {
  conflicted?: boolean;
  orgVote?: object;
  status?: string;
  votes?: Record<string, number>;
}

export interface CoverageResult {
  staticLevel?: "undetermined" | "core" | "basic" | "moderate" | "modern" | "comprehensive";
  locale?: string;
  adjustedGoal?: string;
  /** @format int64 */
  found?: number;
  /** @format int64 */
  unconfirmedc?: number;
  /** @format int64 */
  missing?: number;
  cldrLocaleLevelGoal?: "undetermined" | "core" | "basic" | "moderate" | "modern" | "comprehensive";
  visibleLevelComputed?: string;
  icu?: boolean;
  sumFound?: number;
  sumUnconfirmed?: number;
  proportions?: number[];
  shownMissingPaths?: string[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://st.unicode.org/cldr-apps";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Deployed APIs
 * @version 1.0.0
 * @baseUrl https://st.unicode.org/cldr-apps
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Returns detailed information about the Survey Tool
     *
     * @tags about
     * @name GetAbout
     * @summary Get ST info
     * @request GET:/api/about
     */
    getAbout: (params: RequestParams = {}) =>
      this.request<Comparable, any>({
        path: `/api/about`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This handles a request to add a new user
     *
     * @tags adduser
     * @name AddUser
     * @summary Add User
     * @request POST:/api/adduser
     */
    addUser: (data: AddUserRequest, params: RequestParams = {}) =>
      this.request<
        {
          /** User ID of successfully created new user */
          userId?: number;
          /** Normalized e-mail of new user */
          email?: string;
          /** Error code */
          err?: "BAD_NAME" | "BAD_EMAIL" | "BAD_ORG" | "BAD_LEVEL" | "DUP_EMAIL" | "UNKNOWN";
        },
        void
      >({
        path: `/api/adduser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Indicate whether an announcement has been read
     *
     * @tags announce
     * @name CheckRead
     * @summary Set already-read status
     * @request POST:/api/announce/checkread
     */
    checkRead: (data: CheckReadRequest, params: RequestParams = {}) =>
      this.request<Response, void | STError>({
        path: `/api/announce/checkread`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get announcements
     *
     * @tags announce
     * @name GetAnnouncements
     * @summary Get announcements
     * @request GET:/api/announce
     */
    getAnnouncements: (params: RequestParams = {}) =>
      this.request<AnnouncementResponse, STError | void>({
        path: `/api/announce`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Submit an announcement
     *
     * @tags announce
     * @name SubmitAnnouncement
     * @summary Submit an announcement
     * @request POST:/api/announce
     */
    submitAnnouncement: (data: SubmissionRequest, params: RequestParams = {}) =>
      this.request<Response, void | STError>({
        path: `/api/announce`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Lock (disable, unsubscribe) the account of the user making the request.
     *
     * @tags auth
     * @name Lock
     * @summary Lock (disable) account
     * @request POST:/api/auth/lock
     */
    lock: (data: LockRequest, params: RequestParams = {}) =>
      this.request<LoginResponse, void>({
        path: `/api/auth/lock`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Validate session and return user info.
     *
     * @tags auth
     * @name Info
     * @summary Validate session
     * @request GET:/api/auth/info
     */
    info: (
      query?: {
        /** Session ID to check */
        session?: string;
        /**
         * Whether to mark the session as updated
         * @default "false"
         */
        touch?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoginResponse, void>({
        path: `/api/auth/info`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This logs in with a username/password and returns a CookieSession
     *
     * @tags auth
     * @name Login
     * @summary Login and get a CookieSession id
     * @request POST:/api/auth/login
     */
    login: (
      data: LoginRequest,
      query?: {
        /**
         * If true, remember login
         * @default "false"
         */
        remember?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoginResponse, void>({
        path: `/api/auth/login`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Clear auto-login cookies, and log out the specified session.
     *
     * @tags auth
     * @name Logout
     * @summary Logout, clear cookies
     * @request GET:/api/auth/logout
     */
    logout: (
      query?: {
        /** Session ID to logout */
        session?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/auth/logout`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Get statistics about votes for downgraded paths
     *
     * @tags Downgraded votes
     * @name GetStats
     * @summary Get statistics
     * @request GET:/api/voting/downgraded
     */
    getStats: (params: RequestParams = {}) =>
      this.request<DowngradedStatsResponse, void | STError>({
        path: `/api/voting/downgraded`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Delete imported votes for downgraded paths
     *
     * @tags Downgraded votes
     * @name DeleteImported
     * @summary Delete
     * @request DELETE:/api/voting/downgraded
     */
    deleteImported: (params: RequestParams = {}) =>
      this.request<DowngradedStatsResponse, void | STError>({
        path: `/api/voting/downgraded`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags xpath
     * @name GetReasons
     * @summary Returns the descriptions of the reason enums
     * @request GET:/api/xpath/inheritance/reasons
     */
    getReasons: (params: RequestParams = {}) =>
      this.request<ReasonInfo[], any>({
        path: `/api/xpath/inheritance/reasons`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Looks up the xpath and explains its inheritance
     *
     * @tags xpath
     * @name GetInheritanceByHex
     * @summary Explain inheritance of an xpath
     * @request GET:/api/xpath/inheritance/locale/{localeId}/{hexId}
     */
    getInheritanceByHex: (localeId: string, hexId: string, params: RequestParams = {}) =>
      this.request<InheritanceResponse, STError>({
        path: `/api/xpath/inheritance/locale/${localeId}/${hexId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Enables users to specify their locales of interest
     *
     * @tags user
     * @name SetIntLocs
     * @summary Set interest locales
     * @request POST:/api/intlocs
     */
    setIntLocs: (data: IntLocsRequest, params: RequestParams = {}) =>
      this.request<Comparable, any>({
        path: `/api/intlocs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get locale completion statistics for the given locale
     *
     * @tags completion
     * @name GetLocaleCompletion
     * @summary Get locale completion statistics
     * @request GET:/api/completion/locale/{locale}
     */
    getLocaleCompletion: (locale: string, params: RequestParams = {}) =>
      this.request<LocaleCompletionResponse, void | STError>({
        path: `/api/completion/locale/${locale}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Return a list of all locales
     *
     * @tags locales
     * @name Normalize
     * @summary Normalize a list of Locales
     * @request GET:/api/locales/normalize
     */
    normalize: (
      query: {
        /**
         * Space-separated list of locales
         * @example "jgo vec kjj"
         */
        locs: string;
        /**
         * Optional Organization, as a coverage limit
         * @example "adlam"
         */
        org?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LocaleNormalizerResponse, any>({
        path: `/api/locales/normalize`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Return a combined/normalized list of locales
     *
     * @tags locales
     * @name CombineRegionalVariants
     * @summary Combine regional variants and normalize a list of Locales
     * @request GET:/api/locales/combine-variants
     */
    combineRegionalVariants: (
      query: {
        /**
         * Space-separated list of locales
         * @example "zh fr_BE fr_CA"
         */
        locs: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LocaleNormalizerResponse, any>({
        path: `/api/locales/combine-variants`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate XML for error/missing/provisional paths, as basis for bulk submission
     *
     * @tags missing xml
     * @name GetMissingXml
     * @summary Generate missing XML
     * @request GET:/api/missingxml/{locale}/{level}
     */
    getMissingXml: (locale: string, level: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/missingxml/${locale}/${level}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description This handles a request for the list of organizations
     *
     * @tags organizations
     * @name GetOrgs
     * @summary Get Organization Map
     * @request GET:/api/organizations
     */
    getOrgs: (params: RequestParams = {}) =>
      this.request<OrgMapResponse, any>({
        path: `/api/organizations`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This updates a specific user’s report status. You can only update your own status.
     *
     * @tags voting
     * @name UpdateReport
     * @summary Update Report Status
     * @request POST:/api/voting/reports/users/{user}/locales/{locale}/reports/{report}
     */
    updateReport: (
      user: number,
      locale: string,
      report: "datetime" | "zones" | "compact" | "personnames",
      data: {
        /** True if user has completed evaluating this report, False if not complete. May not be !complete&&acceptable. */
        completed?: boolean;
        /** True if values were acceptable. False if values weren’t acceptable, but user has voted for correct ones. */
        acceptable?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/voting/reports/users/${user}/locales/${locale}/reports/${report}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags voting
     * @name ListReports
     * @summary List all report types
     * @request GET:/api/voting/reports
     */
    listReports: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/voting/reports`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags voting
     * @name GetReportOutput
     * @summary Get the report output
     * @request GET:/api/voting/reports/locales/{locale}/reports/{report}.html
     */
    getReportOutput: (
      locale: string,
      report: "datetime" | "zones" | "compact" | "personnames",
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/voting/reports/locales/${locale}/reports/${report}.html`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Get one or all user’s report status
     *
     * @tags voting
     * @name GetAllReports
     * @summary Get User Report Status
     * @request GET:/api/voting/reports/users/{user}
     */
    getAllReports: (user: string, params: RequestParams = {}) =>
      this.request<UserReport[], any>({
        path: `/api/voting/reports/users/${user}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This handles a request for a specific user and locale report status
     *
     * @tags voting
     * @name GetReport
     * @summary Get Report Status
     * @request GET:/api/voting/reports/users/{user}/locales/{locale}
     */
    getReport: (user: number, locale: string, params: RequestParams = {}) =>
      this.request<ReportStatus, void>({
        path: `/api/voting/reports/users/${user}/locales/${locale}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags voting
     * @name GetReportLocaleStatus
     * @summary List vetting results of one or more locales
     * @request GET:/api/voting/reports/locales/{locale}
     */
    getReportLocaleStatus: (locale: string, params: RequestParams = {}) =>
      this.request<LocaleReportVettingResults, any>({
        path: `/api/voting/reports/locales/${locale}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Check on status of an existing search
     *
     * @tags search
     * @name SearchStatus
     * @summary Get status of existing search
     * @request GET:/api/search/status/{token}
     */
    searchStatus: (token: string, params: RequestParams = {}) =>
      this.request<SearchResponse, void>({
        path: `/api/search/status/${token}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an existing search
     *
     * @tags search
     * @name SearchDelete
     * @summary Cancel search
     * @request DELETE:/api/search/status/{token}
     */
    searchDelete: (token: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/search/status/${token}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Searches for paths containing the given string value
     *
     * @tags search
     * @name NewSearch
     * @summary Begin a new search
     * @request POST:/api/search/value
     */
    newSearch: (
      data: SearchRequest,
      query?: {
        /** @example "jgo" */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResponse, void>({
        path: `/api/search/value`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Also known as Vetting Summary, this like a Dashboard for multiple locales.
     *
     * @tags voting
     * @name DoVettingSummary
     * @summary Get Priority Items Summary
     * @request POST:/api/summary
     */
    doVettingSummary: (data: SummaryRequest, params: RequestParams = {}) =>
      this.request<SummaryResponse, any>({
        path: `/api/summary`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of all available snapshots of the Priority Items Summary
     *
     * @tags voting
     * @name ListSnapshots
     * @summary List All Snapshots
     * @request GET:/api/summary/snapshots
     */
    listSnapshots: (params: RequestParams = {}) =>
      this.request<SnapshotListResponse, any>({
        path: `/api/summary/snapshots`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags voting
     * @name GetCoverageStatus
     * @request GET:/api/summary/dashboard/coverageStatus
     */
    getCoverageStatus: (params: RequestParams = {}) =>
      this.request<CoverageStatusResponse, any>({
        path: `/api/summary/dashboard/coverageStatus`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Given a locale, get the summary information, aka Dashboard
     *
     * @tags voting
     * @name GetDashboard
     * @summary Fetch the user's Dashboard for a locale
     * @request GET:/api/summary/dashboard/{locale}/{level}
     */
    getDashboard: (locale: string, level: string, params: RequestParams = {}) =>
      this.request<ReviewOutput, any>({
        path: `/api/summary/dashboard/${locale}/${level}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Given a locale, get the participation information, for another user
     *
     * @tags voting
     * @name GetParticipationFor
     * @summary Fetch another user's participation for a locale. Manager only.
     * @request GET:/api/summary/participation/for/{user}/{locale}/{level}
     */
    getParticipationFor: (user: number, locale: string, level: string, params: RequestParams = {}) =>
      this.request<ParticipationResults, any>({
        path: `/api/summary/participation/for/${user}/${locale}/${level}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns information about a user
     *
     * @tags user
     * @name GetUserInfo
     * @summary Get user info
     * @request GET:/api/users/info/{uid}
     */
    getUserInfo: (uid: number, params: RequestParams = {}) =>
      this.request<UserInfo, void>({
        path: `/api/users/info/${uid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Handle a request for the list of user levels and associated data partly depending on current user rights
     *
     * @tags userlevels
     * @name GetLevels
     * @summary Get User Level List
     * @request GET:/api/userlevels
     */
    getLevels: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/userlevels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get info for a single xpath
     *
     * @tags voting
     * @name GetRow
     * @summary Get row info
     * @request GET:/api/voting/{locale}/row/{xpstrid}
     */
    getRow: (
      locale: string,
      xpstrid: string,
      query?: {
        /**
         * Whether to get dashboard info
         * @default "false"
         */
        dashboard?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<RowResponse, void | STError>({
        path: `/api/voting/${locale}/row/${xpstrid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a specific vote
     *
     * @tags voting
     * @name Vote
     * @summary Submit a vote
     * @request POST:/api/voting/{locale}/row/{xpstrid}
     */
    vote: (locale: string, xpstrid: string, data: VoteRequest, params: RequestParams = {}) =>
      this.request<VoteResponse, void | STError>({
        path: `/api/voting/${locale}/row/${xpstrid}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all info for all xpaths in a page
     *
     * @tags voting
     * @name GetPage
     * @summary Get page info
     * @request GET:/api/voting/{locale}/page/{page}
     */
    getPage: (
      locale: string,
      page: string,
      query?: {
        /**
         * Xpath string ID if page is auto
         * @default ""
         */
        xpstrid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RowResponse, void | STError>({
        path: `/api/voting/${locale}/page/${page}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get voting participation summary
     *
     * @tags voting_participation
     * @name GetParticipation
     * @summary Get voting participation summary
     * @request GET:/api/voting/participation
     */
    getParticipation: (params: RequestParams = {}) =>
      this.request<VotingParticipationResults, void | STError>({
        path: `/api/voting/participation`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Searches for codes containing the given string, with the given base locale
     *
     * @tags xpath
     * @name GetWhatis
     * @summary Look up a code
     * @request GET:/api/whatis
     */
    getWhatis: (
      query: {
        /** @example "jgo" */
        q: string;
        /** @example "en_US" */
        loc: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<WhatisResponse, any>({
        path: `/api/whatis`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Looks up a specific decimal ID.
     *
     * @tags xpath
     * @name GetByDecimal
     * @summary Fetch XPath string from decimal id
     * @request GET:/api/xpath/dec/{decId}
     */
    getByDecimal: (decId: number, params: RequestParams = {}) =>
      this.request<XPathInfo, STError>({
        path: `/api/xpath/dec/${decId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Looks up the ids for a specific XPath string.
     *
     * @tags xpath
     * @name GetByString
     * @summary Fetch hex and decimal id from XPath string
     * @request POST:/api/xpath/str
     */
    getByString: (data: XPathRequest, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/xpath/str`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Looks up a specific hex ID.
     *
     * @tags xpath
     * @name GetByHex
     * @summary Fetch XPath string from hex id
     * @request GET:/api/xpath/hex/{hexId}
     */
    getByHex: (hexId: string, params: RequestParams = {}) =>
      this.request<XPathInfo, STError>({
        path: `/api/xpath/hex/${hexId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Looks up the alt values that could be added for a specific XPath Hex ID.
     *
     * @tags xpath
     * @name GetAltByHex
     * @summary Fetch alt values from locale and XPath Hex ID
     * @request GET:/api/xpath/alt/{localeId}/{hexId}
     */
    getAltByHex: (localeId: string, hexId: string, params: RequestParams = {}) =>
      this.request<AltSetResponse, STError>({
        path: `/api/xpath/alt/${localeId}/${hexId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new alt path in the given locale
     *
     * @tags xpath
     * @name PutByHex
     * @summary Add alt path
     * @request POST:/api/xpath/alt
     */
    putByHex: (data: AddAltPathRequest, params: RequestParams = {}) =>
      this.request<AddAltPathRequest, STError>({
        path: `/api/xpath/alt`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
