import {DOCUMENT} from '@angular/common';
import {ElementRef, inject, Injectable} from '@angular/core';
import {TuiDestroyService, tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {map, Observable, startWith, switchMap, takeUntil} from 'rxjs';

import {tuiGetElementPoint} from '../utils/get-element-point';

@Injectable()
export class TuiPickerService extends Observable<TuiPoint> {
    constructor() {
        const nativeElement: HTMLElement = inject(ElementRef).nativeElement;
        const doc = inject(DOCUMENT);

        const point$ = tuiTypedFromEvent(nativeElement, 'mousedown').pipe(
            tuiPreventDefault(),
            switchMap(event => {
                const mouseMove$ = tuiTypedFromEvent(doc, 'mousemove').pipe(
                    map(({clientX, clientY}) =>
                        tuiGetElementPoint(clientX, clientY, nativeElement),
                    ),
                    takeUntil(tuiTypedFromEvent(doc, 'mouseup')),
                );

                return event.target === nativeElement
                    ? mouseMove$.pipe(
                          startWith(
                              tuiGetElementPoint(
                                  event.clientX,
                                  event.clientY,
                                  nativeElement,
                              ),
                          ),
                      )
                    : mouseMove$;
            }),
            takeUntil(inject(TuiDestroyService, {self: true})),
        );

        super(subscriber => point$.subscribe(subscriber));
    }
}
