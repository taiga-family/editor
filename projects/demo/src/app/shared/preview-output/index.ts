import {NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

@Directive({
    standalone: true,
    selector: 'ng-template[slot=html]',
})
export class SlotHtmlTemplate {}

@Directive({
    standalone: true,
    selector: 'ng-template[slot=text]',
})
export class SlotTextTemplate {}

@Directive({
    standalone: true,
    selector: 'ng-template[slot=markdown]',
})
export class SlotMarkdownTemplate {}

@Component({
    standalone: true,
    selector: 'preview-output',
    imports: [NgIf, NgTemplateOutlet, TuiAccordion, TuiExpand, TuiItem],
    template: `
        <tui-accordion [closeOthers]="false">
            <button [tuiAccordion]="open ?? isE2E">HTML</button>
            <tui-expand>
                <ng-container *tuiItem>
                    <ng-container *ngTemplateOutlet="html" />
                </ng-container>
            </tui-expand>

            <button [tuiAccordion]="open ?? isE2E">Text</button>
            <tui-expand>
                <ng-container *tuiItem>
                    <ng-container *ngTemplateOutlet="text" />
                </ng-container>
            </tui-expand>

            <ng-container *ngIf="markdown">
                <button [tuiAccordion]="open ?? isE2E">Markdown</button>
                <tui-expand>
                    <ng-container *tuiItem>
                        <ng-container *ngTemplateOutlet="markdown" />
                    </ng-container>
                </tui-expand>
            </ng-container>
        </tui-accordion>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewOutputComponent {
    protected readonly isE2E = inject(TUI_IS_E2E);

    @ContentChild(SlotHtmlTemplate, {read: TemplateRef})
    protected readonly html: TemplateRef<unknown> | null = null;

    @ContentChild(SlotTextTemplate, {read: TemplateRef})
    protected readonly text: TemplateRef<unknown> | null = null;

    @ContentChild(SlotMarkdownTemplate, {read: TemplateRef})
    protected readonly markdown: TemplateRef<unknown> | null = null;

    @Input()
    public open?: boolean;
}

export const PreviewOutput = [
    PreviewOutputComponent,
    SlotHtmlTemplate,
    SlotTextTemplate,
    SlotMarkdownTemplate,
] as const;
