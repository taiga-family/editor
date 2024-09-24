import YoutubeExtension from '@tiptap/extension-youtube';

export const TuiYoutube = YoutubeExtension.extend({}).configure({
    autoplay: false,
    ccLanguage: 'en',
    interfaceLanguage: 'en',
    allowFullscreen: true,
    disableKBcontrols: true,
});
