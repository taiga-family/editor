import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';
import {TuiProgress} from '@taiga-ui/kit';
import type {CharacterCountStorage} from '@tiptap/extension-character-count';

const limit = 280;

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor, TuiProgress],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-character-count').then(({CharacterCount}) =>
                    CharacterCount.configure({
                        limit,
                    }),
                ),
            ],
        },
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    protected readonly wysiwyg?: TuiEditor;

    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected limit = limit;

    protected control = new FormControl(`
        <p>Hello world</p>
    `);

    protected get characterCount(): CharacterCountStorage | null {
        return this.wysiwyg?.editor?.getOriginTiptapEditor()?.storage?.characterCount;
    }

    protected get percentage(): number {
        return this.wysiwyg
            ? Math.round((100 / this.limit) * (this.characterCount?.characters() ?? 0))
            : 0;
    }
}
