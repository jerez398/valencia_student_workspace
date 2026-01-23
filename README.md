# Valencia Student Workspace

Welcome to the Valencia Student Workspace! This workspace is configured with Gemini CLI tools to help you with your programming assignments.

## 1. About Gemini CLI

Gemini CLI is an AI-powered interactive terminal assistant that helps you write code, debug issues, and automate project tasks. It is designed to understand your local codebase and use specialized "skills" to streamline your workflow.

For full documentation and advanced usage, visit: [https://geminicli.com/docs/](https://geminicli.com/docs/)

## 2. Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: [Download and Install Node.js](https://nodejs.org/) (Required for the PDF generation tool).
*   **Gemini CLI**: Install the Gemini CLI globally using npm:
    ```bash
    npm install -g @google/gemini-cli
    ```
    *(Note: Adjust the package name if using a specific internal distribution).*

## 2. Workspace Setup

This folder contains a special `.gemini` directory with custom skills configured for your course.

1.  **Verify the Skills**:
    The `.gemini` folder should be in the root of this workspace (`valencia_student_workspace/.gemini`). The CLI automatically detects this folder.

2.  **Dependencies**:
    The PDF generation tool is pre-packaged in `.gemini/skills/student-assistant/scripts/md_to_pdf`. If you encounter issues, you may need to install dependencies manually:
    ```bash
    cd .gemini/skills/student-assistant/scripts/md_to_pdf
    npm install
    cd -
    ```

## 3. Sample Assignment: FileIO

A sample project is located in the `FileIO/` directory.

### How to complete the assignment:

1.  Navigate to the directory:
    ```bash
    cd FileIO
    ```

2.  **Interactive Help**:
    Start the Gemini CLI to get help with your code or to submit your work.
    ```bash
    gemini
    ```

### Generating a Submission PDF

The `student-assistant` skill can automate your submission process. It will run your code, capture the output, create a Markdown report, and convert it to a PDF.

**Sample Prompt:**

> "I have finished the FileIO assignment. Please run the Main class, create a Submission.md file with the source code and the console output, and then generate the submission PDF."

Or specifically for the skill:

> "Activate student-assistant. I need to submit my FileIO project. Please generate the PDF submission for me."

## 4. Troubleshooting

*   **PDF Generation Failed**: Ensure you have Node.js installed and reachable in your terminal (`node -v`).
*   **Skill Not Found**: Make sure you are running the `gemini` command from within the `valencia_student_workspace` or one of its subdirectories.