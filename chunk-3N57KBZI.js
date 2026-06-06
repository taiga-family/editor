import {
  Mark2 as Mark,
  Plugin,
  PluginKey,
  combineTransactionSteps,
  findChildrenInRange,
  getAttributes,
  getChangedRanges,
  getMarksBetween,
  markPasteRule,
  mergeAttributes
} from "./chunk-QAKA6OWS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/linkifyjs/dist/linkify.mjs
var encodedTlds = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xF6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
var encodedUtlds = "\u03B5\u03BB1\u03C52\u0431\u04331\u0435\u043B3\u0434\u0435\u0442\u04384\u0435\u044E2\u043A\u0430\u0442\u043E\u043B\u0438\u043A6\u043E\u043C3\u043C\u043A\u04342\u043E\u043D1\u0441\u043A\u0432\u04306\u043E\u043D\u043B\u0430\u0439\u043D5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043A\u04403\u049B\u0430\u04373\u0570\u0561\u05753\u05D9\u05E9\u05E8\u05D0\u05DC5\u05E7\u05D5\u05DD3\u0627\u0628\u0648\u0638\u0628\u064A5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062F\u06464\u0628\u062D\u0631\u064A\u06465\u062C\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062F\u064A\u06296\u0639\u0644\u064A\u0627\u06465\u0645\u063A\u0631\u06285\u0645\u0627\u0631\u0627\u062A5\u06CC\u0631\u0627\u06465\u0628\u0627\u0631\u062A2\u0632\u0627\u06314\u064A\u062A\u06433\u06BE\u0627\u0631\u062A5\u062A\u0648\u0646\u06334\u0633\u0648\u062F\u0627\u06463\u0631\u064A\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064A\u06466\u0642\u0637\u06313\u0643\u0627\u062B\u0648\u0644\u064A\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064A\u0633\u064A\u06275\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067E\u0627\u06A9\u0633\u062A\u0627\u06467\u0680\u0627\u0631\u062A4\u0915\u0949\u092E3\u0928\u0947\u091F3\u092D\u093E\u0930\u09240\u092E\u094D3\u094B\u09245\u0938\u0902\u0917\u0920\u09285\u09AC\u09BE\u0982\u09B2\u09BE5\u09AD\u09BE\u09B0\u09A42\u09F0\u09A44\u0A2D\u0A3E\u0A30\u0A244\u0AAD\u0ABE\u0AB0\u0AA44\u0B2D\u0B3E\u0B30\u0B244\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE6\u0BB2\u0B99\u0BCD\u0B95\u0BC86\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD11\u0C2D\u0C3E\u0C30\u0C24\u0C4D5\u0CAD\u0CBE\u0CB0\u0CA44\u0D2D\u0D3E\u0D30\u0D24\u0D025\u0DBD\u0D82\u0D9A\u0DCF4\u0E04\u0E2D\u0E213\u0E44\u0E17\u0E223\u0EA5\u0EB2\u0EA73\u10D2\u10D42\u307F\u3093\u306A3\u30A2\u30DE\u30BE\u30F34\u30AF\u30E9\u30A6\u30C94\u30B0\u30FC\u30B0\u30EB4\u30B3\u30E02\u30B9\u30C8\u30A23\u30BB\u30FC\u30EB3\u30D5\u30A1\u30C3\u30B7\u30E7\u30F36\u30DD\u30A4\u30F3\u30C84\u4E16\u754C2\u4E2D\u4FE11\u56FD1\u570B1\u6587\u7F513\u4E9A\u9A6C\u900A3\u4F01\u4E1A2\u4F5B\u5C712\u4FE1\u606F2\u5065\u5EB72\u516B\u53662\u516C\u53F81\u76CA2\u53F0\u6E7E1\u70632\u5546\u57CE1\u5E971\u68072\u5609\u91CC0\u5927\u9152\u5E975\u5728\u7EBF2\u5927\u62FF2\u5929\u4E3B\u65593\u5A31\u4E502\u5BB6\u96FB2\u5E7F\u4E1C2\u5FAE\u535A2\u6148\u55842\u6211\u7231\u4F603\u624B\u673A2\u62DB\u80582\u653F\u52A11\u5E9C2\u65B0\u52A0\u57612\u95FB2\u65F6\u5C1A2\u66F8\u7C4D2\u673A\u67842\u6DE1\u9A6C\u95213\u6E38\u620F2\u6FB3\u95802\u70B9\u770B2\u79FB\u52A82\u7EC4\u7EC7\u673A\u67844\u7F51\u57401\u5E971\u7AD91\u7EDC2\u8054\u901A2\u8C37\u6B4C2\u8D2D\u72692\u901A\u8CA92\u96C6\u56E22\u96FB\u8A0A\u76C8\u79D14\u98DE\u5229\u6D663\u98DF\u54C12\u9910\u53852\u9999\u683C\u91CC\u62C93\u6E2F2\uB2F7\uB1371\uCEF42\uC0BC\uC1312\uD55C\uAD6D2";
var numeric = "numeric";
var ascii = "ascii";
var alpha = "alpha";
var asciinumeric = "asciinumeric";
var alphanumeric = "alphanumeric";
var domain = "domain";
var emoji = "emoji";
var scheme = "scheme";
var slashscheme = "slashscheme";
var whitespace = "whitespace";
function registerGroup(name, groups) {
  if (!(name in groups)) {
    groups[name] = [];
  }
  return groups[name];
}
function addToGroups(t, flags, groups) {
  if (flags[numeric]) {
    flags[asciinumeric] = true;
    flags[alphanumeric] = true;
  }
  if (flags[ascii]) {
    flags[asciinumeric] = true;
    flags[alpha] = true;
  }
  if (flags[asciinumeric]) {
    flags[alphanumeric] = true;
  }
  if (flags[alpha]) {
    flags[alphanumeric] = true;
  }
  if (flags[alphanumeric]) {
    flags[domain] = true;
  }
  if (flags[emoji]) {
    flags[domain] = true;
  }
  for (const k in flags) {
    const group = registerGroup(k, groups);
    if (group.indexOf(t) < 0) {
      group.push(t);
    }
  }
}
function flagsForToken(t, groups) {
  const result = {};
  for (const c in groups) {
    if (groups[c].indexOf(t) >= 0) {
      result[c] = true;
    }
  }
  return result;
}
function State(token = null) {
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = token;
}
State.groups = {};
State.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(input) {
    const state = this;
    const nextState = state.j[input];
    if (nextState) {
      return nextState;
    }
    for (let i = 0; i < state.jr.length; i++) {
      const regex = state.jr[i][0];
      const nextState2 = state.jr[i][1];
      if (nextState2 && regex.test(input)) {
        return nextState2;
      }
    }
    return state.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(input, exactOnly = false) {
    return exactOnly ? input in this.j : !!this.go(input);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(inputs, next, flags, groups) {
    for (let i = 0; i < inputs.length; i++) {
      this.tt(inputs[i], next, flags, groups);
    }
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(regexp, next, flags, groups) {
    groups = groups || State.groups;
    let nextState;
    if (next && next.j) {
      nextState = next;
    } else {
      nextState = new State(next);
      if (flags && groups) {
        addToGroups(next, flags, groups);
      }
    }
    this.jr.push([regexp, nextState]);
    return nextState;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(input, next, flags, groups) {
    let state = this;
    const len = input.length;
    if (!len) {
      return state;
    }
    for (let i = 0; i < len - 1; i++) {
      state = state.tt(input[i]);
    }
    return state.tt(input[len - 1], next, flags, groups);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(input, next, flags, groups) {
    groups = groups || State.groups;
    const state = this;
    if (next && next.j) {
      state.j[input] = next;
      return next;
    }
    const t = next;
    let nextState, templateState = state.go(input);
    if (templateState) {
      nextState = new State();
      Object.assign(nextState.j, templateState.j);
      nextState.jr.push.apply(nextState.jr, templateState.jr);
      nextState.jd = templateState.jd;
      nextState.t = templateState.t;
    } else {
      nextState = new State();
    }
    if (t) {
      if (groups) {
        if (nextState.t && typeof nextState.t === "string") {
          const allFlags = Object.assign(flagsForToken(nextState.t, groups), flags);
          addToGroups(t, allFlags, groups);
        } else if (flags) {
          addToGroups(t, flags, groups);
        }
      }
      nextState.t = t;
    }
    state.j[input] = nextState;
    return nextState;
  }
};
var ta = (state, input, next, flags, groups) => state.ta(input, next, flags, groups);
var tr = (state, regexp, next, flags, groups) => state.tr(regexp, next, flags, groups);
var ts = (state, input, next, flags, groups) => state.ts(input, next, flags, groups);
var tt = (state, input, next, flags, groups) => state.tt(input, next, flags, groups);
var WORD = "WORD";
var UWORD = "UWORD";
var ASCIINUMERICAL = "ASCIINUMERICAL";
var ALPHANUMERICAL = "ALPHANUMERICAL";
var LOCALHOST = "LOCALHOST";
var TLD = "TLD";
var UTLD = "UTLD";
var SCHEME = "SCHEME";
var SLASH_SCHEME = "SLASH_SCHEME";
var NUM = "NUM";
var WS = "WS";
var NL = "NL";
var OPENBRACE = "OPENBRACE";
var CLOSEBRACE = "CLOSEBRACE";
var OPENBRACKET = "OPENBRACKET";
var CLOSEBRACKET = "CLOSEBRACKET";
var OPENPAREN = "OPENPAREN";
var CLOSEPAREN = "CLOSEPAREN";
var OPENANGLEBRACKET = "OPENANGLEBRACKET";
var CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET";
var FULLWIDTHLEFTPAREN = "FULLWIDTHLEFTPAREN";
var FULLWIDTHRIGHTPAREN = "FULLWIDTHRIGHTPAREN";
var LEFTCORNERBRACKET = "LEFTCORNERBRACKET";
var RIGHTCORNERBRACKET = "RIGHTCORNERBRACKET";
var LEFTWHITECORNERBRACKET = "LEFTWHITECORNERBRACKET";
var RIGHTWHITECORNERBRACKET = "RIGHTWHITECORNERBRACKET";
var FULLWIDTHLESSTHAN = "FULLWIDTHLESSTHAN";
var FULLWIDTHGREATERTHAN = "FULLWIDTHGREATERTHAN";
var AMPERSAND = "AMPERSAND";
var APOSTROPHE = "APOSTROPHE";
var ASTERISK = "ASTERISK";
var AT = "AT";
var BACKSLASH = "BACKSLASH";
var BACKTICK = "BACKTICK";
var CARET = "CARET";
var COLON = "COLON";
var COMMA = "COMMA";
var DOLLAR = "DOLLAR";
var DOT = "DOT";
var EQUALS = "EQUALS";
var EXCLAMATION = "EXCLAMATION";
var HYPHEN = "HYPHEN";
var PERCENT = "PERCENT";
var PIPE = "PIPE";
var PLUS = "PLUS";
var POUND = "POUND";
var QUERY = "QUERY";
var QUOTE = "QUOTE";
var FULLWIDTHMIDDLEDOT = "FULLWIDTHMIDDLEDOT";
var SEMI = "SEMI";
var SLASH = "SLASH";
var TILDE = "TILDE";
var UNDERSCORE = "UNDERSCORE";
var EMOJI$1 = "EMOJI";
var SYM = "SYM";
var tk = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL,
  AMPERSAND,
  APOSTROPHE,
  ASCIINUMERICAL,
  ASTERISK,
  AT,
  BACKSLASH,
  BACKTICK,
  CARET,
  CLOSEANGLEBRACKET,
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEPAREN,
  COLON,
  COMMA,
  DOLLAR,
  DOT,
  EMOJI: EMOJI$1,
  EQUALS,
  EXCLAMATION,
  FULLWIDTHGREATERTHAN,
  FULLWIDTHLEFTPAREN,
  FULLWIDTHLESSTHAN,
  FULLWIDTHMIDDLEDOT,
  FULLWIDTHRIGHTPAREN,
  HYPHEN,
  LEFTCORNERBRACKET,
  LEFTWHITECORNERBRACKET,
  LOCALHOST,
  NL,
  NUM,
  OPENANGLEBRACKET,
  OPENBRACE,
  OPENBRACKET,
  OPENPAREN,
  PERCENT,
  PIPE,
  PLUS,
  POUND,
  QUERY,
  QUOTE,
  RIGHTCORNERBRACKET,
  RIGHTWHITECORNERBRACKET,
  SCHEME,
  SEMI,
  SLASH,
  SLASH_SCHEME,
  SYM,
  TILDE,
  TLD,
  UNDERSCORE,
  UTLD,
  UWORD,
  WORD,
  WS
});
var ASCII_LETTER = /[a-z]/;
var LETTER = new RegExp("\\p{L}", "u");
var EMOJI = new RegExp("\\p{Emoji}", "u");
var DIGIT = /\d/;
var SPACE = /\s/;
var CR = "\r";
var LF = "\n";
var EMOJI_VARIATION = "\uFE0F";
var EMOJI_JOINER = "\u200D";
var OBJECT_REPLACEMENT = "\uFFFC";
var tlds = null;
var utlds = null;
function init$2(customSchemes = []) {
  const groups = {};
  State.groups = groups;
  const Start = new State();
  if (tlds == null) {
    tlds = decodeTlds(encodedTlds);
  }
  if (utlds == null) {
    utlds = decodeTlds(encodedUtlds);
  }
  tt(Start, "'", APOSTROPHE);
  tt(Start, "{", OPENBRACE);
  tt(Start, "}", CLOSEBRACE);
  tt(Start, "[", OPENBRACKET);
  tt(Start, "]", CLOSEBRACKET);
  tt(Start, "(", OPENPAREN);
  tt(Start, ")", CLOSEPAREN);
  tt(Start, "<", OPENANGLEBRACKET);
  tt(Start, ">", CLOSEANGLEBRACKET);
  tt(Start, "\uFF08", FULLWIDTHLEFTPAREN);
  tt(Start, "\uFF09", FULLWIDTHRIGHTPAREN);
  tt(Start, "\u300C", LEFTCORNERBRACKET);
  tt(Start, "\u300D", RIGHTCORNERBRACKET);
  tt(Start, "\u300E", LEFTWHITECORNERBRACKET);
  tt(Start, "\u300F", RIGHTWHITECORNERBRACKET);
  tt(Start, "\uFF1C", FULLWIDTHLESSTHAN);
  tt(Start, "\uFF1E", FULLWIDTHGREATERTHAN);
  tt(Start, "&", AMPERSAND);
  tt(Start, "*", ASTERISK);
  tt(Start, "@", AT);
  tt(Start, "`", BACKTICK);
  tt(Start, "^", CARET);
  tt(Start, ":", COLON);
  tt(Start, ",", COMMA);
  tt(Start, "$", DOLLAR);
  tt(Start, ".", DOT);
  tt(Start, "=", EQUALS);
  tt(Start, "!", EXCLAMATION);
  tt(Start, "-", HYPHEN);
  tt(Start, "%", PERCENT);
  tt(Start, "|", PIPE);
  tt(Start, "+", PLUS);
  tt(Start, "#", POUND);
  tt(Start, "?", QUERY);
  tt(Start, '"', QUOTE);
  tt(Start, "/", SLASH);
  tt(Start, ";", SEMI);
  tt(Start, "~", TILDE);
  tt(Start, "_", UNDERSCORE);
  tt(Start, "\\", BACKSLASH);
  tt(Start, "\u30FB", FULLWIDTHMIDDLEDOT);
  const Num = tr(Start, DIGIT, NUM, {
    [numeric]: true
  });
  tr(Num, DIGIT, Num);
  const Asciinumeric = tr(Num, ASCII_LETTER, ASCIINUMERICAL, {
    [asciinumeric]: true
  });
  const Alphanumeric = tr(Num, LETTER, ALPHANUMERICAL, {
    [alphanumeric]: true
  });
  const Word = tr(Start, ASCII_LETTER, WORD, {
    [ascii]: true
  });
  tr(Word, DIGIT, Asciinumeric);
  tr(Word, ASCII_LETTER, Word);
  tr(Asciinumeric, DIGIT, Asciinumeric);
  tr(Asciinumeric, ASCII_LETTER, Asciinumeric);
  const UWord = tr(Start, LETTER, UWORD, {
    [alpha]: true
  });
  tr(UWord, ASCII_LETTER);
  tr(UWord, DIGIT, Alphanumeric);
  tr(UWord, LETTER, UWord);
  tr(Alphanumeric, DIGIT, Alphanumeric);
  tr(Alphanumeric, ASCII_LETTER);
  tr(Alphanumeric, LETTER, Alphanumeric);
  const Nl2 = tt(Start, LF, NL, {
    [whitespace]: true
  });
  const Cr = tt(Start, CR, WS, {
    [whitespace]: true
  });
  const Ws = tr(Start, SPACE, WS, {
    [whitespace]: true
  });
  tt(Start, OBJECT_REPLACEMENT, Ws);
  tt(Cr, LF, Nl2);
  tt(Cr, OBJECT_REPLACEMENT, Ws);
  tr(Cr, SPACE, Ws);
  tt(Ws, CR);
  tt(Ws, LF);
  tr(Ws, SPACE, Ws);
  tt(Ws, OBJECT_REPLACEMENT, Ws);
  const Emoji = tr(Start, EMOJI, EMOJI$1, {
    [emoji]: true
  });
  tt(Emoji, "#");
  tr(Emoji, EMOJI, Emoji);
  tt(Emoji, EMOJI_VARIATION, Emoji);
  const EmojiJoiner = tt(Emoji, EMOJI_JOINER);
  tt(EmojiJoiner, "#");
  tr(EmojiJoiner, EMOJI, Emoji);
  const wordjr = [[ASCII_LETTER, Word], [DIGIT, Asciinumeric]];
  const uwordjr = [[ASCII_LETTER, null], [LETTER, UWord], [DIGIT, Alphanumeric]];
  for (let i = 0; i < tlds.length; i++) {
    fastts(Start, tlds[i], TLD, WORD, wordjr);
  }
  for (let i = 0; i < utlds.length; i++) {
    fastts(Start, utlds[i], UTLD, UWORD, uwordjr);
  }
  addToGroups(TLD, {
    tld: true,
    ascii: true
  }, groups);
  addToGroups(UTLD, {
    utld: true,
    alpha: true
  }, groups);
  fastts(Start, "file", SCHEME, WORD, wordjr);
  fastts(Start, "mailto", SCHEME, WORD, wordjr);
  fastts(Start, "http", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "https", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "ftp", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "ftps", SLASH_SCHEME, WORD, wordjr);
  addToGroups(SCHEME, {
    scheme: true,
    ascii: true
  }, groups);
  addToGroups(SLASH_SCHEME, {
    slashscheme: true,
    ascii: true
  }, groups);
  customSchemes = customSchemes.sort((a, b) => a[0] > b[0] ? 1 : -1);
  for (let i = 0; i < customSchemes.length; i++) {
    const sch = customSchemes[i][0];
    const optionalSlashSlash = customSchemes[i][1];
    const flags = optionalSlashSlash ? {
      [scheme]: true
    } : {
      [slashscheme]: true
    };
    if (sch.indexOf("-") >= 0) {
      flags[domain] = true;
    } else if (!ASCII_LETTER.test(sch)) {
      flags[numeric] = true;
    } else if (DIGIT.test(sch)) {
      flags[asciinumeric] = true;
    } else {
      flags[ascii] = true;
    }
    ts(Start, sch, sch, flags);
  }
  ts(Start, "localhost", LOCALHOST, {
    ascii: true
  });
  Start.jd = new State(SYM);
  return {
    start: Start,
    tokens: Object.assign({
      groups
    }, tk)
  };
}
function run$1(start, str) {
  const iterable = stringToArray(str.replace(/[A-Z]/g, (c) => c.toLowerCase()));
  const charCount = iterable.length;
  const tokens = [];
  let cursor = 0;
  let charCursor = 0;
  while (charCursor < charCount) {
    let state = start;
    let nextState = null;
    let tokenLength = 0;
    let latestAccepting = null;
    let sinceAccepts = -1;
    let charsSinceAccepts = -1;
    while (charCursor < charCount && (nextState = state.go(iterable[charCursor]))) {
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        charsSinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts += iterable[charCursor].length;
        charsSinceAccepts++;
      }
      tokenLength += iterable[charCursor].length;
      cursor += iterable[charCursor].length;
      charCursor++;
    }
    cursor -= sinceAccepts;
    charCursor -= charsSinceAccepts;
    tokenLength -= sinceAccepts;
    tokens.push({
      t: latestAccepting.t,
      // token type/name
      v: str.slice(cursor - tokenLength, cursor),
      // string value
      s: cursor - tokenLength,
      // start index
      e: cursor
      // end index (excluding)
    });
  }
  return tokens;
}
function stringToArray(str) {
  const result = [];
  const len = str.length;
  let index = 0;
  while (index < len) {
    let first = str.charCodeAt(index);
    let second;
    let char = first < 55296 || first > 56319 || index + 1 === len || (second = str.charCodeAt(index + 1)) < 56320 || second > 57343 ? str[index] : str.slice(index, index + 2);
    result.push(char);
    index += char.length;
  }
  return result;
}
function fastts(state, input, t, defaultt, jr) {
  let next;
  const len = input.length;
  for (let i = 0; i < len - 1; i++) {
    const char = input[i];
    if (state.j[char]) {
      next = state.j[char];
    } else {
      next = new State(defaultt);
      next.jr = jr.slice();
      state.j[char] = next;
    }
    state = next;
  }
  next = new State(t);
  next.jr = jr.slice();
  state.j[input[len - 1]] = next;
  return next;
}
function decodeTlds(encoded) {
  const words = [];
  const stack = [];
  let i = 0;
  let digits = "0123456789";
  while (i < encoded.length) {
    let popDigitCount = 0;
    while (digits.indexOf(encoded[i + popDigitCount]) >= 0) {
      popDigitCount++;
    }
    if (popDigitCount > 0) {
      words.push(stack.join(""));
      for (let popCount = parseInt(encoded.substring(i, i + popDigitCount), 10); popCount > 0; popCount--) {
        stack.pop();
      }
      i += popDigitCount;
    } else {
      stack.push(encoded[i]);
      i++;
    }
  }
  return words;
}
var defaults = {
  defaultProtocol: "http",
  events: null,
  format: noop,
  formatHref: noop,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: Infinity,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Options(opts, defaultRender = null) {
  let o = Object.assign({}, defaults);
  if (opts) {
    o = Object.assign(o, opts instanceof Options ? opts.o : opts);
  }
  const ignoredTags = o.ignoreTags;
  const uppercaseIgnoredTags = [];
  for (let i = 0; i < ignoredTags.length; i++) {
    uppercaseIgnoredTags.push(ignoredTags[i].toUpperCase());
  }
  this.o = o;
  if (defaultRender) {
    this.defaultRender = defaultRender;
  }
  this.ignoreTags = uppercaseIgnoredTags;
}
Options.prototype = {
  o: defaults,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(ir) {
    return ir;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(token) {
    return this.get("validate", token.toString(), token);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(key, operator, token) {
    const isCallable = operator != null;
    let option = this.o[key];
    if (!option) {
      return option;
    }
    if (typeof option === "object") {
      option = token.t in option ? option[token.t] : defaults[key];
      if (typeof option === "function" && isCallable) {
        option = option(operator, token);
      }
    } else if (typeof option === "function" && isCallable) {
      option = option(operator, token.t, token);
    }
    return option;
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(key, operator, token) {
    let obj = this.o[key];
    if (typeof obj === "function" && operator != null) {
      obj = obj(operator, token.t, token);
    }
    return obj;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(token) {
    const ir = token.render(this);
    const renderFn = this.get("render", null, token) || this.defaultRender;
    return renderFn(ir, token.t, token);
  }
};
function noop(val) {
  return val;
}
function MultiToken(value, tokens) {
  this.t = "token";
  this.v = value;
  this.tk = tokens;
}
MultiToken.prototype = {
  isLink: false,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(scheme2) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(options) {
    const val = this.toString();
    const truncate = options.get("truncate", val, this);
    const formatted = options.get("format", val, this);
    return truncate && formatted.length > truncate ? formatted.substring(0, truncate) + "\u2026" : formatted;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(options) {
    return options.get("formatHref", this.toHref(options.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(protocol = defaults.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(protocol),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(options) {
    return {
      type: this.t,
      value: this.toFormattedString(options),
      isLink: this.isLink,
      href: this.toFormattedHref(options),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(options) {
    return options.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(options) {
    const token = this;
    const href = this.toHref(options.get("defaultProtocol"));
    const formattedHref = options.get("formatHref", href, this);
    const tagName = options.get("tagName", href, token);
    const content = this.toFormattedString(options);
    const attributes = {};
    const className = options.get("className", href, token);
    const target = options.get("target", href, token);
    const rel = options.get("rel", href, token);
    const attrs = options.getObj("attributes", href, token);
    const eventListeners = options.getObj("events", href, token);
    attributes.href = formattedHref;
    if (className) {
      attributes.class = className;
    }
    if (target) {
      attributes.target = target;
    }
    if (rel) {
      attributes.rel = rel;
    }
    if (attrs) {
      Object.assign(attributes, attrs);
    }
    return {
      tagName,
      attributes,
      content,
      eventListeners
    };
  }
};
function createTokenClass(type, props) {
  class Token extends MultiToken {
    constructor(value, tokens) {
      super(value, tokens);
      this.t = type;
    }
  }
  for (const p in props) {
    Token.prototype[p] = props[p];
  }
  Token.t = type;
  return Token;
}
var Email = createTokenClass("email", {
  isLink: true,
  toHref() {
    return "mailto:" + this.toString();
  }
});
var Text = createTokenClass("text");
var Nl = createTokenClass("nl");
var Url = createTokenClass("url", {
  isLink: true,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(scheme2 = defaults.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${scheme2}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const tokens = this.tk;
    return tokens.length >= 2 && tokens[0].t !== LOCALHOST && tokens[1].t === COLON;
  }
});
var makeState = (arg) => new State(arg);
function init$1({
  groups
}) {
  const qsAccepting = groups.domain.concat([AMPERSAND, ASTERISK, AT, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, NUM, PERCENT, PIPE, PLUS, POUND, SLASH, SYM, TILDE, UNDERSCORE]);
  const qsNonAccepting = [APOSTROPHE, COLON, COMMA, DOT, EXCLAMATION, PERCENT, QUERY, QUOTE, SEMI, OPENANGLEBRACKET, CLOSEANGLEBRACKET, OPENBRACE, CLOSEBRACE, CLOSEBRACKET, OPENBRACKET, OPENPAREN, CLOSEPAREN, FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN, LEFTCORNERBRACKET, RIGHTCORNERBRACKET, LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET, FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN];
  const localpartAccepting = [AMPERSAND, APOSTROPHE, ASTERISK, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, OPENBRACE, CLOSEBRACE, PERCENT, PIPE, PLUS, POUND, QUERY, SLASH, SYM, TILDE, UNDERSCORE];
  const Start = makeState();
  const Localpart = tt(Start, TILDE);
  ta(Localpart, localpartAccepting, Localpart);
  ta(Localpart, groups.domain, Localpart);
  const Domain = makeState(), Scheme = makeState(), SlashScheme = makeState();
  ta(Start, groups.domain, Domain);
  ta(Start, groups.scheme, Scheme);
  ta(Start, groups.slashscheme, SlashScheme);
  ta(Domain, localpartAccepting, Localpart);
  ta(Domain, groups.domain, Domain);
  const LocalpartAt = tt(Domain, AT);
  tt(Localpart, AT, LocalpartAt);
  tt(Scheme, AT, LocalpartAt);
  tt(SlashScheme, AT, LocalpartAt);
  const LocalpartDot = tt(Localpart, DOT);
  ta(LocalpartDot, localpartAccepting, Localpart);
  ta(LocalpartDot, groups.domain, Localpart);
  const EmailDomain = makeState();
  ta(LocalpartAt, groups.domain, EmailDomain);
  ta(EmailDomain, groups.domain, EmailDomain);
  const EmailDomainDot = tt(EmailDomain, DOT);
  ta(EmailDomainDot, groups.domain, EmailDomain);
  const Email$1 = makeState(Email);
  ta(EmailDomainDot, groups.tld, Email$1);
  ta(EmailDomainDot, groups.utld, Email$1);
  tt(LocalpartAt, LOCALHOST, Email$1);
  const EmailDomainHyphen = tt(EmailDomain, HYPHEN);
  tt(EmailDomainHyphen, HYPHEN, EmailDomainHyphen);
  ta(EmailDomainHyphen, groups.domain, EmailDomain);
  ta(Email$1, groups.domain, EmailDomain);
  tt(Email$1, DOT, EmailDomainDot);
  tt(Email$1, HYPHEN, EmailDomainHyphen);
  const DomainHyphen = tt(Domain, HYPHEN);
  const DomainDot = tt(Domain, DOT);
  tt(DomainHyphen, HYPHEN, DomainHyphen);
  ta(DomainHyphen, groups.domain, Domain);
  ta(DomainDot, localpartAccepting, Localpart);
  ta(DomainDot, groups.domain, Domain);
  const DomainDotTld = makeState(Url);
  ta(DomainDot, groups.tld, DomainDotTld);
  ta(DomainDot, groups.utld, DomainDotTld);
  ta(DomainDotTld, groups.domain, Domain);
  ta(DomainDotTld, localpartAccepting, Localpart);
  tt(DomainDotTld, DOT, DomainDot);
  tt(DomainDotTld, HYPHEN, DomainHyphen);
  tt(DomainDotTld, AT, LocalpartAt);
  const DomainDotTldColon = tt(DomainDotTld, COLON);
  const DomainDotTldColonPort = makeState(Url);
  ta(DomainDotTldColon, groups.numeric, DomainDotTldColonPort);
  const Url$1 = makeState(Url);
  const UrlNonaccept = makeState();
  ta(Url$1, qsAccepting, Url$1);
  ta(Url$1, qsNonAccepting, UrlNonaccept);
  ta(UrlNonaccept, qsAccepting, Url$1);
  ta(UrlNonaccept, qsNonAccepting, UrlNonaccept);
  tt(DomainDotTld, SLASH, Url$1);
  tt(DomainDotTldColonPort, SLASH, Url$1);
  const SchemeColon = tt(Scheme, COLON);
  const SlashSchemeColon = tt(SlashScheme, COLON);
  const SlashSchemeColonSlash = tt(SlashSchemeColon, SLASH);
  const UriPrefix = tt(SlashSchemeColonSlash, SLASH);
  ta(Scheme, groups.domain, Domain);
  tt(Scheme, DOT, DomainDot);
  tt(Scheme, HYPHEN, DomainHyphen);
  ta(SlashScheme, groups.domain, Domain);
  tt(SlashScheme, DOT, DomainDot);
  tt(SlashScheme, HYPHEN, DomainHyphen);
  ta(SchemeColon, groups.domain, Url$1);
  tt(SchemeColon, SLASH, Url$1);
  tt(SchemeColon, QUERY, Url$1);
  ta(UriPrefix, groups.domain, Url$1);
  ta(UriPrefix, qsAccepting, Url$1);
  tt(UriPrefix, SLASH, Url$1);
  const bracketPairs = [
    [OPENBRACE, CLOSEBRACE],
    // {}
    [OPENBRACKET, CLOSEBRACKET],
    // []
    [OPENPAREN, CLOSEPAREN],
    // ()
    [OPENANGLEBRACKET, CLOSEANGLEBRACKET],
    // <>
    [FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN],
    // （）
    [LEFTCORNERBRACKET, RIGHTCORNERBRACKET],
    // 「」
    [LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET],
    // 『』
    [FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN]
    // ＜＞
  ];
  for (let i = 0; i < bracketPairs.length; i++) {
    const [OPEN, CLOSE] = bracketPairs[i];
    const UrlOpen = tt(Url$1, OPEN);
    tt(UrlNonaccept, OPEN, UrlOpen);
    const UrlOpenQ = makeState(Url);
    ta(UrlOpen, qsAccepting, UrlOpenQ);
    const UrlOpenSyms = makeState();
    ta(UrlOpen, qsNonAccepting, UrlOpenSyms);
    tt(UrlOpen, CLOSE, Url$1);
    ta(UrlOpenQ, qsAccepting, UrlOpenQ);
    ta(UrlOpenQ, qsNonAccepting, UrlOpenSyms);
    ta(UrlOpenSyms, qsAccepting, UrlOpenQ);
    ta(UrlOpenSyms, qsNonAccepting, UrlOpenSyms);
    tt(UrlOpenQ, CLOSE, Url$1);
    tt(UrlOpenSyms, CLOSE, Url$1);
  }
  tt(Start, LOCALHOST, DomainDotTld);
  tt(Start, NL, Nl);
  return {
    start: Start,
    tokens: tk
  };
}
function run(start, input, tokens) {
  let len = tokens.length;
  let cursor = 0;
  let multis = [];
  let textTokens = [];
  while (cursor < len) {
    let state = start;
    let secondState = null;
    let nextState = null;
    let multiLength = 0;
    let latestAccepting = null;
    let sinceAccepts = -1;
    while (cursor < len && !(secondState = state.go(tokens[cursor].t))) {
      textTokens.push(tokens[cursor++]);
    }
    while (cursor < len && (nextState = secondState || state.go(tokens[cursor].t))) {
      secondState = null;
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts++;
      }
      cursor++;
      multiLength++;
    }
    if (sinceAccepts < 0) {
      cursor -= multiLength;
      if (cursor < len) {
        textTokens.push(tokens[cursor]);
        cursor++;
      }
    } else {
      if (textTokens.length > 0) {
        multis.push(initMultiToken(Text, input, textTokens));
        textTokens = [];
      }
      cursor -= sinceAccepts;
      multiLength -= sinceAccepts;
      const Multi = latestAccepting.t;
      const subtokens = tokens.slice(cursor - multiLength, cursor);
      multis.push(initMultiToken(Multi, input, subtokens));
    }
  }
  if (textTokens.length > 0) {
    multis.push(initMultiToken(Text, input, textTokens));
  }
  return multis;
}
function initMultiToken(Multi, input, tokens) {
  const startIdx = tokens[0].s;
  const endIdx = tokens[tokens.length - 1].e;
  const value = input.slice(startIdx, endIdx);
  return new Multi(value, tokens);
}
var warn = typeof console !== "undefined" && console && console.warn || (() => {
});
var warnAdvice = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.";
var INIT = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: false
};
function reset() {
  State.groups = {};
  INIT.scanner = null;
  INIT.parser = null;
  INIT.tokenQueue = [];
  INIT.pluginQueue = [];
  INIT.customSchemes = [];
  INIT.initialized = false;
  return INIT;
}
function registerCustomProtocol(scheme2, optionalSlashSlash = false) {
  if (INIT.initialized) {
    warn(`linkifyjs: already initialized - will not register custom scheme "${scheme2}" ${warnAdvice}`);
  }
  if (!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(scheme2)) {
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  }
  INIT.customSchemes.push([scheme2, optionalSlashSlash]);
}
function init() {
  INIT.scanner = init$2(INIT.customSchemes);
  for (let i = 0; i < INIT.tokenQueue.length; i++) {
    INIT.tokenQueue[i][1]({
      scanner: INIT.scanner
    });
  }
  INIT.parser = init$1(INIT.scanner.tokens);
  for (let i = 0; i < INIT.pluginQueue.length; i++) {
    INIT.pluginQueue[i][1]({
      scanner: INIT.scanner,
      parser: INIT.parser
    });
  }
  INIT.initialized = true;
  return INIT;
}
function tokenize(str) {
  if (!INIT.initialized) {
    init();
  }
  return run(INIT.parser.start, str, run$1(INIT.scanner.start, str));
}
tokenize.scan = run$1;
function find(str, type = null, opts = null) {
  if (type && typeof type === "object") {
    if (opts) {
      throw Error(`linkifyjs: Invalid link type ${type}; must be a string`);
    }
    opts = type;
    type = null;
  }
  const options = new Options(opts);
  const tokens = tokenize(str);
  const filtered = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.isLink && (!type || token.t === type) && options.check(token)) {
      filtered.push(token.toFormattedObject(options));
    }
  }
  return filtered;
}

// node_modules/@tiptap/extension-link/dist/index.js
var UNICODE_WHITESPACE_PATTERN = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]";
var UNICODE_WHITESPACE_REGEX = new RegExp(UNICODE_WHITESPACE_PATTERN);
var UNICODE_WHITESPACE_REGEX_END = new RegExp(`${UNICODE_WHITESPACE_PATTERN}$`);
var UNICODE_WHITESPACE_REGEX_GLOBAL = new RegExp(UNICODE_WHITESPACE_PATTERN, "g");
function isValidLinkStructure(tokens) {
  if (tokens.length === 1) {
    return tokens[0].isLink;
  }
  if (tokens.length === 3 && tokens[1].isLink) {
    return ["()", "[]"].includes(tokens[0].value + tokens[2].value);
  }
  return false;
}
function autolink(options) {
  return new Plugin({
    key: new PluginKey("autolink"),
    appendTransaction: (transactions, oldState, newState) => {
      const docChanges = transactions.some((transaction) => transaction.docChanged) && !oldState.doc.eq(newState.doc);
      const preventAutolink = transactions.some((transaction) => transaction.getMeta("preventAutolink"));
      if (!docChanges || preventAutolink) {
        return;
      }
      const {
        tr: tr2
      } = newState;
      const transform = combineTransactionSteps(oldState.doc, [...transactions]);
      const changes = getChangedRanges(transform);
      changes.forEach(({
        newRange
      }) => {
        const nodesInChangedRanges = findChildrenInRange(newState.doc, newRange, (node) => node.isTextblock);
        let textBlock;
        let textBeforeWhitespace;
        if (nodesInChangedRanges.length > 1) {
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, textBlock.pos + textBlock.node.nodeSize, void 0, " ");
        } else if (nodesInChangedRanges.length) {
          const endText = newState.doc.textBetween(newRange.from, newRange.to, " ", " ");
          if (!UNICODE_WHITESPACE_REGEX_END.test(endText)) {
            return;
          }
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, newRange.to, void 0, " ");
        }
        if (textBlock && textBeforeWhitespace) {
          const wordsBeforeWhitespace = textBeforeWhitespace.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);
          if (wordsBeforeWhitespace.length <= 0) {
            return false;
          }
          const lastWordBeforeSpace = wordsBeforeWhitespace[wordsBeforeWhitespace.length - 1];
          const lastWordAndBlockOffset = textBlock.pos + textBeforeWhitespace.lastIndexOf(lastWordBeforeSpace);
          if (!lastWordBeforeSpace) {
            return false;
          }
          const linksBeforeSpace = tokenize(lastWordBeforeSpace).map((t) => t.toObject(options.defaultProtocol));
          if (!isValidLinkStructure(linksBeforeSpace)) {
            return false;
          }
          linksBeforeSpace.filter((link) => link.isLink).map((link) => __spreadProps(__spreadValues({}, link), {
            from: lastWordAndBlockOffset + link.start + 1,
            to: lastWordAndBlockOffset + link.end + 1
          })).filter((link) => {
            if (!newState.schema.marks.code) {
              return true;
            }
            return !newState.doc.rangeHasMark(link.from, link.to, newState.schema.marks.code);
          }).filter((link) => options.validate(link.value)).filter((link) => options.shouldAutoLink(link.value)).forEach((link) => {
            if (getMarksBetween(link.from, link.to, newState.doc).some((item) => item.mark.type === options.type)) {
              return;
            }
            tr2.addMark(link.from, link.to, options.type.create({
              href: link.href
            }));
          });
        }
      });
      if (!tr2.steps.length) {
        return;
      }
      return tr2;
    }
  });
}
function clickHandler(options) {
  return new Plugin({
    key: new PluginKey("handleClickLink"),
    props: {
      handleClick: (view, pos, event) => {
        var _a, _b;
        if (event.button !== 0) {
          return false;
        }
        if (!view.editable) {
          return false;
        }
        let link = null;
        if (event.target instanceof HTMLAnchorElement) {
          link = event.target;
        } else {
          const target = event.target;
          if (!target) {
            return false;
          }
          const root = options.editor.view.dom;
          link = target.closest("a");
          if (link && !root.contains(link)) {
            link = null;
          }
        }
        if (!link) {
          return false;
        }
        let handled = false;
        if (options.enableClickSelection) {
          const commandResult = options.editor.commands.extendMarkRange(options.type.name);
          handled = commandResult;
        }
        if (options.openOnClick) {
          const attrs = getAttributes(view.state, options.type.name);
          const href = (_a = link.href) != null ? _a : attrs.href;
          const target = (_b = link.target) != null ? _b : attrs.target;
          if (href) {
            window.open(href, target);
            handled = true;
          }
        }
        return handled;
      }
    }
  });
}
function pasteHandler(options) {
  return new Plugin({
    key: new PluginKey("handlePasteLink"),
    props: {
      handlePaste: (view, _event, slice) => {
        const {
          shouldAutoLink
        } = options;
        const {
          state
        } = view;
        const {
          selection
        } = state;
        const {
          empty
        } = selection;
        if (empty) {
          return false;
        }
        let textContent = "";
        slice.content.forEach((node) => {
          textContent += node.textContent;
        });
        const link = find(textContent, {
          defaultProtocol: options.defaultProtocol
        }).find((item) => item.isLink && item.value === textContent);
        if (!textContent || !link || shouldAutoLink !== void 0 && !shouldAutoLink(link.value)) {
          return false;
        }
        return options.editor.commands.setMark(options.type, {
          href: link.href
        });
      }
    }
  });
}
function isAllowedUri(uri, protocols) {
  const allowedProtocols = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  if (protocols) {
    protocols.forEach((protocol) => {
      const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
      if (nextProtocol) {
        allowedProtocols.push(nextProtocol);
      }
    });
  }
  return !uri || uri.replace(UNICODE_WHITESPACE_REGEX_GLOBAL, "").match(new RegExp(
    // oxlint-disable-next-line no-useless-escape
    `^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
var Link = Mark.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    if (this.options.validate && !this.options.shouldAutoLink) {
      this.options.shouldAutoLink = this.options.validate;
      console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
    }
    this.options.protocols.forEach((protocol) => {
      if (typeof protocol === "string") {
        registerCustomProtocol(protocol);
        return;
      }
      registerCustomProtocol(protocol.scheme, protocol.optionalSlashes);
    });
  },
  onDestroy() {
    reset();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      enableClickSelection: false,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (url, ctx) => !!isAllowedUri(url, ctx.protocols),
      validate: (url) => !!url,
      shouldAutoLink: (url) => {
        const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(url);
        const hasMaybeProtocol = /^[a-z][a-z0-9+.-]*:/i.test(url);
        if (hasProtocol || hasMaybeProtocol && !url.includes("@")) {
          return true;
        }
        const urlWithoutUserinfo = url.includes("@") ? url.split("@").pop() : url;
        const hostname = urlWithoutUserinfo.split(/[/?#:]/)[0];
        if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
          return false;
        }
        if (!/\./.test(hostname)) {
          return false;
        }
        return true;
      }
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(element) {
          return element.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [{
      tag: "a[href]",
      getAttrs: (dom) => {
        const href = dom.getAttribute("href");
        if (!href || !this.options.isAllowedUri(href, {
          defaultValidate: (url) => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return null;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    if (!this.options.isAllowedUri(HTMLAttributes.href, {
      defaultValidate: (href) => !!isAllowedUri(href, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    })) {
      return ["a", mergeAttributes(this.options.HTMLAttributes, __spreadProps(__spreadValues({}, HTMLAttributes), {
        href: ""
      })), 0];
    }
    return ["a", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "link",
  parseMarkdown: (token, helpers) => {
    return helpers.applyMark("link", helpers.parseInline(token.tokens || []), {
      href: token.href,
      title: token.title || null
    });
  },
  renderMarkdown: (node, h) => {
    var _a, _b, _c, _d;
    const href = (_b = (_a = node.attrs) == null ? void 0 : _a.href) != null ? _b : "";
    const title = (_d = (_c = node.attrs) == null ? void 0 : _c.title) != null ? _d : "";
    const text = h.renderChildren(node);
    return title ? `[${text}](${href} "${title}")` : `[${text}](${href})`;
  },
  addCommands() {
    return {
      setLink: (attributes) => ({
        chain
      }) => {
        const {
          href
        } = attributes;
        if (!this.options.isAllowedUri(href, {
          defaultValidate: (url) => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
      },
      toggleLink: (attributes) => ({
        chain
      }) => {
        const {
          href
        } = attributes || {};
        if (href && !this.options.isAllowedUri(href, {
          defaultValidate: (url) => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().toggleMark(this.name, attributes, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      },
      unsetLink: () => ({
        chain
      }) => {
        return chain().unsetMark(this.name, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      }
    };
  },
  addPasteRules() {
    return [markPasteRule({
      find: (text) => {
        const foundLinks = [];
        if (text) {
          const {
            protocols,
            defaultProtocol
          } = this.options;
          const links = find(text).filter((item) => item.isLink && this.options.isAllowedUri(item.value, {
            defaultValidate: (href) => !!isAllowedUri(href, protocols),
            protocols,
            defaultProtocol
          }));
          if (links.length) {
            links.forEach((link) => {
              if (!this.options.shouldAutoLink(link.value)) {
                return;
              }
              foundLinks.push({
                text: link.value,
                data: {
                  href: link.href
                },
                index: link.start
              });
            });
          }
        }
        return foundLinks;
      },
      type: this.type,
      getAttributes: (match) => {
        var _a;
        return {
          href: (_a = match.data) == null ? void 0 : _a.href
        };
      }
    })];
  },
  addProseMirrorPlugins() {
    const plugins = [];
    const {
      protocols,
      defaultProtocol
    } = this.options;
    if (this.options.autolink) {
      plugins.push(autolink({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (url) => this.options.isAllowedUri(url, {
          defaultValidate: (href) => !!isAllowedUri(href, protocols),
          protocols,
          defaultProtocol
        }),
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    plugins.push(clickHandler({
      type: this.type,
      editor: this.editor,
      openOnClick: this.options.openOnClick === "whenNotEditable" ? true : this.options.openOnClick,
      enableClickSelection: this.options.enableClickSelection
    }));
    if (this.options.linkOnPaste) {
      plugins.push(pasteHandler({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    return plugins;
  }
});

export {
  isAllowedUri,
  Link
};
//# sourceMappingURL=chunk-3N57KBZI.js.map
