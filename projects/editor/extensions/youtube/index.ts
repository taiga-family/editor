import {Youtube} from '@tiptap/extension-youtube';

export const TuiYoutube = Youtube.extend({}).configure({
    autoplay: false,
    ccLanguage: 'en',
    interfaceLanguage: 'en',
    allowFullscreen: true,
    disableKBcontrols: true,
});
