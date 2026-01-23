declare module 'md-to-pdf' {
    export interface MdToPdfInput {
        path?: string;
        content?: string;
    }

    export interface MdToPdfOptions {
        dest?: string;
        [key: string]: any;
    }

    export function mdToPdf(input: MdToPdfInput, options?: MdToPdfOptions): Promise<any>;
}
