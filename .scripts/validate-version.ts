import {execSync} from 'node:child_process';

const cdk: string = execSync('npm info @taiga-ui/cdk version')?.toString().trim() ?? '';
const editor: string = execSync('npm pkg get version --raw')?.toString().trim() ?? '';
const cdkMajor = parseInt(cdk.split('.')[0]);
const editorMajor = parseInt(editor.replace(/["']/g, '').split('.')[0]);

if (cdkMajor !== editorMajor) {
    throw new Error("@taiga-ui/cdk and @taiga-ui/editor haven't flat major version");
}
