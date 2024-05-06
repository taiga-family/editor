import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {TuiColorEditComponent} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [TuiColorEditComponent],
    template: `
        <tui-color-edit [(color)]="color"></tui-color-edit>
    `,
})
class TestComponent {
    @ViewChild(TuiColorEditComponent)
    protected component!: TuiColorEditComponent;

    protected color = [255, 0, 0, 1];
}
describe('ColorEdit', () => {
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

    it('HEX', () => {
        expect(testComponent.component.hex).toBe('ff0000');
    });

    it('Updates', () => {
        testComponent.component.onHexChange('00ff00');

        expect(testComponent.color).toEqual([0, 255, 0, 1]);
    });

    it('Does not trigger if HEX is not fully entered', () => {
        testComponent.component.onHexChange('00ff');

        expect(testComponent.color).toEqual([255, 0, 0, 1]);
    });
});
