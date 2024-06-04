import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {TuiAutoFocusDirective, tuiPure} from '@taiga-ui/cdk';
import {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

export interface User {
    name: string;
    avatar: string;
    login: string;
}

@Component({
    standalone: true,
    selector: 'mentions',
    imports: [
        TuiDataList,
        NgForOf,
        TuiInitialsPipe,
        TuiAvatarComponent,
        TuiAutoFocusDirective,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentionsComponent {
    protected readonly items: readonly User[] = [
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

    @Input()
    public mentionSuggestions?: string;

    @Output()
    public setMention = new EventEmitter<User>();

    @tuiPure
    protected getFilteredItems(items: readonly User[], search?: string): readonly User[] {
        return search?.length
            ? items.filter(
                  ({name, login}) =>
                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
              )
            : items;
    }
}
