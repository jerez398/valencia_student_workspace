function run(argv) {
    // 1. Parse Arguments
    // argv[0]: Command to run in Terminal (default: echo)
    // argv[1]: Output filename (default: terminal_screenshot.png)
    var commandToRun = argv.length > 0 ? argv[0] : "echo 'Hello World'";
    var outputFile = argv.length > 1 ? argv[1] : "terminal_screenshot.png";

    // 2. Target Terminal App
    var term = Application("Terminal");
    term.activate();

    // 3. Run the command (creates a new window automatically)
    term.doScript(commandToRun);

    // 4. Wait for window to render and command to execute
    delay(1.5);

    // 5. Get the ID of the frontmost window
    // Note: 'windows[0]' is the frontmost window in JXA
    var win = term.windows[0];
    var winID = win.id();

    // 6. Execute screencapture via System Events
    var sys = Application.currentApplication();
    sys.includeStandardAdditions = true;

    // Construct command: screencapture -l <windowID> "<filename>"
    var captureCmd = "screencapture -l " + winID + " \"" + outputFile + "\"";
    
    try {
        sys.doShellScript(captureCmd);
        return "Success: Captured '" + commandToRun + "' to " + outputFile;
    } catch (e) {
        return "Error: " + e.message;
    }
}