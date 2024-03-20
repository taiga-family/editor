import type {Type} from '@angular/core';
import type {DefaultExport} from '@angular/router';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

export async function loadComponent(
    loader: Promise<DefaultExport<Type<any>>>,
): Promise<PolymorpheusComponent<Type<any>>> {
    return loader.then(
        (module: DefaultExport<Type<any>>) => new PolymorpheusComponent(module.default),
    );
}
