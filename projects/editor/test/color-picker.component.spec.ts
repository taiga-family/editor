import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiColorPickerComponent} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [TuiColorPickerComponent],
    template: `
        <tui-color-picker [(color)]="color"></tui-color-picker>
    `,
})
class TestComponent {
    @ViewChild(TuiColorPickerComponent)
    protected component!: TuiColorPickerComponent;

    protected color = [0, 255, 0, 1];
}

describe('ColorPicker', () => {
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
        expect(testComponent.component.currentColor).toEqual([0, 255, 0]);
        expect(testComponent.component.point).toEqual([1, 0]);
        expect(testComponent.component.opacity).toBe(1);
        expect(testComponent.component.hue).toBe(1 / 3);
    });
});
