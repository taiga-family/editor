import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {TuiInputColorComponent} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputColorComponent],
    template: `
        <tui-input-color [(ngModel)]="color"></tui-input-color>
    `,
})
class Test {
    @ViewChild(TuiInputColorComponent)
    public component!: TuiInputColorComponent;

    public color = '#0000ff';
}
describe('InputColor', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Plain string for single color', () => {
        expect(testComponent.component.background).toBe(testComponent.color);
    });

    it('Sanitized value for gradient', async () => {
        testComponent.color = 'linear-gradient(#ff0000, #00ff00)';
        fixture.detectChanges();

        await fixture.whenStable();

        expect(typeof testComponent.component.background).toBe('object');
    });
});
