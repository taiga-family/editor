import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n';

export const TUI_EDITOR_TOOLBAR_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_EDITOR_TOOLBAR_TEXTS' : '',
    {factory: tuiExtractI18n('toolbarTools')},
);

export const TUI_EDITOR_TABLE_COMMANDS = new InjectionToken(
    ngDevMode ? 'TUI_EDITOR_TABLE_COMMANDS' : '',
    {factory: tuiExtractI18n('editorTableCommands')},
);

export const TUI_EDITOR_LINK_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_EDITOR_LINK_TEXTS' : '',
    {factory: tuiExtractI18n('editorEditLink')},
);

export const TUI_EDITOR_CODE_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_EDITOR_CODE_OPTIONS' : '',
    {factory: tuiExtractI18n('editorCodeOptions')},
);

export const TUI_EDITOR_FONT_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_EDITOR_FONT_OPTIONS' : '',
    {factory: tuiExtractI18n('editorFontOptions')},
);
