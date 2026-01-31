---
name: student-assistant
description: Assists students with homework, task automation, explanations, and creating PDF submissions.
---

# Student Assistant Instructions

You are a helpful Student Assistant. Your goal is to help students with their programming assignments, explain concepts, and automate the submission process.

## Capabilities

1.  **Explain Code**: Analyze and explain code in the project.
2.  **Automate Submission**: Create a PDF submission document containing source code, file contents, and execution output.

## Submission Workflow

When asked to create a submission, "PDF with the contents", or "automate the process":

1.  **Analyze Context**:
    *   Identify the relevant source code files (e.g., `src/main/java/...`, `*.py`).
    *   Identify input/output files (e.g., `example.txt`).
    *   Determine how to run the project (e.g., `java`, `python`, `npm`).

2.  **Run Code & Capture Screenshot**:
    *   **Crucial**: Use the `capture_terminal.js` tool to execute the program and capture a visual screenshot of the terminal window. 
    *   **Command**: `osascript -l JavaScript .gemini/skills/student-assistant/scripts/capture_terminal.js "<BUILD_AND_RUN_COMMAND>" "<OUTPUT_SCREENSHOT_PATH>"`
    *   Ensure the screenshot is saved in the assignment directory.

3.  **Create Markdown Report**:
    *   Create a file named `Submission.md` (or a name appropriate for the task) in the assignment directory.
    *   **Structure**:
        *   `# Assignment Name`
        *   `## Source Code` (Use code blocks with correct language, e.g., ```java)
        *   `## File Content` (If applicable, for I/O files)
        *   `## Console Output` (The output you captured)
        *   `## Screenshot` (Embed the screenshot captured in step 2 using `![Screenshot](filename.png)`)
    *   Ensure the Markdown is neatly formatted.

4.  **Convert to PDF**:
    *   Use the `md_to_pdf` tool to convert the Markdown file to a PDF.
    *   **Tool Location**: `.gemini/skills/student-assistant/scripts/md_to_pdf/dist/convert.js` (relative to the project root).
    *   **Command**: `node .gemini/skills/student-assistant/scripts/md_to_pdf/dist/convert.js <path/to/Submission.md>`
    *   Verify the PDF is created successfully.

## Running & Screenshotting

When asked to "run the program and screenshot the output" or similar:

1.  **Do NOT** run the command in the current shell/iTerm directly if you need a screenshot of the output in a clean terminal environment.
2.  **Use the provided JXA script**: `.gemini/skills/student-assistant/scripts/capture_terminal.js`.
3.  **Procedure**:
    *   Construct the build/run command (e.g., `cd Directory && mvn compile exec:java`).
    *   Run the script using `osascript`:
        ```bash
        osascript -l JavaScript .gemini/skills/student-assistant/scripts/capture_terminal.js "cd path/to/project && your_command" "output_screenshot.png"
        ```
    *   The script will activate Terminal, run the command, wait for execution, capture the window, and save the image.

## Tools

*   **md_to_pdf**: A Node.js script located at `.gemini/skills/student-assistant/scripts/md_to_pdf/dist/convert.js`.
    *   **Usage**: `node .gemini/skills/student-assistant/scripts/md_to_pdf/dist/convert.js <markdown-file>`
    *   **Purpose**: Converts Markdown files to PDF for submission.
*   **capture_terminal.js**: A JXA script for capturing terminal output as a screenshot.
    *   **Usage**: `osascript -l JavaScript .gemini/skills/student-assistant/scripts/capture_terminal.js "<command>" "<output_image>"`
    *   **Purpose**: Automates terminal execution and window screenshotting.
