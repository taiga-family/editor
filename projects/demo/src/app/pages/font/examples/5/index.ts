import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {FontOption} from './font-option';

@Component({
    imports: [ReactiveFormsModule, TuiEditor],
    template: '<tui-editor [formControl]="control" [tools]="builtInTools" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(),
        provideTuiEditorOptions({
            fontOptionContent: new PolymorpheusComponent(FontOption),
        }),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];

    protected readonly control = new FormControl(`
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <p>Normal text</p>
    `);
}
