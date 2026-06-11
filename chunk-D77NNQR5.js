import {
  Node3,
  createAtomBlockMarkdownSpec,
  mergeAttributes,
  nodePasteRule
} from "./chunk-QYO3DBNN.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
var getEmbedUrlFromYoutubeUrl = (options) => {
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
  if (url.includes("youtu.be")) {
    const id = url.split("/").pop();
    if (!id) {
      return null;
    }
    return `${getYoutubeEmbedUrl(nocookie)}${id}`;
  }
  const videoIdRegex = /(?:(v|list)=|shorts\/)([-\w]+)/gm;
  const matches = videoIdRegex.exec(url);
  if (!matches || !matches[2]) {
    return null;
  }
  let outputUrl = `${getYoutubeEmbedUrl(nocookie, matches[1] === "list")}${matches[2]}`;
  const params = [];
  if (allowFullscreen === false) {
    params.push("fs=0");
  }
  if (autoplay) {
    params.push("autoplay=1");
  }
  if (ccLanguage) {
    params.push(`cc_lang_pref=${ccLanguage}`);
  }
  if (ccLoadPolicy) {
    params.push("cc_load_policy=1");
  }
  if (!controls) {
    params.push("controls=0");
  }
  if (disableKBcontrols) {
    params.push("disablekb=1");
  }
  if (enableIFrameApi) {
    params.push("enablejsapi=1");
  }
  if (endTime) {
    params.push(`end=${endTime}`);
  }
  if (interfaceLanguage) {
    params.push(`hl=${interfaceLanguage}`);
  }
  if (ivLoadPolicy) {
    params.push(`iv_load_policy=${ivLoadPolicy}`);
  }
  if (loop) {
    params.push("loop=1");
  }
  if (modestBranding) {
    params.push("modestbranding=1");
  }
  if (origin) {
    params.push(`origin=${origin}`);
  }
  if (playlist) {
    params.push(`playlist=${playlist}`);
  }
  if (startAt) {
    params.push(`start=${startAt}`);
  }
  if (progressBarColor) {
    params.push(`color=${progressBarColor}`);
  }
  if (rel !== void 0) {
    params.push(`rel=${rel}`);
  }
  if (params.length) {
    outputUrl += `${matches[1] === "list" ? "&" : "?"}${params.join("&")}`;
  }
  return outputUrl;
};
var getAttributesFromYoutubeEmbedUrl = (url) => {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    return null;
  }
  const hostname = parsedUrl.hostname.replace(/^www\./, "");
  if (hostname !== "youtube.com" && hostname !== "youtube-nocookie.com") {
    return null;
  }
  let src = null;
  if (parsedUrl.pathname === "/embed/videoseries") {
    const list = parsedUrl.searchParams.get("list");
    if (!list) {
      return null;
    }
    src = `https://www.youtube.com/playlist?list=${list}`;
  } else {
    const matches = parsedUrl.pathname.match(/^\/embed\/([\w-]+)$/);
    if (!(matches == null ? void 0 : matches[1])) {
      return null;
    }
    src = `https://www.youtube.com/watch?v=${matches[1]}`;
  }
  if (!isValidYoutubeUrl(src)) {
    return null;
  }
  const attributes = {
    src
  };
  const start = parsedUrl.searchParams.get("start");
  if (start) {
    const parsedStart = Number.parseInt(start, 10);
    if (!Number.isNaN(parsedStart)) {
      attributes.start = parsedStart;
    }
  }
  return attributes;
};
var getParsedDimension = (value) => {
  if (!value) {
    return null;
  }
  const parsedValue = Number.parseInt(value, 10);
  return Number.isNaN(parsedValue) ? null : parsedValue;
};
var getParsedYoutubeAttributes = (element) => {
  const src = element.getAttribute("src");
  if (!src) {
    return null;
  }
  const embedAttributes = getAttributesFromYoutubeEmbedUrl(src);
  if (embedAttributes) {
    return embedAttributes;
  }
  return {
    src
  };
};
var Youtube = Node3.create(__spreadValues({
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
        default: null,
        parseHTML: (element) => {
          var _a;
          return (_a = getParsedYoutubeAttributes(element)) == null ? void 0 : _a.src;
        }
      },
      start: {
        default: 0,
        parseHTML: (element) => {
          var _a;
          return (_a = getParsedYoutubeAttributes(element)) == null ? void 0 : _a.start;
        }
      },
      width: {
        default: this.options.width,
        parseHTML: (element) => getParsedDimension(element.getAttribute("width"))
      },
      height: {
        default: this.options.height,
        parseHTML: (element) => getParsedDimension(element.getAttribute("height"))
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
}, createAtomBlockMarkdownSpec({
  nodeName: "youtube",
  allowedAttributes: ["src", "width", "height", "start"]
})));

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
//# sourceMappingURL=chunk-D77NNQR5.js.map
