import {Pipe, type PipeTransform} from '@angular/core';

import {type User} from './user';

@Pipe({name: 'filterItems'})
export class FilterItems implements PipeTransform {
    public transform(items: readonly User[], search?: string): readonly User[] {
        return search?.length
            ? items.filter(
                  ({name, login}) =>
                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
              )
            : items;
    }
}
