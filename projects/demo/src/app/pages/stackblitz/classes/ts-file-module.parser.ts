import {TsFileParser} from './ts-file.parser';

export class TsFileModuleParser extends TsFileParser {
    protected addDeclaration(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'declarations: [',
            `declarations: [${entity}, `,
        );
    }

    protected addModuleImport(entity: string): void {
        this.rawFileContent = this.rawFileContent.replace(
            'imports: [',
            `imports: [\n${entity}, `,
        );
    }

    protected hasDeclarationEntity(entity: string): boolean {
        const [, declarations = ''] =
            this.rawFileContent.match(/(?:declarations:\s\[)(.*)(?:\])/i) || [];

        return declarations.includes(entity);
    }
}
