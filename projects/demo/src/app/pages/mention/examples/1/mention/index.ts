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
    @ViewChild('container', {read: ElementRef})
    private readonly container?: ElementRef<HTMLDivElement>;

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
