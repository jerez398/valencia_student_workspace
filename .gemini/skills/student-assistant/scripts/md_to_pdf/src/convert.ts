#!/usr/bin/env node

import { mdToPdf } from 'md-to-pdf';
import path from 'path';
import fs from 'fs';
import { consola } from 'consola';
import chalk from 'chalk';

const run = async (): Promise<void> => {
    // Check if a file argument is provided
    if (process.argv.length < 3) {
        consola.error('Usage: ./convert.js <path-to-md-file>');
        process.exit(1);
    }

    const inputArg: string = process.argv[2];
    
    // Resolve the full path: 
    // If it's absolute, use it directly.
    // If it's relative, resolve it against the current working directory where the script is executed.
    const filePath: string = path.isAbsolute(inputArg) 
        ? inputArg 
        : path.resolve(process.cwd(), inputArg);

    // Verify the file exists
    if (!fs.existsSync(filePath)) {
        consola.error(`File not found at ${chalk.yellow(filePath)}`);
        process.exit(1);
    }

    // Determine output path (change extension to .pdf)
    // If the file doesn't end in .md, just append .pdf
    const outputPath: string = filePath.replace(/\.md$/i, '') + '.pdf';

    try {
        consola.start(`Reading file: ${chalk.blue(filePath)}`);
        consola.info(`Destination: ${chalk.blue(outputPath)}`);
        
        await mdToPdf({ path: filePath }, { dest: outputPath });
        
        consola.success(`Successfully created PDF at: ${chalk.green(outputPath)}`);
    } catch (err: unknown) {
        consola.fatal('Error during conversion:', err);
        process.exit(1);
    }
}

run();
