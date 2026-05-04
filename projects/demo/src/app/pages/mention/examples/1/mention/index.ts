import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    input,
    output,
    viewChild,
} from '@angular/core';
import {TuiDataList} from '@taiga-ui/core';
import {TuiAvatar, TuiInitialsPipe} from '@taiga-ui/kit';
import {tuiPure} from '@taiga-ui/legacy';

export interface User {
    name: string;
    avatar: string;
    login: string;
}

@Component({
    selector: 'mentions',
    imports: [TuiAvatar, TuiDataList, TuiInitialsPipe],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:keydown.arrowDown)': 'down($event, true)',
        '(window:keydown.arrowUp)': 'down($event, false)',
    },
})
export class Mentions {
    protected readonly container = viewChild.required('container', {read: ElementRef});

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

    public readonly mentionSuggestions = input<string>();
    public readonly setMention = output<User>();

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

    protected down(event: Event, isDown: boolean): void {
        const buttons = Array.from(this.el?.querySelectorAll('button') ?? []);
        const button = isDown ? buttons[0] : buttons[buttons.length - 1];

        if (!this.el?.contains(event.target as any)) {
            button?.focus();
        }
    }

    private get el(): HTMLDivElement | null {
        return this.container().nativeElement ?? null;
    }
}
