import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {TuiColorEdit} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [TuiColorEdit],
    template: `
        <tui-color-edit [(color)]="color"></tui-color-edit>
    `,
})
class Test {
    @ViewChild(TuiColorEdit)
    public component!: TuiColorEdit;

    public color = [255, 0, 0, 1];
}
describe('ColorEdit', () => {
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
