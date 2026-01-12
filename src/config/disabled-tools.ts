/**
 * List of disabled tools.
 * 
 * Tools listed here will:
 * - NOT be advertised via ListTools
 * - Return "Method not found" error if called directly
 * 
 * The code for these tools is preserved and can be re-enabled
 * by simply removing the tool name from this list.
 * 
 * Legend:
 * - [READ]    - Only reads data, does not modify system
 * - [WRITE]   - Modifies objects/data in the system
 * - [SESSION] - Session management, does not affect repository objects
 * - [EXECUTE] - Executes code, may have side effects
 * - [DELETE]  - Deletes objects/data from the system
 */
export const disabledTools: Set<string> = new Set([
  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                        AUTHENTICATION & SESSION                          ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'login',                          // [SESSION] Authenticate with ABAP system
  // 'logout',                         // [SESSION] Terminate ABAP session
  // 'dropSession',                    // [SESSION] Clear local session cache

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           TRANSPORT OPERATIONS                           ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'transportInfo',                  // [READ] Get transport information for object
   'createTransport',                // [WRITE] Create a new transport request
  // 'hasTransportConfig',             // [READ] Check if transport configuration exists
  // 'transportConfigurations',        // [READ] Retrieve transport configurations
  // 'getTransportConfiguration',      // [READ] Get specific transport configuration
  'setTransportsConfig',            // [WRITE] Set transport configurations
  'createTransportsConfig',         // [WRITE] Create transport configurations
  // 'userTransports',                 // [READ] Get transports for a user
  // 'transportsByConfig',             // [READ] Get transports by configuration
  // 'transportDelete',                // [DELETE] Delete a transport
  'transportRelease',               // [WRITE] Release a transport (moves to next system)
  'transportSetOwner',              // [WRITE] Change transport owner
  'transportAddUser',               // [WRITE] Add user to transport
  // 'systemUsers',                    // [READ] Get list of system users
  // 'transportReference',             // [READ] Get transport reference

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                            OBJECT OPERATIONS                             ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'objectStructure',                // [READ] Get object structure details
  // 'searchObject',                   // [READ] Search for objects
  // 'findObjectPath',                 // [READ] Find path for an object
  // 'objectTypes',                    // [READ] Get available object types
  // 'reentranceTicket',               // [READ] Get reentrance ticket

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                            CLASS OPERATIONS                              ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'classIncludes',                  // [READ] Get class includes structure
  // 'classComponents',                // [READ] List class components
  'createTestInclude',              // [WRITE] Create test include for class

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           CODE ANALYSIS                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'syntaxCheckCode',                // [READ] Perform syntax check with source code
  // 'syntaxCheckCdsUrl',              // [READ] Perform syntax check with CDS URL
  // 'codeCompletion',                 // [READ] Get code completion suggestions
  // 'findDefinition',                 // [READ] Find symbol definition
  // 'usageReferences',                // [READ] Find symbol references (where-used)
  // 'syntaxCheckTypes',               // [READ] Get syntax check types
  // 'codeCompletionFull',             // [READ] Full code completion
  // 'runClass',                       // [EXECUTE] Run a class (may have side effects!)
  // 'codeCompletionElement',          // [READ] Get code completion element info
  // 'usageReferenceSnippets',         // [READ] Get usage reference snippets
  // 'fixProposals',                   // [READ] Get fix proposals for issues
  // 'fixEdits',                       // [READ] Get fix edits (returns edits, doesn't apply)
  // 'fragmentMappings',               // [READ] Get fragment mappings
  // 'abapDocumentation',              // [READ] Get ABAP documentation

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           OBJECT LOCKING                                 ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  'lock',                           // [WRITE] Lock an object (required before editing)
  'unLock',                         // [WRITE] Unlock an object

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           SOURCE CODE                                    ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'getObjectSource',                // [READ] Get source code for ABAP object
  'setObjectSource',                // [WRITE] Set/modify source code for ABAP object

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                         OBJECT DELETION                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  'deleteObject',                   // [DELETE] Delete an ABAP object from system

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                       OBJECT MANAGEMENT                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  'activateObjects',                // [WRITE] Activate ABAP objects
  'activateByName',                 // [WRITE] Activate object by name and URL
  // 'inactiveObjects',                // [READ] Get list of inactive objects

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                      OBJECT REGISTRATION                                 ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'objectRegistrationInfo',         // [READ] Get registration info for object
  // 'validateNewObject',              // [READ] Validate parameters for new object
  'createObject',                   // [WRITE] Create a new ABAP object

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                         NODE/TREE NAVIGATION                             ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'nodeContents',                   // [READ] Get contents of repository tree node
  // 'mainPrograms',                   // [READ] Get main programs for an include

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                            DISCOVERY                                     ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'featureDetails',                 // [READ] Get feature details
  // 'collectionFeatureDetails',       // [READ] Get collection feature details
  // 'findCollectionByUrl',            // [READ] Find collection by URL
  // 'loadTypes',                      // [READ] Load object types
  // 'adtDiscovery',                   // [READ] Perform ADT discovery
  // 'adtCoreDiscovery',               // [READ] Perform ADT core discovery
  // 'adtCompatibiliyGraph',           // [READ] Get ADT compatibility graph

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           UNIT TESTING                                   ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'unitTestRun',                    // [EXECUTE] Run unit tests (may have side effects)
  // 'unitTestEvaluation',             // [READ] Evaluate unit test results
  // 'unitTestOccurrenceMarkers',      // [READ] Get unit test occurrence markers

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                          PRETTY PRINTER                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'prettyPrinterSetting',           // [READ] Get pretty printer settings
  'setPrettyPrinterSetting',        // [WRITE] Set pretty printer settings (user config)
  // 'prettyPrinter',                  // [READ] Format code (returns formatted, doesn't save)

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                          GIT OPERATIONS                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'gitRepos',                       // [READ] Get list of Git repositories
  // 'gitExternalRepoInfo',            // [READ] Get external Git repo info
  'gitCreateRepo',                  // [WRITE] Create/link a Git repository
  'gitPullRepo',                    // [WRITE] Pull changes from Git (modifies objects!)
  'gitUnlinkRepo',                  // [WRITE] Unlink a Git repository
  // 'stageRepo',                      // [READ] Stage changes (prepares for push)
  'pushRepo',                       // [WRITE] Push changes to Git
  // 'checkRepo',                      // [READ] Check Git repository status
  // 'remoteRepoInfo',                 // [READ] Get remote Git repo info
  'switchRepoBranch',               // [WRITE] Switch Git branch (may modify objects)

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                         DDIC OPERATIONS                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'annotationDefinitions',          // [READ] Get annotation definitions
  // 'ddicElement',                    // [READ] Get DDIC element information
  // 'ddicRepositoryAccess',           // [READ] Access DDIC repository
  // 'packageSearchHelp',              // [READ] Package search help

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                       SERVICE BINDING                                    ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  'publishServiceBinding',          // [WRITE] Publish a service binding
  'unPublishServiceBinding',        // [WRITE] Unpublish a service binding
  // 'bindingDetails',                 // [READ] Get service binding details

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                        DATA QUERIES                                      ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'tableContents',                  // [READ] Get ABAP table contents
  // 'runQuery',                       // [READ] Run SQL query (SELECT only recommended!)

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                         FEEDS & DUMPS                                    ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'feeds',                          // [READ] Get list of feeds
  // 'dumps',                          // [READ] Get list of dumps

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                          DEBUGGING                                       ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'debuggerListeners',              // [READ] Get debugger listeners
  // 'debuggerListen',                 // [SESSION] Start listening for debug events
  // 'debuggerDeleteListener',         // [SESSION] Stop debug listener
  // 'debuggerSetBreakpoints',         // [SESSION] Set breakpoints (session-level)
  // 'debuggerDeleteBreakpoints',      // [SESSION] Delete breakpoints
  // 'debuggerAttach',                 // [SESSION] Attach debugger
  'debuggerSaveSettings',           // [WRITE] Save debugger settings (user config)
  // 'debuggerStackTrace',             // [READ] Get stack trace
  // 'debuggerVariables',              // [READ] Get debugger variables
  // 'debuggerChildVariables',         // [READ] Get child variables
  // 'debuggerStep',                   // [EXECUTE] Perform debug step
  // 'debuggerGoToStack',              // [READ] Navigate to stack entry
  // 'debuggerSetVariableValue',       // [EXECUTE] Set variable value during debug

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                        RENAME REFACTORING                                ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'renameEvaluate',                 // [READ] Evaluate rename possibility
  // 'renamePreview',                  // [READ] Preview rename changes
  'renameExecute',                  // [WRITE] Execute rename (modifies objects!)

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                    EXTRACT METHOD REFACTORING                            ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'extractMethodEvaluate',          // [READ] Evaluate extract method possibility
  // 'extractMethodPreview',           // [READ] Preview extract method changes
  'extractMethodExecute',           // [WRITE] Execute extract method (modifies objects!)

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           ATC CHECKS                                     ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'atcCustomizing',                 // [READ] Get ATC customizing info
  // 'atcCheckVariant',                // [READ] Get ATC check variant info
  // 'createAtcRun',                   // [EXECUTE] Create/run ATC check
  // 'atcWorklists',                   // [READ] Get ATC worklists
  // 'atcUsers',                       // [READ] Get ATC users
  // 'atcExemptProposal',              // [READ] Get ATC exemption proposal
  // 'atcRequestExemption',            // [WRITE] Request ATC exemption
  // 'isProposalMessage',              // [READ] Check if proposal message
  // 'atcContactUri',                  // [READ] Get ATC contact URI
  // 'atcChangeContact',               // [WRITE] Change ATC finding contact

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           TRACES                                         ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'tracesList',                     // [READ] Get list of traces
  // 'tracesListRequests',             // [READ] Get list of trace requests
  // 'tracesHitList',                  // [READ] Get trace hit list
  // 'tracesDbAccess',                 // [READ] Get trace DB access info
  // 'tracesStatements',               // [READ] Get trace statements
  'tracesSetParameters',            // [WRITE] Set trace parameters
  'tracesCreateConfiguration',      // [WRITE] Create trace configuration
  // 'tracesDeleteConfiguration',      // [DELETE] Delete trace configuration
  // 'tracesDelete',                   // [DELETE] Delete a trace

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           REVISIONS                                      ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'revisions',                      // [READ] Get revisions for an object

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║                           SYSTEM                                         ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  // 'healthcheck',                    // [READ] Check server health
]);

/**
 * Check if a tool is enabled
 */
export function isToolEnabled(toolName: string): boolean {
  return !disabledTools.has(toolName);
}

/**
 * Filter out disabled tools from a list
 */
export function filterEnabledTools<T extends { name: string }>(tools: T[]): T[] {
  return tools.filter(tool => isToolEnabled(tool.name));
}

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                         PRESET CONFIGURATIONS                                ║
// ╠══════════════════════════════════════════════════════════════════════════════╣
// ║  Uncomment a preset below to quickly enable it, or create your own.          ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

/**
 * READ-ONLY MODE preset
 * Disables all tools that can modify the system
 * 
 * To use: Replace the disabledTools Set above with this one:
 */
export const PRESET_READ_ONLY: string[] = [
  // Transport modifications
  'createTransport',
  'setTransportsConfig',
  'createTransportsConfig',
  'transportDelete',
  'transportRelease',
  'transportSetOwner',
  'transportAddUser',
  // Object modifications
  'setObjectSource',
  'deleteObject',
  'createObject',
  'activateObjects',
  'activateByName',
  'createTestInclude',
  // Lock operations (prevent editing)
  'lock',
  'unLock',
  // Refactoring
  'renameExecute',
  'extractMethodExecute',
  // Git modifications
  'gitCreateRepo',
  'gitPullRepo',
  'gitUnlinkRepo',
  'pushRepo',
  'switchRepoBranch',
  // Service binding
  'publishServiceBinding',
  'unPublishServiceBinding',
  // Settings modifications
  'setPrettyPrinterSetting',
  'debuggerSaveSettings',
  // ATC modifications
  'atcRequestExemption',
  'atcChangeContact',
  // Trace modifications
  'tracesSetParameters',
  'tracesCreateConfiguration',
  'tracesDeleteConfiguration',
  'tracesDelete',
];

/**
 * SAFE MODE preset
 * Disables potentially dangerous operations (delete, execute, debug)
 */
export const PRESET_SAFE_MODE: string[] = [
  // Delete operations
  'deleteObject',
  'transportDelete',
  'tracesDelete',
  'tracesDeleteConfiguration',
  // Execute operations
  'runClass',
  'debuggerStep',
  'debuggerSetVariableValue',
  // All debug operations
  'debuggerListeners',
  'debuggerListen',
  'debuggerDeleteListener',
  'debuggerSetBreakpoints',
  'debuggerDeleteBreakpoints',
  'debuggerAttach',
  'debuggerSaveSettings',
  'debuggerStackTrace',
  'debuggerVariables',
  'debuggerChildVariables',
  'debuggerGoToStack',
];

/**
 * ANALYSIS ONLY preset
 * Only allows code reading and analysis, no modifications
 */
export const PRESET_ANALYSIS_ONLY: string[] = [
  ...PRESET_READ_ONLY,
  // Also disable execute operations
  'runClass',
  'unitTestRun',
  'createAtcRun',
];
