import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

export function tuiIsKeyboardFocusable(element: Element): boolean {
    if (element.hasAttribute('disabled') || element.getAttribute('tabIndex') === '-1') {
        return false;
    }

    if (
        (tuiIsHTMLElement(element) && element.isContentEditable) ||
        element.getAttribute('tabIndex') === '0'
    ) {
        return true;
    }

    switch (element.tagName) {
        case 'A':
        case 'LINK':
            return element.hasAttribute('href');
        case 'AUDIO':
        case 'VIDEO':
            return element.hasAttribute('controls');
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        case 'INPUT':
            return element.getAttribute('type') !== 'hidden';
        default:
            return false;
    }
}

export function tuiIsMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' || tuiIsKeyboardFocusable(element))
    );
}
