import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiError, TuiRoot, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {provideTuiEditor, TUI_EDITOR_DEFAULT_TOOLS, TuiEditor} from '@taiga-ui/editor';

@Component({
    imports: [ReactiveFormsModule, TuiEditor, TuiError, TuiRoot],
    template: `
        <tui-root>
            <tui-editor
                [formControl]="control"
                [tools]="builtInTools"
            >
                Typing...
            </tui-editor>
            <tui-error [formControl]="control" />
            <button
                data-testid="outside"
                type="button"
            >
                Outside
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor(), tuiValidationErrorsProvider({required: 'Required'})],
})
class Test {
    protected readonly builtInTools = TUI_EDITOR_DEFAULT_TOOLS;

    public control = new FormControl('<p>Text</p>', Validators.required);
    public count = 0;

    constructor() {
        this.control.valueChanges.subscribe(() => {
            this.count++;
        });
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

    it('should make tui-editor not clickable when form control is disabled', () => {
        cy.get('[contenteditable]')
            .should('be.visible')
            .should('have.attr', 'contenteditable', 'true')
            .then(() => component.control.disable())
            .get('[contenteditable]')
            .should('have.attr', 'contenteditable', 'false')
            .should('have.css', 'pointer-events', 'none');
    });

    it('marks the control as touched after the editor loses focus', () => {
        cy.get('[contenteditable]')
            .should('be.visible')
            .type('{selectall}{backspace}')
            .then(() => {
                expect(component.control.invalid).to.eql(true);
                expect(component.control.dirty).to.eql(true);
                expect(component.control.touched).to.eql(false);
            })
            .get('[data-testid="outside"]')
            .click()
            .then(() => expect(component.control.touched).to.eql(true))
            .get('tui-editor')
            .should('have.attr', 'data-mode', 'invalid')
            .get('tui-error')
            .should('contain.text', 'Required');
    });
});
