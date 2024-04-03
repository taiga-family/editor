import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';

export interface User {
    name: string;
    avatar: string;
    login: string;
}

@Component({
    selector: 'mentions',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentionsComponent {
    @Input()
    mentionSuggestions?: string;

    @Output()
    setMention = new EventEmitter<User>();

    readonly items: readonly User[] = [
        {
            name: 'Alexander Inkin',
            avatar: 'https://taiga-ui.dev/assets/images/avatar.jpg',
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    @tuiPure
    getFilteredItems(items: readonly User[], search?: string): readonly User[] {
        return search?.length
            ? items.filter(
                  ({name, login}) =>
                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
              )
            : items;
    }
}
