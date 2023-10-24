import YoutubeExtension from '@tiptap/extension-youtube';

export interface TuiYoutubeOptions {
    height?: number | string;
    src: string;
    start?: number;
    width?: number | string;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        youtube: {
            /**
             * Insert a youtube video
             */
            setYoutubeVideo: (options: {
                height?: number;
                src: string;
                start?: number;
                width?: number;
            }) => ReturnType;
        };
    }
}

export const Youtube = YoutubeExtension.extend({}).configure({
    autoplay: false,
    ccLanguage: `en`,
    interfaceLanguage: `en`,
    allowFullscreen: true,
    disableKBcontrols: true,
});
