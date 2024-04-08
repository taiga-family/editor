import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiColorSelectorComponent} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [TuiColorSelectorComponent],
    template: `
        <tui-color-selector
            [colors]="colors"
            [(color)]="color"
        ></tui-color-selector>
    `,
})
class TestComponent {
    @ViewChild(TuiColorSelectorComponent)
    protected component!: TuiColorSelectorComponent;

    protected colors = new Map([
        ['hap', '#ff0000'],
        ['ica', 'linear-gradient(red, blue)'],
    ]);

    protected color = '#0000ff';
}

describe('ColorSelector', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
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
