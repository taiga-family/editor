import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {TuiColorPicker} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [TuiColorPicker],
    template: `
        <tui-color-picker [(color)]="color"></tui-color-picker>
    `,
})
class Test {
    @ViewChild(TuiColorPicker)
    public component!: TuiColorPicker;

    public color = [0, 255, 0, 1];
}
describe('ColorPicker', () => {
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
        expect(testComponent.component.currentColor).toEqual([0, 255, 0]);
        expect(testComponent.component.point).toEqual([1, 0]);
        expect(testComponent.component.opacity).toBe(1);
        expect(testComponent.component.hue).toBe(1 / 3);
    });
});
