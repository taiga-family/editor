import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot} from '@taiga-ui/core';
import {
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor, TuiRoot],
    template: `
        <tui-root>
            <tui-editor
                [formControl]="control"
                [tools]="builtInTools"
            >
                Typing...
            </tui-editor>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
class Test {
    protected readonly builtInTools = TUI_EDITOR_DEFAULT_TOOLS;
    public control = new FormControl('<p>Text</p>');
    public count = 0;

    constructor() {
        this.control.valueChanges.subscribe(() => this.count++);
    }
}

describe('TuiEditor', () => {
    let component: Test;

    beforeEach(() => {
        cy.mount(Test).then((wrapper) => {
            component = wrapper.component;
        });
    });

    it('control dirty check', () => {
        cy.get('[contenteditable]')
            .should('be.visible')
            .invoke('text')
            .should('eq', 'Text')
            .then(() => expect(component.control.dirty).to.eql(false))
            .then(() => expect(component.count).to.eql(0))
            .then(() => component.control.setValue('<p>Hello</p>'))
            .get('[contenteditable]')
            .invoke('text')
            .should('eq', 'Hello')
            .then(() => expect(component.control.dirty).to.eql(false))
            .then(() => expect(component.count).to.eql(1))
            .get('[contenteditable]')
            .type('{selectall}{backspace}')
            .then(() => expect(component.control.dirty).to.eql(true))
            .then(() => expect(component.count).to.eql(2))
            .get('[contenteditable]')
            .type('World')
            .then(() => expect(component.count).to.eql(7));
    });
});
