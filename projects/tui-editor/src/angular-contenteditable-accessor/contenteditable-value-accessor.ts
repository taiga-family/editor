import {
    AfterViewInit,
    Directive,
    ElementRef,
    forwardRef,
    HostListener,
    inject,
    OnDestroy,
    Renderer2,
    SecurityContext,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

/*
 * This is a barebones contenteditable {@link ControlValueAccessor} allowing you to use
 * Angular forms with native contenteditable HTML. For security reasons you might want
 * to consider sanitizing pasted/dropped content before using it. Also make sure that
 * you do not set any dangerous content as control value yourself, because directive
 * just outputs control value as-is.
 */
@Directive({
    standalone: true,
    selector:
        '[contenteditable][formControlName], [contenteditable][formControl], [contenteditable][ngModel]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TuiContenteditableValueAccessor),
            multi: true,
        },
    ],
})
export class TuiContenteditableValueAccessor
    implements ControlValueAccessor, AfterViewInit, OnDestroy
{
    private readonly elementRef = inject(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly sanitizer = inject(DomSanitizer);

    /*
     * MutationObserver IE11 fallback (as opposed to input event for modern browsers).
     * When mutation removes a tag, i.e. delete is pressed on the last remaining character
     * inside a tag — callback is triggered before the DOM is actually changed, therefore
     * setTimeout is used
     */
    private readonly observer = new MutationObserver(() => {
        setTimeout(() => {
            this.onChange(this.processValue(this.elementRef.nativeElement.innerHTML));
        });
    });

    /*
     * Listen to input events to write innerHTML value into control,
     * also disconnect MutationObserver as it is not needed if this
     * event works in current browser
     */
    @HostListener('input')
    onInput(): void {
        this.observer.disconnect();
        this.onChange(this.processValue(this.elementRef.nativeElement.innerHTML));
    }

    /*
     * Listen to blur event to mark control as touched
     */
    @HostListener('blur')
    onBlur(): void {
        this.onTouched();
    }

    /*
     * To support IE11 MutationObserver is used to monitor changes to the content
     */
    ngAfterViewInit(): void {
        this.observer.observe(this.elementRef.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    }

    /*
     * Disconnect MutationObserver IE11 fallback on destroy
     */
    ngOnDestroy(): void {
        this.observer.disconnect();
    }

    /*
     * Reacts to external change
     *
     * @see {@link ControlValueAccessor#writeValue}
     */
    writeValue(value: string | null): void {
        this.renderer.setProperty(
            this.elementRef.nativeElement,
            'innerHTML',
            this.processValue(value),
        );
    }

    /*
     * Registers onChange callback
     *
     * @see {@link ControlValueAccessor#registerOnChange}
     */
    registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
    }

    /*
     * Registers onTouch callback
     *
     * @see {@link ControlValueAccessor#registerOnTouched}
     */
    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    /*
     * Sets disabled state by setting contenteditable attribute to true/false
     *
     * @see {@link ControlValueAccessor#setDisabledState}
     */
    setDisabledState(disabled: boolean): void {
        this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'contenteditable',
            String(!disabled),
        );
    }

    /*
     * null is treated as empty string to prevent IE11 outputting 'null',
     * also single <br> is replaced with empty string when passed to the control
     */
    private processValue(value: unknown): string {
        const processed = String(value === null || value === undefined ? '' : value);

        return (
            this.sanitizer.sanitize(
                SecurityContext.HTML,
                processed.trim() === '<br>' ? '' : processed,
            ) ?? ''
        );
    }

    /*
     * onTouch callback that marks control as touched and allows FormHooks use
     */
    private onTouched = (): void => {};

    /*
     * onChange callback that writes value to control and allows FormHooks use
     */
    private onChange: (value: string) => void = (): void => {};
}
