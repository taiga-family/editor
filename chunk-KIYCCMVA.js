import {
  Node2 as Node,
  mergeAttributes,
  nodePasteRule
} from "./chunk-OPLENYEC.js";

// node_modules/@tiptap/extension-youtube/dist/index.js
var YOUTUBE_REGEX = /^((?:https?:)?\/\/)?((?:www|m|music)\.)?((?:youtube\.com|youtu\.be|youtube-nocookie\.com))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
var YOUTUBE_REGEX_GLOBAL = /^((?:https?:)?\/\/)?((?:www|m|music)\.)?((?:youtube\.com|youtu\.be|youtube-nocookie\.com))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/g;
var isValidYoutubeUrl = (url) => {
  return url.match(YOUTUBE_REGEX);
};
var getYoutubeEmbedUrl = (nocookie, isPlaylist) => {
  if (isPlaylist) {
    return "https://www.youtube-nocookie.com/embed/videoseries?list=";
  }
  return nocookie ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";
};
var getYoutubeVideoOrPlaylistId = (url) => {
  if (url.searchParams.has("v")) {
    return {
      id: url.searchParams.get("v")
    };
  }
  if (url.hostname === "youtu.be" || url.pathname.includes("shorts") || url.pathname.includes("live")) {
    return {
      id: url.pathname.split("/").pop()
    };
  }
  if (url.searchParams.has("list")) {
    return {
      id: url.searchParams.get("list"),
      isPlaylist: true
    };
  }
  return null;
};
var getEmbedUrlFromYoutubeUrl = (options) => {
  var _a;
  const {
    url,
    allowFullscreen,
    autoplay,
    ccLanguage,
    ccLoadPolicy,
    controls,
    disableKBcontrols,
    enableIFrameApi,
    endTime,
    interfaceLanguage,
    ivLoadPolicy,
    loop,
    modestBranding,
    nocookie,
    origin,
    playlist,
    progressBarColor,
    startAt,
    rel
  } = options;
  if (!isValidYoutubeUrl(url)) {
    return null;
  }
  if (url.includes("/embed/")) {
    return url;
  }
  const urlObject = new URL(url);
  const {
    id,
    isPlaylist
  } = (_a = getYoutubeVideoOrPlaylistId(urlObject)) !== null && _a !== void 0 ? _a : {};
  if (!id) {
    return null;
  }
  const embedUrl = new URL(`${getYoutubeEmbedUrl(nocookie, isPlaylist)}${id}`);
  if (urlObject.searchParams.has("t")) {
    embedUrl.searchParams.set("start", urlObject.searchParams.get("t").replaceAll("s", ""));
  }
  if (allowFullscreen === false) {
    embedUrl.searchParams.set("fs", "0");
  }
  if (autoplay) {
    embedUrl.searchParams.set("autoplay", "1");
  }
  if (ccLanguage) {
    embedUrl.searchParams.set("cc_lang_pref", ccLanguage);
  }
  if (ccLoadPolicy) {
    embedUrl.searchParams.set("cc_load_policy", "1");
  }
  if (!controls) {
    embedUrl.searchParams.set("controls", "0");
  }
  if (disableKBcontrols) {
    embedUrl.searchParams.set("disablekb", "1");
  }
  if (enableIFrameApi) {
    embedUrl.searchParams.set("enablejsapi", "1");
  }
  if (endTime) {
    embedUrl.searchParams.set("end", endTime.toString());
  }
  if (interfaceLanguage) {
    embedUrl.searchParams.set("hl", interfaceLanguage);
  }
  if (ivLoadPolicy) {
    embedUrl.searchParams.set("iv_load_policy", ivLoadPolicy.toString());
  }
  if (loop) {
    embedUrl.searchParams.set("loop", "1");
  }
  if (modestBranding) {
    embedUrl.searchParams.set("modestbranding", "1");
  }
  if (origin) {
    embedUrl.searchParams.set("origin", origin);
  }
  if (playlist) {
    embedUrl.searchParams.set("playlist", playlist);
  }
  if (startAt) {
    embedUrl.searchParams.set("start", startAt.toString());
  }
  if (progressBarColor) {
    embedUrl.searchParams.set("color", progressBarColor);
  }
  if (rel !== void 0) {
    embedUrl.searchParams.set("rel", rel.toString());
  }
  return embedUrl.toString();
};
var Youtube = Node.create({
  name: "youtube",
  addOptions() {
    return {
      addPasteHandler: true,
      allowFullscreen: true,
      autoplay: false,
      ccLanguage: void 0,
      ccLoadPolicy: void 0,
      controls: true,
      disableKBcontrols: false,
      enableIFrameApi: false,
      endTime: 0,
      height: 480,
      interfaceLanguage: void 0,
      ivLoadPolicy: 0,
      loop: false,
      modestBranding: false,
      HTMLAttributes: {},
      inline: false,
      nocookie: false,
      origin: "",
      playlist: "",
      progressBarColor: void 0,
      width: 640,
      rel: 1
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: true,
  addAttributes() {
    return {
      src: {
        default: null
      },
      start: {
        default: 0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: this.options.height
      }
    };
  },
  parseHTML() {
    return [{
      tag: "div[data-youtube-video] iframe"
    }];
  },
  addCommands() {
    return {
      setYoutubeVideo: (options) => ({
        commands
      }) => {
        if (!isValidYoutubeUrl(options.src)) {
          return false;
        }
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },
  addPasteRules() {
    if (!this.options.addPasteHandler) {
      return [];
    }
    return [nodePasteRule({
      find: YOUTUBE_REGEX_GLOBAL,
      type: this.type,
      getAttributes: (match) => {
        return {
          src: match.input
        };
      }
    })];
  },
  renderHTML({
    HTMLAttributes
  }) {
    const embedUrl = getEmbedUrlFromYoutubeUrl({
      url: HTMLAttributes.src,
      allowFullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      controls: this.options.controls,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      nocookie: this.options.nocookie,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      startAt: HTMLAttributes.start || 0,
      rel: this.options.rel
    });
    HTMLAttributes.src = embedUrl;
    return ["div", {
      "data-youtube-video": ""
    }, ["iframe", mergeAttributes(this.options.HTMLAttributes, {
      width: this.options.width,
      height: this.options.height,
      allowfullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      rel: this.options.rel
    }, HTMLAttributes)]];
  }
});

// projects/editor/extensions/youtube/index.ts
var TuiYoutube = Youtube.extend({}).configure({
  autoplay: false,
  ccLanguage: "en",
  interfaceLanguage: "en",
  allowFullscreen: true,
  disableKBcontrols: true
});

export {
  TuiYoutube
};
//# sourceMappingURL=chunk-KIYCCMVA.js.map
