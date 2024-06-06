import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {TuiColorSelector} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [TuiColorSelector],
    template: `
        <tui-color-selector
            [colors]="colors"
            [(color)]="color"
        ></tui-color-selector>
    `,
})
class Test {
    @ViewChild(TuiColorSelector)
    public component!: TuiColorSelector;

    public colors = new Map([
        ['hap', '#ff0000'],
        ['ica', 'linear-gradient(red, blue)'],
    ]);

    public color = '#0000ff';
}
describe('ColorSelector', () => {
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

    it('Parses color', () => {
        expect(testComponent.component.color).toEqual([0, 0, 255, 1]);
    });

    it('Filters out gradients from palette', () => {
        expect(testComponent.component.palette.get('hap')).toBe('#ff0000');
        expect(testComponent.component.palette.get('ica')).toBeUndefined();
    });
});
