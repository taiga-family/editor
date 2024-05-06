import {Component, ElementRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {TuiContenteditableValueAccessor} from '@tinkoff/tui-editor';

describe('ContenteditableValueAccessor', () => {
    @Component({
        standalone: true,
        imports: [FormsModule, ReactiveFormsModule, TuiContenteditableValueAccessor],
        template: `
            <div
                #modelEl
                contenteditable
                [disabled]="disabled"
                [(ngModel)]="model"
            ></div>
            <div
                #controlEl
                contenteditable
                [formControl]="control"
            ></div>
            <form [formGroup]="group">
                <div
                    #nameEl
                    contenteditable
                    formControlName="control"
                ></div>
            </form>
        `,
    })
    class TestComponent {
        @ViewChild('modelEl', {read: ElementRef})
        protected readonly modelElementRef?: ElementRef<HTMLElement>;

        @ViewChild('controlEl', {read: ElementRef})
        protected readonly controlElementRef?: ElementRef<HTMLElement>;

        @ViewChild('nameEl', {read: ElementRef})
        protected readonly nameElementRef?: ElementRef<HTMLElement>;

        protected disabled = false;
        protected model = 'Initial model';
        protected readonly control = new FormControl();
        protected readonly group = new FormGroup({
            control: new FormControl('Initial value'),
        });
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    const html = '<b>HTML</b>';

    function modelEl(): HTMLElement {
        return component.modelElementRef!.nativeElement;
    }

    function controlEl(): HTMLElement {
        return component.controlElementRef!.nativeElement;
    }

    function nameEl(): HTMLElement {
        return component.nameElementRef!.nativeElement;
    }

    beforeEach(done => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        void fixture.whenStable().then(() => {
            done();
        });
    });

    describe('ngModel', () => {
        it('initial value is in the DOM', () => {
            expect(modelEl().textContent).toBe('Initial model');
        });

        it('contenteditable="true"', () => {
            const contenteditable = modelEl().getAttribute('contenteditable');
            const result = contenteditable === 'true' || contenteditable === '';

            // Either string 'true' or empty attribute (initial enabled value) work
            expect(result).toBe(true);
        });

        it('contenteditable="false"', done => {
            component.disabled = true;
            fixture.detectChanges();
            void fixture.whenStable().then(() => {
                expect(modelEl().getAttribute('contenteditable')).toBe('false');
                done();
            });
        });

        it('model is updated', () => {
            modelEl().innerHTML = html;
            modelEl().dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(component.model).toBe(html);
        });

        it('DOM is updated', done => {
            component.model = html;
            fixture.detectChanges();
            void fixture.whenStable().then(() => {
                expect(modelEl().firstElementChild!.tagName).toBe('B');
                done();
            });
        });
    });

    describe('formControl', () => {
        it('initial value is empty = DOM is empty', () => {
            expect(controlEl().textContent).toBe('');
        });

        it('contenteditable="true"', () => {
            const contenteditable = controlEl().getAttribute('contenteditable');
            const result = contenteditable === 'true' || contenteditable === '';

            // Either string 'true' or empty attribute (initial enabled value) work
            expect(result).toBe(true);
        });

        it('contenteditable="false"', () => {
            component.control.disable();
            fixture.detectChanges();

            expect(controlEl().getAttribute('contenteditable')).toBe('false');
        });

        it('control is updated', () => {
            controlEl().innerHTML = html;
            controlEl().dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(component.control.value).toBe(html);
        });

        it('DOM is updated', done => {
            component.control.setValue(html);
            fixture.detectChanges();
            void fixture.whenStable().then(() => {
                expect(controlEl().firstElementChild!.tagName).toBe('B');
                done();
            });
        });

        it('control is not touched initially', () => {
            expect(component.control.touched).toBe(false);
        });

        it('marks control as touched on blur', () => {
            controlEl().focus();
            controlEl().blur();
            fixture.detectChanges();

            expect(component.control.touched).toBe(true);
        });
    });

    describe('formControlName', () => {
        it('initial value is in the DOM', () => {
            expect(nameEl().textContent).toBe('Initial value');
        });

        it('contenteditable="true"', () => {
            const contenteditable = nameEl().getAttribute('contenteditable');
            const result = contenteditable === 'true' || contenteditable === '';

            // Either string 'true' or empty attribute (initial enabled value) work
            expect(result).toBe(true);
        });

        it('contenteditable="false"', () => {
            component.group.disable();
            fixture.detectChanges();

            expect(nameEl().getAttribute('contenteditable')).toBe('false');
        });

        it('control is updated', () => {
            nameEl().innerHTML = html;
            nameEl().dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(component.group.get('control')!.value).toBe(html);
        });

        it('DOM is updated', done => {
            component.group.patchValue({control: html});
            fixture.detectChanges();
            void fixture.whenStable().then(() => {
                expect(nameEl().firstElementChild!.tagName).toBe('B');
                done();
            });
        });
    });

    describe('MutationObserver fallback', () => {
        it('stops observing after Input event', done => {
            modelEl().dispatchEvent(new Event('input'));
            modelEl().appendChild(document.createElement('DIV'));
            fixture.detectChanges();

            setTimeout(() => {
                void fixture.whenStable().then(() => {
                    expect(component.model).toBe('Initial model');
                    done();
                });
            });
        });
    });
});
