import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {TuiAutoFocus, tuiPure} from '@taiga-ui/cdk';
import {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

export interface User {
    name: string;
    avatar: string;
    login: string;
}

@Component({
    standalone: true,
    selector: 'mentions',
    imports: [NgForOf, TuiAutoFocus, TuiAvatar, TuiDataList, TuiInitialsPipe],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mentions {
    @ViewChild('container', {read: ElementRef})
    protected container?: ElementRef<HTMLDivElement>;

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

    @HostListener('window:keydown.arrowUp', ['$event', 'false'])
    @HostListener('window:keydown.arrowDown', ['$event', 'true'])
    protected down(event: Event, isDown: boolean): void {
        const buttons = Array.from(this.el?.querySelectorAll('button') ?? []);
        const button = isDown ? buttons[0] : buttons[buttons.length - 1];

        if (!this.el?.contains(event.target as any)) {
            button.focus();
        }
    }

    private get el(): HTMLDivElement | null {
        return this.container?.nativeElement ?? null;
    }
}
