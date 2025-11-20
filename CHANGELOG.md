### [4.45.0](https://github.com/taiga-family/editor/compare/v4.44.0...v4.45.0) (2025-11-20)

### 🐞 Bug Fixes

- safely bypass trust after custom HTML sanitization (#1964)
  [(629209d)](https://github.com/taiga-family/editor/commit/629209d498e94c4ab0c5c7c03bbba8580a30f041)
- update tiptap to ^2.27.1 (#1955)
  [(77ebb43)](https://github.com/taiga-family/editor/commit/77ebb43c520593b1276c9c49814e5e6400853e14)

### [4.44.0](https://github.com/taiga-family/editor/compare/v4.43.0...v4.44.0) (2025-10-03)

### 🚀 Features

- support separate palettes for text and background color (#1942)
  [(604cd76)](https://github.com/taiga-family/editor/commit/604cd7620d398892e31d55166900396b894cd3a2)

### [4.43.0](https://github.com/taiga-family/editor/compare/v4.42.0...v4.43.0) (2025-09-30)

### 🚀 Features

- add compatibility with Taiga 5 beta (#1940)
  [(13328ae)](https://github.com/taiga-family/editor/commit/13328ae145aa3f01815512739bf040cf2cab6f08)

### [4.42.0](https://github.com/taiga-family/editor/compare/v4.41.0...v4.42.0) (2025-09-30)

### 🚀 Features

- add `provideTuiEditor` (#1933)
  [(90e42cf)](https://github.com/taiga-family/editor/commit/90e42cf2678a8911d99e8e9a399290bdcd42954f)

### 🐞 Bug Fixes

- update tiptap to ^2.26.2 (#1931)
  [(4f33771)](https://github.com/taiga-family/editor/commit/4f3377180296e79e85a7aea4cc15ec1b09a17046)

### [4.41.0](https://github.com/taiga-family/editor/compare/v4.40.0...v4.41.0) (2025-09-22)

### 🐞 Bug Fixes

- align content to top in editor that have no label (#1927)
  [(74d044e)](https://github.com/taiga-family/editor/commit/74d044eab7afc6384863c9ae4da00a58b5822de8)

### [4.40.0](https://github.com/taiga-family/editor/compare/v4.39.0...v4.40.0) (2025-08-29)

### 🚀 Features

- use active state for each button in toolbar (#1887)
  [(4523146)](https://github.com/taiga-family/editor/commit/4523146b358c27ccdd4d694bb1487c9629b686bc)
- use synchronous signal updates to ensure editor state consistency (#1903)
  [(453ca8a)](https://github.com/taiga-family/editor/commit/453ca8ac40d9b70d3181c172835a514bd883fd33)

### [4.39.0](https://github.com/taiga-family/editor/compare/v4.38.0...v4.39.0) (2025-08-28)

### 🚀 Features

- allow selecting images with the keyboard (#1893)
  [(b0a4e4b)](https://github.com/taiga-family/editor/commit/b0a4e4b75c4264037fb1fcc6750d0ba3874a9b3d)

### 🐞 Bug Fixes

- an image can only be selected while the editor is focused (#1894)
  [(918a783)](https://github.com/taiga-family/editor/commit/918a78380769e7cbc5c9fd928bcead9292da03ae)

### [4.38.0](https://github.com/taiga-family/editor/compare/v4.37.0...v4.38.0) (2025-08-21)

### 🐞 Bug Fixes

- wrong bivariant parameters (#1875)
  [(d4c1abb)](https://github.com/taiga-family/editor/commit/d4c1abb29ccb3ce923b080ed443d2fc75c1e3ac6)

### [4.37.0](https://github.com/taiga-family/editor/compare/v4.36.0...v4.37.0) (2025-08-12)

### 🚀 Features

- drop redundant `defaultOpen` property (#1870)
  [(ec6256a)](https://github.com/taiga-family/editor/commit/ec6256afac059fccaf7ef2a6ee7406b8e4f72619)

### [4.36.0](https://github.com/taiga-family/editor/compare/v4.35.0...v4.36.0) (2025-08-12)

### 🚀 Features

- introduce `defaultOpen` and `inheritOpen` for details component (#1869)
  [(4b15733)](https://github.com/taiga-family/editor/commit/4b1573388bb02868cd11706b1b52f49cc849b6a6)

### [4.35.0](https://github.com/taiga-family/editor/compare/v4.34.0...v4.35.0) (2025-08-11)

### 🚀 Features

- **editor**: `TuiDetailsExtension` add `inheritOpen` flag (#1867)
  [(b4f29d7)](https://github.com/taiga-family/editor/commit/b4f29d70d7dc608f319bf87458d4c48c8441afd6)
- always align bottom of dropdown when opening it (#1866)
  [(543c92c)](https://github.com/taiga-family/editor/commit/543c92cb33a600ba0b196c9a0241b9dab159a2e7)

### [4.34.0](https://github.com/taiga-family/editor/compare/v4.33.0...v4.34.0) (2025-08-01)

### 🐞 Bug Fixes

- mark control as dirty after first real user changes (#1856)
  [(0dd3d84)](https://github.com/taiga-family/editor/commit/0dd3d84911ceba5e024ce0e67185119c12590df6)

### [4.33.0](https://github.com/taiga-family/editor/compare/v4.32.0...v4.33.0) (2025-07-30)

### 🚀 Features

- improve UI/UX for image options (#1828)
  [(b2465d0)](https://github.com/taiga-family/editor/commit/b2465d02d664beffff09fee1088ebe9c20aece5e)
- deprecate state changes event (#1837)
  [(0c16e81)](https://github.com/taiga-family/editor/commit/0c16e81f1b747e3029ae7a6226d3391b02caa6f4)
- add ngDevMode for other tokens (#1817)
  [(fbf4aae)](https://github.com/taiga-family/editor/commit/fbf4aae88f75ed74b7a674c8f05def42019a6a11)
- increase performance (#1815)
  [(30a5aa6)](https://github.com/taiga-family/editor/commit/30a5aa6b5879327ed39e8c081b87599d1b4a7b3c)
- drop unknown files (#1807)
  [(d020a2d)](https://github.com/taiga-family/editor/commit/d020a2d03128aad2168268d9460b13415b0bb1cb)
- change image alignment tool icon (#1804)
  [(84657e6)](https://github.com/taiga-family/editor/commit/84657e651179fd4e84b1438e1c0c66923870fd17)
- support custom dropdowns (#1794)
  [(6900ad7)](https://github.com/taiga-family/editor/commit/6900ad7750a0ef956542cfa207b9415ab4e016a1)
- drop useless html markup (#1799)
  [(1f9a387)](https://github.com/taiga-family/editor/commit/1f9a387b92c6700907f20220f1724b96c464f1e2)

### 🐞 Bug Fixes

- wrong details width (#1846)
  [(6360ab2)](https://github.com/taiga-family/editor/commit/6360ab294f071ab2732a9245ac0b1dc5703142ad)
- pin tiptap dependencies before upgrade to 3.0 (#1842)
  [(a5faabe)](https://github.com/taiga-family/editor/commit/a5faabed9a4049fe9ebda97f695236674673e8d6)
- update tiptap to &gt;=2.26.1 (#1826)
  [(b0d8a2c)](https://github.com/taiga-family/editor/commit/b0d8a2c87ac172f7546b4ade99284e361ba67faa)
- update tiptap to &gt;=2.26.0 (#1821)
  [(fc14cf2)](https://github.com/taiga-family/editor/commit/fc14cf216245bc5b1f01610e64f1b1c764419b18)
- update tiptap to &gt;=2.25.1 (#1816)
  [(1dc2999)](https://github.com/taiga-family/editor/commit/1dc29995efdc300811bf37c3f4b167a2d7883850)
- support images as links (#1809)
  [(cdfa084)](https://github.com/taiga-family/editor/commit/cdfa0848857d92b0d8cfcbaa0e6afd38bcdbe1ff)
- cannot read properties of undefined when reading nodeSize (#1803)
  [(2b25d0a)](https://github.com/taiga-family/editor/commit/2b25d0a3c36e9e5b49f146f3a573de7ea929d00c)
- make sure the dropdown opens properly every time you type (#1801)
  [(86104dc)](https://github.com/taiga-family/editor/commit/86104dc6fb5dce62e0fa0fc8ab31bb0b2f2f8c43)
- update tiptap to &gt;=2.25.0 (#1793)
  [(bfc38c9)](https://github.com/taiga-family/editor/commit/bfc38c93b0bc86231da1b3e84fae7925def386b7)

### [4.32.0](https://github.com/taiga-family/editor/compare/v4.31.0...v4.32.0) (2025-07-04)

### 🚀 Features

- support table of contents extension (#1781)
  [(d7282ca)](https://github.com/taiga-family/editor/commit/d7282cad65b6745ca2e039805e1c1c3077cd2a8b)

### 🐞 Bug Fixes

- use semantic attribute open on details html tag (#1791)
  [(548c6d9)](https://github.com/taiga-family/editor/commit/548c6d9518861ae139e8a3cda1340f9cb7061692)
- update tiptap to &gt;=2.24.2 (#1790)
  [(2e7fb39)](https://github.com/taiga-family/editor/commit/2e7fb39de6d6789d703377b7b7e34ba357d75290)

### [4.31.0](https://github.com/taiga-family/editor/compare/v4.30.0...v4.31.0) (2025-07-03)

### 🐞 Bug Fixes

- extending component with hostDirectives causes them to be matched twice (#1786)
  [(e18a1f9)](https://github.com/taiga-family/editor/commit/e18a1f9979d12a85ac6201dd85b716052d561547)
- update tiptap to &gt;=2.24.1 (#1788)
  [(ca226c2)](https://github.com/taiga-family/editor/commit/ca226c2e6ee039bdc38e1df7b7b36768ecea45b2)
- update tiptap to &gt;=2.24.1 (#1787)
  [(2f36881)](https://github.com/taiga-family/editor/commit/2f368816e5d366c4f6d96a3c18241f52196a944e)
- update tiptap to &gt;=2.24.0 (#1783)
  [(5113cb1)](https://github.com/taiga-family/editor/commit/5113cb1458572826493f984f36f64e81c843d2d9)

### [4.30.0](https://github.com/taiga-family/editor/compare/v4.29.0...v4.30.0) (2025-07-02)

### 🚀 Features

- use host directives instead of components for toolbar tools (#1772)
  [(0af848f)](https://github.com/taiga-family/editor/commit/0af848fa6f7fb0a566d710c33ca7ff7d3ba66143)
- decomposition some components by host directives (#1771)
  [(d17edaa)](https://github.com/taiga-family/editor/commit/d17edaac81869811e91f37f75d8d966e567b18f9)

### 🐞 Bug Fixes

- update tiptap to &gt;=2.23.1 (#1776)
  [(70a5682)](https://github.com/taiga-family/editor/commit/70a5682be8881e35c7f6a0e38567bb9906f5a369)

### [4.29.0](https://github.com/taiga-family/editor/compare/v4.28.0...v4.29.0) (2025-06-27)

### 🚀 Features

- reuse details extension (#1767)
  [(17c5629)](https://github.com/taiga-family/editor/commit/17c5629ae76f4f017c3cd14054ba892c7fbc7dca)
- add character counter example (#1770)
  [(b1b3ece)](https://github.com/taiga-family/editor/commit/b1b3ece7775bd8728cce738d3c9168cc6834bd43)
- enable last column resizable (#1754)
  [(a38f654)](https://github.com/taiga-family/editor/commit/a38f654bcee955c9460ba428b410ed03b5b69695)

### 🐞 Bug Fixes

- support disabled/readonly states in custom nodes (#1765)
  [(ce2b46b)](https://github.com/taiga-family/editor/commit/ce2b46b6ca7204d324b48cc228b3509737bcb8da)
- support align toolbar by bottom (#1768)
  [(032f8d3)](https://github.com/taiga-family/editor/commit/032f8d3bcafd62ef87e72f8e2ba28a32c46816b0)
- update tiptap to &gt;=2.23.0 (#1769)
  [(7c52020)](https://github.com/taiga-family/editor/commit/7c52020e76170afa8439428fbe54bf80b96eecfe)
- support nested details (#1766)
  [(8d8072d)](https://github.com/taiga-family/editor/commit/8d8072da52c9a6afdb529df5a0105f81e06fa41c)
- prevent double accordion insertion after a copy/paste event (#1758)
  [(7bb7adb)](https://github.com/taiga-family/editor/commit/7bb7adb0588357aef8477c0f32a4504f09de7586)
- second click on an anchor link should scroll to the target (#1764)
  [(1e4ec02)](https://github.com/taiga-family/editor/commit/1e4ec028bb2a50a6fe672e86a7c15e0b84c38a13)
- update tiptap to &gt;=2.22.3 (#1756)
  [(b3e0c42)](https://github.com/taiga-family/editor/commit/b3e0c42ff594f045e74a4c7631118c3d4aa15740)
- colored horizontal bar place (#1753)
  [(073ba6b)](https://github.com/taiga-family/editor/commit/073ba6b455b1217550dc62ba4940f3b6e36c7d79)

### [4.28.0](https://github.com/taiga-family/editor/compare/v4.27.0...v4.28.0) (2025-05-22)

### 🐞 Bug Fixes

- added fixes for min/max width options (#1746) (#1747)
  [(57c5984)](https://github.com/taiga-family/editor/commit/57c5984124e9bd2074d2424fc59cbb05860c40dd)
- update tiptap to &gt;=2.12.0 (#1734)
  [(4a9ec21)](https://github.com/taiga-family/editor/commit/4a9ec21d3c67025569149de82029c1cda4caf843)

### [4.27.0](https://github.com/taiga-family/editor/compare/v4.26.0...v4.27.0) (2025-04-30)

### 🐞 Bug Fixes

- wrong behaviour in Safari for tui-edit-link (#1729)
  [(87974b7)](https://github.com/taiga-family/editor/commit/87974b79139fd677db2d56e967cdcc67f69b87b8)
- wrong placeholder position (#1730)
  [(801fe2a)](https://github.com/taiga-family/editor/commit/801fe2a68bf69525432ce33004355ff84574aa0e)
- update tiptap to &gt;=2.11.9 (#1728)
  [(0ef1382)](https://github.com/taiga-family/editor/commit/0ef1382dfa30c78b4908f7d110d3a26d860477ab)

### [4.26.0](https://github.com/taiga-family/editor/compare/v4.25.0...v4.26.0) (2025-04-29)

### 🚀 Features

- support history management by automatically from form control (#1726)
  [(664722d)](https://github.com/taiga-family/editor/commit/664722d4bccf2979e090d30475c692a2387ef029)
- add separate toolbar tools (#1724)
  [(d4a145f)](https://github.com/taiga-family/editor/commit/d4a145feaf81ad92329564763fea47eb86266dfa)

### 🐞 Bug Fixes

- wrong css imports (#1725)
  [(0d58f78)](https://github.com/taiga-family/editor/commit/0d58f78527d3961f0e696ee95cfe2fe6dc750330)

### [4.25.0](https://github.com/taiga-family/editor/compare/v4.24.0...v4.25.0) (2025-04-28)

### 🚀 Features

- support provide custom/external toolbar (#1721)
  [(0311413)](https://github.com/taiga-family/editor/commit/031141334f41cf7362d61907ceac2a296edab78c)

### [4.24.0](https://github.com/taiga-family/editor/compare/v4.23.0...v4.24.0) (2025-04-28)

### 🚀 Features

- move less styles to separate css file for toolbar (#1713)
  [(67bbb61)](https://github.com/taiga-family/editor/commit/67bbb61c9529a843d584bf3add874aa470e4c51c)

### [4.23.0](https://github.com/taiga-family/editor/compare/v4.22.0...v4.23.0) (2025-04-17)

### 🐞 Bug Fixes

- clear contenteditable focus after reset in Safari (#1702)
  [(d4393c0)](https://github.com/taiga-family/editor/commit/d4393c0f95270f97c6998c9c588bbfbb1c2ff707)
- change default position for hints (#1698)
  [(e600ed6)](https://github.com/taiga-family/editor/commit/e600ed6795aef9100ca4290f4de85f21e536335a)
- update tiptap to &gt;=2.11.7 (#1696)
  [(a52ccea)](https://github.com/taiga-family/editor/commit/a52ccea85c0289ccac8203e216cc855f34b4416a)

### [4.22.0](https://github.com/taiga-family/editor/compare/v4.21.0...v4.22.0) (2025-03-21)

### 🚀 Features

- update renovate.json (#1668)
  [(9996ab6)](https://github.com/taiga-family/editor/commit/9996ab62f997d74396f5ca3cca853ab8b5e57746)
- improve floating toolbar (#1641)
  [(2f2f309)](https://github.com/taiga-family/editor/commit/2f2f309e57219a1ad492e4728a9ee3da7c09576a)

### 🐞 Bug Fixes

- do not blur any focused inputs (#1683)
  [(ed8ed3a)](https://github.com/taiga-family/editor/commit/ed8ed3af9081a4a804b75ff4300674696134408a)
- cannot read properties of undefined `reading nodeSize` (#1661)
  [(3a3a67a)](https://github.com/taiga-family/editor/commit/3a3a67a5fd62d1ff0fdaeae83c20f290b7bb344c)
- listen resize events after any DOM changes (#1671)
  [(a1a7b97)](https://github.com/taiga-family/editor/commit/a1a7b970c69572cfb0ffafba12ed6216124aa473)
- applying a mismatched transaction in group extension (#1673)
  [(6cbc72b)](https://github.com/taiga-family/editor/commit/6cbc72bc9b4ce3a4a71b0f5d9501e3140d6b9e29)
- reuse value state after first transformation (#1666)
  [(c59be62)](https://github.com/taiga-family/editor/commit/c59be62329f0fba895f5bc569636acf3f9a6ef21)
- focus removed from editor when clicking disabled buttons in toolbar (#1659)
  [(7747f36)](https://github.com/taiga-family/editor/commit/7747f366da56eb63f6e36df0d6e3a7be47b3bde1)
- update tiptap to &gt;=2.11.5 (#1656)
  [(897128f)](https://github.com/taiga-family/editor/commit/897128f77ebfd0371ec0462c62d8461aef2ae1d7)

### [4.21.0](https://github.com/taiga-family/editor/compare/v4.20.0...v4.21.0) (2024-12-23)

### 🐞 Bug Fixes

- performance tiptap link issue (#1628)
  [(b310930)](https://github.com/taiga-family/editor/commit/b3109305c05972f054b1eefa7f13fffd1bff760f)

### [4.20.0](https://github.com/taiga-family/editor/compare/v4.19.0...v4.20.0) (2024-12-17)

### 🐞 Bug Fixes

- correctly apply file link attributes (#1626)
  [(d68fa92)](https://github.com/taiga-family/editor/commit/d68fa920e21b1a8e7ea92b61f6dfcbc28e0fc6ea)

### [4.19.0](https://github.com/taiga-family/editor/compare/v4.18.0...v4.19.0) (2024-11-27)

### 🐞 Bug Fixes

- clear html socket view if empty content is passed (#1612)
  [(8d171f9)](https://github.com/taiga-family/editor/commit/8d171f91afee0703cf76daad22676f4a42c84158)
- regression for anchor links (#1610)
  [(e724d90)](https://github.com/taiga-family/editor/commit/e724d9018e91cd69b90419004cb7e79605ea74ec)
- update tiptap to &gt;=2.10.3 (#1611)
  [(6e433db)](https://github.com/taiga-family/editor/commit/6e433db40d4b25469df816e940476b09fcf4fac9)
- patch after rendered contenteditable element (#1602)
  [(76997da)](https://github.com/taiga-family/editor/commit/76997dac721f719b91557f2fed8fae0c84d757c3)

### [4.18.0](https://github.com/taiga-family/editor/compare/v4.17.0...v4.18.0) (2024-11-20)

### 🚀 Features

- add `parseOptions` (#1593)
  [(0011d1a)](https://github.com/taiga-family/editor/commit/0011d1a07d08296117c12afe4e1e0569ebb0dd24)

### [4.17.0](https://github.com/taiga-family/editor/compare/v4.16.0...v4.17.0) (2024-11-19)

### 🐞 Bug Fixes

- support nested urls inside query params (#1581)
  [(e071abb)](https://github.com/taiga-family/editor/commit/e071abb8c7dfca6c2300532d394f8f6768d8f299)
- do not save empty link (#1580)
  [(3477f64)](https://github.com/taiga-family/editor/commit/3477f64f271b588190b7938f6c694f0b948e6792)

### [4.16.0](https://github.com/taiga-family/editor/compare/v4.15.0...v4.16.0) (2024-11-18)

### 🚀 Features

- drop implicit depend on baseHref behaviour (#1564)
  [(e042393)](https://github.com/taiga-family/editor/commit/e04239360b517c032814405db91fa7ef494e980b)
- drop editor loaded async pipe (#1560)
  [(a33e71a)](https://github.com/taiga-family/editor/commit/a33e71ac7fcddd3c294f4bc73e93d5a046f2dbd8)

### 🐞 Bug Fixes

- the value in the component is incorrectly updated when it is passed as an empty string using formControl (#1558)
  [(3493434)](https://github.com/taiga-family/editor/commit/349343478334d43784163b6ff311b13772925342)
- don't focus blank color, because it's default (#1563)
  [(48e4671)](https://github.com/taiga-family/editor/commit/48e46716593b5a40c7444f69dee6e532a5df3759)

### [4.15.0](https://github.com/taiga-family/editor/compare/v4.14.0...v4.15.0) (2024-10-04)

### 🐞 Bug Fixes

- default export (#1505)
  [(8c7efd6)](https://github.com/taiga-family/editor/commit/8c7efd68137c731457d4169dd091f6a7d3d0beea)

### [4.14.0](https://github.com/taiga-family/editor/compare/v4.13.0...v4.14.0) (2024-10-02)

### 🚀 Features

- ignore announce when release was skip
  [(edf18d1)](https://github.com/taiga-family/editor/commit/edf18d1693eb27e803386f4ca5615557693e8e71)
- keyboard shortcut for adding links (#1497)
  [(681b1ec)](https://github.com/taiga-family/editor/commit/681b1ec1859cd1f9658905e20e1a38895208f23d)

### [4.13.0](https://github.com/taiga-family/editor/compare/v4.12.0...v4.13.0) (2024-10-02)

### 🚀 Features

- replace `exampleText` config with `placeholder` (#1494)
  [(525c16f)](https://github.com/taiga-family/editor/commit/525c16f29884b9574ded0f880a8a9a63f7557792)

### 🐞 Bug Fixes

- fix inserting hard break with Shift+Enter shortcut after paragraph (#1496)
  [(08879d2)](https://github.com/taiga-family/editor/commit/08879d26a53e4c9548248ac4981505d9f9ad5d36)
- fix link editor's button tooltip text (#1495)
  [(d4afbce)](https://github.com/taiga-family/editor/commit/d4afbce70ae385d3942ffbe1551fdff93faf3a38)
- make `TuiTabExtension` independent of import order (#1483)
  [(b21eeb6)](https://github.com/taiga-family/editor/commit/b21eeb60aaba439498ebc056b89ec4387f57f0cc)
- fix link editor's input auto-focus (#1482)
  [(0c0ce47)](https://github.com/taiga-family/editor/commit/0c0ce47a2362b7f5add513d999035c983a2f8cbe)
- **deps**: update tiptap to &gt;=2.8.0 (#1478)
  [(ca5b160)](https://github.com/taiga-family/editor/commit/ca5b160bdfdfb185bbddd842bb22787e0cd4b737)

### [4.12.0](https://github.com/taiga-family/editor/compare/v4.11.0...v4.12.0) (2024-09-27)

### 🐞 Bug Fixes

- image source after drag and drop (#1470)
  [(5b2f9e2)](https://github.com/taiga-family/editor/commit/5b2f9e2aec0ac470c704d8539d258133e07e1a49)

### [4.11.0](https://github.com/taiga-family/editor/compare/v4.10.0...v4.11.0) (2024-09-26)

### 🐞 Bug Fixes

- markdown extensions should be flat (#1461)
  [(60a60b1)](https://github.com/taiga-family/editor/commit/60a60b1535ee694f226796b8c18e66ce7fed36d2)
- **deps**: update tiptap to &gt;=2.7.3 (#1454)
  [(dfc2867)](https://github.com/taiga-family/editor/commit/dfc28673301b16a27d3869c0d446fdedd171ae04)

### [4.10.0](https://github.com/taiga-family/editor/compare/v4.9.0...v4.10.0) (2024-09-25)

### 🚀 Features

- drop maskito peer dependencies (#1451)
  [(4c2e827)](https://github.com/taiga-family/editor/commit/4c2e827d367e2b85d4dbb649f210906312874a62)
- entry points (#1447)
  [(0804056)](https://github.com/taiga-family/editor/commit/0804056b5fea8acd08557ea99a54909163513b76)

### 🐞 Bug Fixes

- autofocus (#1397) [(398026f)](https://github.com/taiga-family/editor/commit/398026f3111345559a74e4d8c7ea385289c4c26a)
- editor should properly adapt to flex container (#1431)
  [(796a1a4)](https://github.com/taiga-family/editor/commit/796a1a4a32e6a3705942f116447bf27736abbba2)
- **deps**: update maskito to &gt;=3.0.2 (#1419)
  [(3473358)](https://github.com/taiga-family/editor/commit/3473358c7883a577a8433d74612948eb16fef273)

### [4.9.0](https://github.com/taiga-family/editor/compare/v4.8.0...v4.9.0) (2024-09-19)

### 🐞 Bug Fixes

- add proper `Appearance` support (#1414)
  [(9fd608c)](https://github.com/taiga-family/editor/commit/9fd608c03db7e583f992157ad8815c4760add0ed)

### [4.8.0](https://github.com/taiga-family/editor/compare/v4.7.0...v4.8.0) (2024-09-19)

### 🚀 Features

- support tiptap 2.7 [(4e21d63)](https://github.com/taiga-family/editor/commit/4e21d63f85ebd40abe5b964997448ae6dd6d0626)

### 🐞 Bug Fixes

- **deps**: update tiptap to &gt;=2.7.2 (#1410)
  [(6dd64a3)](https://github.com/taiga-family/editor/commit/6dd64a307faa1c34ec58bfc681b39b50c3ac61ef)

### [4.7.0](https://github.com/taiga-family/editor/compare/v4.6.0...v4.7.0) (2024-09-17)

### 🐞 Bug Fixes

- pin patch versions (#1396)
  [(d05579b)](https://github.com/taiga-family/editor/commit/d05579b8cd3aa79f09463a71e7803f9a3ec65d5b)

### [4.6.0](https://github.com/taiga-family/editor/compare/v4.5.0...v4.6.0) (2024-09-16)

### 🚀 Features

- add editor-extension dep
  [(cc5bf9c)](https://github.com/taiga-family/editor/commit/cc5bf9c59ae2210b30f73abad3dc178ab75bf575)

### [4.5.0](https://github.com/taiga-family/editor/compare/v4.4.0...v4.5.0) (2024-09-16)

### 🚀 Features

- add loading lazy for image (#1391)
  [(bc59d44)](https://github.com/taiga-family/editor/commit/bc59d447b562d09fdfe6bb95e3d461b9210129c9)
- add new options (#1390)
  [(6deb3a7)](https://github.com/taiga-family/editor/commit/6deb3a7a2d8337b27f5fdf787c0db7f735a544df)
- update "fontStylePreview" icon. (#1350)
  [(49c9af9)](https://github.com/taiga-family/editor/commit/49c9af9e923a2653f973c1a24fd439de747f42c4)
- use appearance on host (#1340)
  [(74e1b05)](https://github.com/taiga-family/editor/commit/74e1b05647dc2eed8154e7f52b63ea1dfec91200)
- use hostDirectives (#1337)
  [(d7322cd)](https://github.com/taiga-family/editor/commit/d7322cd5f9892f499d2a62f71759ae3d536f5e10)
- drop redundant appearance (#1336)
  [(d02f2db)](https://github.com/taiga-family/editor/commit/d02f2db430af0ebcc9713672dac92f907a9b78b1)

### 🐞 Bug Fixes

- correct render editor-socket (#1389)
  [(f0c86b8)](https://github.com/taiga-family/editor/commit/f0c86b82cfb8c2ee86c4e7eff9c145b94784238b)

### [4.4.0](https://github.com/taiga-family/editor/compare/v4.3.0...v4.4.0) (2024-09-05)

### 🚀 Features

- use tiptap/pm/model
  [(2762718)](https://github.com/taiga-family/editor/commit/276271868c3f02175c8b4095e0be273449d1215f)

### [4.3.0](https://github.com/taiga-family/editor/compare/v4.2.0...v4.3.0) (2024-09-04)

### 🐞 Bug Fixes

- add clearfix (#1322)
  [(f9bb76d)](https://github.com/taiga-family/editor/commit/f9bb76d1b1afdd22a8220e4add3feb048404a2b6)

### [4.2.0](https://github.com/taiga-family/editor/compare/v4.1.0...v4.2.0) (2024-09-04)

### 🐞 Bug Fixes

- drop redundant dependency (#1320)
  [(4989115)](https://github.com/taiga-family/editor/commit/49891155d3bfa417583ff64b7d029f8d419d9729)

### [4.1.0](https://github.com/taiga-family/editor/compare/v4.0.0...v4.1.0) (2024-09-02)

### 🚀 Features

- drop submodule and revert accordion (#1315)
  [(0edc86b)](https://github.com/taiga-family/editor/commit/0edc86b57e502e0d50d3c538cb4dbb97af356510)

## [4.0.0](https://github.com/taiga-family/editor/compare/v2.8.0...v4.0.0) (2024-08-30)

### 🚀 Features

- flat taiga-ui version
  [(0ab6b58)](https://github.com/taiga-family/editor/commit/0ab6b582816637d5d32f5b4ce3dbc6f0d6547c29)

### [2.8.0](https://github.com/taiga-family/editor/compare/v2.7.0...v2.8.0) (2024-08-26)

### 🐞 Bug Fixes

- image option button submits the form
  [(e928720)](https://github.com/taiga-family/editor/commit/e928720f6e90600f596a2df67cf8cebd5aea4610)

### [2.7.0](https://github.com/taiga-family/editor/compare/v2.6.0...v2.7.0) (2024-08-19)

### 🐞 Bug Fixes

- click on label doesn't allow to type text
  [(7a377c7)](https://github.com/taiga-family/editor/commit/7a377c70c1c8974e23d2577e9eecfb39227b6041)

### [2.6.0](https://github.com/taiga-family/editor/compare/v2.5.0...v2.6.0) (2024-08-15)

### 🐞 Bug Fixes

- problem outline border
  [(685d122)](https://github.com/taiga-family/editor/commit/685d1222fd8218aa22c13d1c0b4a3c6d92e150b2)
- table breaks [(3a40c84)](https://github.com/taiga-family/editor/commit/3a40c84248755672a39d7285427cd9b99d65ab29)

### [2.5.0](https://github.com/taiga-family/editor/compare/v2.4.0...v2.5.0) (2024-08-14)

### 🐞 Bug Fixes

- missing peer dependencies
  [(94409f5)](https://github.com/taiga-family/editor/commit/94409f5593dbff1f8a84f49413b7119bc36a3cc6)

### [2.4.0](https://github.com/taiga-family/editor/compare/v2.3.0...v2.4.0) (2024-08-11)

### 🐞 Bug Fixes

- incorrect path to type
  [(0b49576)](https://github.com/taiga-family/editor/commit/0b495763df031a54eb7a0e8bcdd8f5c050499f5b)

### [2.3.0](https://github.com/taiga-family/editor/compare/v2.2.1...v2.3.0) (2024-08-09)

### 🚀 Features

- persist detail open state between editor and preview
  [(0e61393)](https://github.com/taiga-family/editor/commit/0e613932027b3516376811ac7a8e96f61d209388)

### 🐞 Bug Fixes

- accordion breaks into two
  [(4ea62c5)](https://github.com/taiga-family/editor/commit/4ea62c518e6bb6f7e59773ecfae2d14e0cd8f5fa)
- correct delete details
  [(524e1b4)](https://github.com/taiga-family/editor/commit/524e1b49343d7dacaa6c091e72aa9aef388ac3c0)
- focus removed from editor when clicking arrow button in accordion
  [(c640297)](https://github.com/taiga-family/editor/commit/c640297e57c136df72821991a079a098644a742b)
- broken accordion added to checkbox list
  [(06b19e9)](https://github.com/taiga-family/editor/commit/06b19e98e0e3b77caabf89366187638f5bd419b7)
- no word wrap in the accordion title
  [(0eecb88)](https://github.com/taiga-family/editor/commit/0eecb8854872fa6248f5958da182fd6ca37685c8)

### [2.2.1](https://github.com/taiga-family/editor/compare/v2.2.0...v2.2.1) (2024-08-09)

### [2.2.0](https://github.com/taiga-family/editor/compare/v2.1.1...v2.2.0) (2024-08-08)

### [2.1.1](https://github.com/taiga-family/editor/compare/v2.1.0...v2.1.1) (2024-08-08)

### [2.1.0](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.24...v2.1.0) (2024-08-08)

### [2.0.21-alpha.24](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.23...v2.0.21-alpha.24) (2024-08-08)

### 🐞 Bug Fixes

- details extension should be correct destroy
  [(149c9c5)](https://github.com/taiga-family/editor/commit/149c9c515aace2495a88a203822c0f11e03fbbe9)

### [2.0.21-alpha.23](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.22...v2.0.21-alpha.23) (2024-08-07)

### 🚀 Features

- support shared toolbar
  [(1b06192)](https://github.com/taiga-family/editor/commit/1b0619209ad36a7437757624f8eda855268e9c53)
- show example text always
  [(a4c0ff1)](https://github.com/taiga-family/editor/commit/a4c0ff16bdb65982e58fe344bfb0469dc4275088)
- support auto min-height
  [(900e4f3)](https://github.com/taiga-family/editor/commit/900e4f3ab9595791c08d139e662e007da35b35f3)
- support focus events
  [(e4f5b53)](https://github.com/taiga-family/editor/commit/e4f5b5312ccdfb4f7022c265d19748adbe97b85b)
- drop redundant options in tsconfig
  [(92ffc97)](https://github.com/taiga-family/editor/commit/92ffc97b9a23a62e4ad38e90164f19a3b4149660)
- consistent return [(6ae4efe)](https://github.com/taiga-family/editor/commit/6ae4efe4b9772c93fdd65ad7ae3ba7745f260a5d)

### [2.0.21-alpha.22](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.21...v2.0.21-alpha.22) (2024-08-01)

### 🚀 Features

- support align images in article
  [(4b95767)](https://github.com/taiga-family/editor/commit/4b957674ddb5dd9a06fcfed26223f2357cc13ecd)
- decomposition image options
  [(3ddb147)](https://github.com/taiga-family/editor/commit/3ddb147d7e423abd3723e808fc752389c6e4d51d)
- sync minimal width for image between result and editor
  [(9199edb)](https://github.com/taiga-family/editor/commit/9199edb31d76d44ce998ac168772c0e52a9ec4d3)
- support readOnly [(d70a325)](https://github.com/taiga-family/editor/commit/d70a325d7baf6ed57cae7e9acaa571920177a3ab)
- improve ui/ux for images
  [(dbb11ae)](https://github.com/taiga-family/editor/commit/dbb11aee42d9b194627b31cadb051fa5ce6064dd)

### 🐞 Bug Fixes

- correct show/hide dropdown for anchor images
  [(5bff157)](https://github.com/taiga-family/editor/commit/5bff1571c0082e54d872f414e67b4b47cd0cebd1)
- support draggable for image
  [(3e3635b)](https://github.com/taiga-family/editor/commit/3e3635bc9d91d1ce673386682effdc008725fccd)

### [2.0.21-alpha.21](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.20...v2.0.21-alpha.21) (2024-07-31)

### 🚀 Features

- drop enums [(e581dda)](https://github.com/taiga-family/editor/commit/e581dda3eb1efac24b694cf426c5d0bb12ee1dac)
- override cell color tool
  [(34064f6)](https://github.com/taiga-family/editor/commit/34064f6aa6b352f5742c89052a99fc2409167d72)

### 🐞 Bug Fixes

- customization icons
  [(0f58f0c)](https://github.com/taiga-family/editor/commit/0f58f0cbdb065eaa25acfc827375263fc2c5fb0a)
- floating toolbar doesn't close if highlighted text was erased
  [(d1b3439)](https://github.com/taiga-family/editor/commit/d1b34392ff1c85e600c04c845facebbb89d64868)

### [2.0.21-alpha.20](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.19...v2.0.21-alpha.20) (2024-07-30)

### 🚀 Features

- drop optional [(46be3ec)](https://github.com/taiga-family/editor/commit/46be3ecb316a10a33bbc551d2e75f9e2b5b9ff02)
- drop optional [(517b3e1)](https://github.com/taiga-family/editor/commit/517b3e119b98057447770978493b2d06fad109ba)

### 🐞 Bug Fixes

- double dropdown when edit links
  [(06978a1)](https://github.com/taiga-family/editor/commit/06978a1471baffaafca090a1e00824d451b30fbc)

### [2.0.21-alpha.19](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.18...v2.0.21-alpha.19) (2024-07-30)

### 🚀 Features

- drop optional [(c063ecb)](https://github.com/taiga-family/editor/commit/c063ecbe0c8ec664738b4368f0f64c37149a8af3)

### [2.0.21-alpha.18](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.17...v2.0.21-alpha.18) (2024-07-25)

### 🚀 Features

- ssr compatibility [(1ced3a1)](https://github.com/taiga-family/editor/commit/1ced3a1cdd1ce9f7fc4ca3066eafdccf29881cee)

### [2.0.21-alpha.17](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.16...v2.0.21-alpha.17) (2024-07-22)

### [2.0.21-alpha.16](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.15...v2.0.21-alpha.16) (2024-07-19)

### 🐞 Bug Fixes

- correct position for mention dropdown
  [(aaaeec0)](https://github.com/taiga-family/editor/commit/aaaeec012c31c1a609b03ef624dedf3306294fc4)

### [2.0.21-alpha.15](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.14...v2.0.21-alpha.15) (2024-07-19)

### 🚀 Features

- support SSR (#1196)
  [(1a1ac83)](https://github.com/taiga-family/editor/commit/1a1ac831d10a304c5d82411cdb1a675a56ae360a)

### 🐞 Bug Fixes

- do not override list style by placeholder
  [(3bdd001)](https://github.com/taiga-family/editor/commit/3bdd0018bc9985b98c96c53bf6b564273f9319eb)

### [2.0.21-alpha.14](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.13...v2.0.21-alpha.14) (2024-07-17)

### 🚀 Features

- support break line inside details content
  [(fc27530)](https://github.com/taiga-family/editor/commit/fc2753099db90e9345a05823a0a8623cc5832b7c)

### [2.0.21-alpha.13](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.12...v2.0.21-alpha.13) (2024-07-17)

### 🚀 Features

- support delete detail from contenteditable area
  [(2896d9a)](https://github.com/taiga-family/editor/commit/2896d9a623dc24af79b6adb1599073b5d7a63ba4)
- support delete detail from contenteditable area
  [(7972f1a)](https://github.com/taiga-family/editor/commit/7972f1ad4257073164479bfedf2dcc3f0895b97b)

### [2.0.21-alpha.12](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.11...v2.0.21-alpha.12) (2024-07-17)

### 🚀 Features

- revert deprecated package
  [(bd4cae2)](https://github.com/taiga-family/editor/commit/bd4cae2dbe2c81e32b85feb7c3adee37dd6982ed)
- add `TuiCustomEnter` and `Placeholder` extensions by default
  [(f79d57c)](https://github.com/taiga-family/editor/commit/f79d57ce6539f475e54e3ed37b594a5f520efe1c)
- add outline color for selected cell
  [(12387e1)](https://github.com/taiga-family/editor/commit/12387e1832e003773fe5c272c1391b7d27fbda4b)
- improve border color for table
  [(e144652)](https://github.com/taiga-family/editor/commit/e144652e70f0b71f1f276df9898d6daf08b71772)
- improve styles for gapcursor
  [(fe0ce22)](https://github.com/taiga-family/editor/commit/fe0ce2210d4ad4fba252a11ff4522cd9e5d4c7e8)
- support draggable for details
  [(f7cdcbb)](https://github.com/taiga-family/editor/commit/f7cdcbb3801599fd5981f091f120c5a9a3c1df82)

### [2.0.21-alpha.11](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.10...v2.0.21-alpha.11) (2024-07-15)

### 🐞 Bug Fixes

- reflow editor socket
  [(292bde9)](https://github.com/taiga-family/editor/commit/292bde971467c30860f8a6bb8314170cfde8ea55)
- reflow editor socket
  [(c209608)](https://github.com/taiga-family/editor/commit/c20960849b4db060f34ef45fad5034e34d331d4d)

### [2.0.21-alpha.10](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.9...v2.0.21-alpha.10) (2024-07-15)

### 🐞 Bug Fixes

- invalid url (#1171)
  [(473b035)](https://github.com/taiga-family/editor/commit/473b035f682b2912da471766db58fee6b0977419)

### [2.0.21-alpha.9](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.8...v2.0.21-alpha.9) (2024-07-13)

### [2.0.21-alpha.8](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.7...v2.0.21-alpha.8) (2024-07-04)

### 🐞 Bug Fixes

- do not rewrite previous styles on table cell
  [(b23ac72)](https://github.com/taiga-family/editor/commit/b23ac72ffa3d2f8a9c80ca465853de443d37b3e6)
- do not rewrite previous styles on table cell
  [(73d2917)](https://github.com/taiga-family/editor/commit/73d29179437d155a099c20b3238d4bcfa7ceb227)

### [2.0.21-alpha.7](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.6...v2.0.21-alpha.7) (2024-07-01)

### 🐞 Bug Fixes

- prevent fetch resources in contenteditable (#1107)
  [(0f46d57)](https://github.com/taiga-family/editor/commit/0f46d57a29d880a407d8e7e082069e4a75575520)

### [2.0.21-alpha.6](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.5...v2.0.21-alpha.6) (2024-06-26)

### 🚀 Features

- update peer deps [(e187015)](https://github.com/taiga-family/editor/commit/e187015b2c1a9f27ca8674838d089a575e5af411)
- drop `TuiContenteditableValueAccessor`
  [(9689144)](https://github.com/taiga-family/editor/commit/9689144dfeaff27347318c4f3dc1320d056d3ac8)
- drop `TUI_EDITOR_CONTENT_PROCESSOR`
  [(4e9d6f3)](https://github.com/taiga-family/editor/commit/4e9d6f35cce188ab8f592203f295a65e2e97286f)
- add `TUI_EDITOR_SANITIZER`
  [(5e34909)](https://github.com/taiga-family/editor/commit/5e349096486a147153c3ab46950bf6b91994b21e)

### [2.0.21-alpha.5](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.4...v2.0.21-alpha.5) (2024-06-26)

### 🐞 Bug Fixes

- mark some peer dependencies as optional and remove some unnecessary peer dependencies
  [(25b935d)](https://github.com/taiga-family/editor/commit/25b935d49f33234f6971e9459136623eb65f5345)
- links are not changed in Safari
  [(2523ee3)](https://github.com/taiga-family/editor/commit/2523ee3f29271df759846bf27919bd82a9798658)
- remove duplicate details content plugin
  [(f18bdf9)](https://github.com/taiga-family/editor/commit/f18bdf9426ddf0819d182548d0475d5511dd9dc9)
- invalid recalculation model (#1103)
  [(fbe2750)](https://github.com/taiga-family/editor/commit/fbe2750ecfff1b1571c6165da5a342b3c9822ec1)

### [2.0.21-alpha.4](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.3...v2.0.21-alpha.4) (2024-06-24)

### [2.0.21-alpha.3](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.2...v2.0.21-alpha.3) (2024-06-11)

### 🚀 Features

- move package to new scope
  [(f9940c8)](https://github.com/taiga-family/editor/commit/f9940c89730dcdf41a7e2ee87d4e84a1a6d7cf17)
- drop tiptap image extension favor own
  [(f223301)](https://github.com/taiga-family/editor/commit/f22330177b1872a293708043756a76c3f3ca2c81)

### 🐞 Bug Fixes

- support resize multiple images inside single paragraph
  [(33fb1b0)](https://github.com/taiga-family/editor/commit/33fb1b0da7ca834fa7c2bb779e91b796c80e3df9)
- doesn't work pasting image from clipboard
  [(4447f9f)](https://github.com/taiga-family/editor/commit/4447f9fe483f1f21be95137bd38ee9738f68749c)
- mark some peer dependencies as optional and remove some unnecessary peer dependencies (#1093)
  [(171e93c)](https://github.com/taiga-family/editor/commit/171e93c55324911cf93d9f00cb01dc428adc1ce1)

### [2.0.21-alpha.2](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.1...v2.0.21-alpha.2) (2024-06-06)

### 🚀 Features

- drop Component and Directive postfix
  [(c49aabe)](https://github.com/taiga-family/editor/commit/c49aabe14085c0aadb8268a17d1d1fe531489e24)

### [2.0.21-alpha.1](https://github.com/taiga-family/editor/compare/v2.0.21-alpha.0...v2.0.21-alpha.1) (2024-06-05)

### [2.0.21-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.20-alpha.0...v2.0.21-alpha.0) (2024-06-05)

### [2.0.20-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.19-alpha.0...v2.0.20-alpha.0) (2024-06-05)

### 🚀 Features

### [2.0.19-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.18-alpha.0...v2.0.19-alpha.0) (2024-06-04)

### 🚀 Features

- drop default minimum size for images less than 300px (#1039)
  [(330c718)](https://github.com/taiga-family/editor/commit/330c71858ae6bf8401c5fc397f933cb99c58fe0d)

### [2.0.18-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.17-alpha.0...v2.0.18-alpha.0) (2024-05-08)

### 🐞 Bug Fixes

- class constructor NodeView cannot be invoked without 'new' (#1010)
  [(f3ab25e)](https://github.com/taiga-family/editor/commit/f3ab25e4e9349a9a86d765cb116e5985a6cc5778)

### [2.0.17-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.16-alpha.0...v2.0.17-alpha.0) (2024-05-07)

### 🐞 Bug Fixes

- show custom tools when basic tools skipped
  [(0baf924)](https://github.com/taiga-family/editor/commit/0baf924817512fd2f0e66ec850dc620879c1e704)
- reset counter list for nested li inside details (#998)
  [(3689672)](https://github.com/taiga-family/editor/commit/368967230550a75a103f924d78913cc7674995a6)

### [2.0.16-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.15-alpha.0...v2.0.16-alpha.0) (2024-05-06)

### [2.0.15-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.14-alpha.0...v2.0.15-alpha.0) (2024-05-02)

### [2.0.14-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.13-alpha.0...v2.0.14-alpha.0) (2024-04-15)

### [2.0.13-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.12-alpha.0...v2.0.13-alpha.0) (2024-04-08)

### [2.0.12-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.11-alpha.0...v2.0.12-alpha.0) (2024-04-08)

### 🐞 Bug Fixes

- incorrect column's width after cell merging
  [(681c885)](https://github.com/taiga-family/editor/commit/681c88585e9161081dde07e9b315d092f11082c4)

### [2.0.11-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.10-alpha.0...v2.0.11-alpha.0) (2024-04-03)

### 🚀 Features

- drop legacy button (#946)
  [(254a7a3)](https://github.com/taiga-family/editor/commit/254a7a3a6dd0aaf77cc61ab4c9999ba4c8a2c2ff)

### 🐞 Bug Fixes

- support preview full list of mention suggestion (#949)
  [(68d8773)](https://github.com/taiga-family/editor/commit/68d877390ab70627ea232ac2fc4826eef8e3bd4b)

### [2.0.10-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.9-alpha.0...v2.0.10-alpha.0) (2024-03-30)

### 🚀 Features

- support hex pattern in input color
  [(6be94b1)](https://github.com/taiga-family/editor/commit/6be94b1345704338ac30f894c0402d99b048d468)
- add markdown extension (#937)
  [(df32291)](https://github.com/taiga-family/editor/commit/df32291dc60257bfa8ad3ea9c6c68fc614635dad)

### [2.0.9-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.8-alpha.0...v2.0.9-alpha.0) (2024-03-27)

### 🚀 Features

- add mention (#927) [(262a631)](https://github.com/taiga-family/editor/commit/262a6318c18c078729260cdd890dbff97e33f230)
- add checkbox (#922)
  [(bbfd692)](https://github.com/taiga-family/editor/commit/bbfd6925a6be718131bd795b61508831be30f85d)

### 🐞 Bug Fixes

- use checked attribute
  [(d33026f)](https://github.com/taiga-family/editor/commit/d33026f9192a5dd9ab4c39e30955790cf42f1147)

### [2.0.8-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.7-alpha.0...v2.0.8-alpha.0) (2024-03-26)

### [2.0.7-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.6-alpha.0...v2.0.7-alpha.0) (2024-03-25)

### 🚀 Features

- add floating toolbar (#914)
  [(6b78a58)](https://github.com/taiga-family/editor/commit/6b78a58d56be440e2514244cec18bbb37f2be3f5)

### [2.0.6-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.5-alpha.0...v2.0.6-alpha.0) (2024-03-25)

### 🚀 Features

- add example for align toolbar bottom (#888)
  [(cb3f867)](https://github.com/taiga-family/editor/commit/cb3f8670bc902144d5aa1e777456198ceac38aad)
- ssr (#883) [(7e8bd83)](https://github.com/taiga-family/editor/commit/7e8bd83f5fa3dcddeb1fa7263c5902a664e86cad)

### [2.0.5-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.4-alpha.0...v2.0.5-alpha.0) (2024-03-19)

### 🚀 Features

- ssr (#874) [(c52ce74)](https://github.com/taiga-family/editor/commit/c52ce74ec12505896665fd0520ddf27e101f0ee8)
- support appearance (#868)
  [(716ba8e)](https://github.com/taiga-family/editor/commit/716ba8eb90ff9424c90317fa58a93b554ca1ab0e)

### [2.0.4-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.3-alpha.0...v2.0.4-alpha.0) (2024-03-14)

### 🐞 Bug Fixes

- clear contenteditable focus after reset in Safari (#861)
  [(784968e)](https://github.com/taiga-family/editor/commit/784968ede52fe1f04e95906f31bac1427b740364)

### [2.0.3-alpha.0](https://github.com/taiga-family/editor/compare/v2.0.2-alpha.0...v2.0.3-alpha.0) (2024-03-12)

### 🚀 Features

- upgrade to Angular 16 (#843)
  [(3854c92)](https://github.com/taiga-family/editor/commit/3854c927f7f730e6fd3ba079ca933f1f147e1dc9)

### [2.0.2-alpha.0](https://github.com/taiga-family/editor/compare/v1.64.0...v2.0.2-alpha.0) (2024-03-01)

### 🚀 Features

- fix typecheck in cypress files (#6908) (#824)
  [(76d6497)](https://github.com/taiga-family/editor/commit/76d64977586c37bd1765d00a18f9d64d6b9a1299)
- remove `tui-input-count` (#678)
  [(f0f3b5a)](https://github.com/taiga-family/editor/commit/f0f3b5ad96dcd24f4803f5cb64f5a07be1bbb125)

### 🐞 Bug Fixes

- change hidden to clip (#828)
  [(bb9edf6)](https://github.com/taiga-family/editor/commit/bb9edf6fe59cc79cf0908fea8b0ae885cdf22f8d)
- strange behaviour on Windows (#820)
  [(218a3c8)](https://github.com/taiga-family/editor/commit/218a3c803c6760b45d26f90ec0a1fb5cc2b14365)
- undo operation should work when updating attributes (#808)
  [(261bf96)](https://github.com/taiga-family/editor/commit/261bf96af15df2fee974d4fd5b5f1c9d62a359f9)
- use image loader when using drag-and-drop images (#792)
  [(406c393)](https://github.com/taiga-family/editor/commit/406c393949b650f12e165b67ca7533073a55d6f4)

### [1.64.0](https://github.com/taiga-family/editor/compare/v1.63.0...v1.64.0) (2024-09-04)

### 🚀 Features

- drop some deps [(882918d)](https://github.com/taiga-family/editor/commit/882918dd2d33edc0f0684038721ebb87187012fa)
- update prosemirror deps
  [(6f3f625)](https://github.com/taiga-family/editor/commit/6f3f62590258c157454bbfce417bfda0be8d2287)
- use tiptap/pm/model
  [(3802a3d)](https://github.com/taiga-family/editor/commit/3802a3d587c607c4d82e21bb83ea25825cd9d1a9)

### [1.63.0](https://github.com/taiga-family/editor/compare/v1.62.0...v1.63.0) (2024-09-04)

### 🐞 Bug Fixes

- add clearfix (#1321)
  [(6be3fef)](https://github.com/taiga-family/editor/commit/6be3feffd76b33bf48676a4d6409e5b54adce9d9)

### [1.62.0](https://github.com/taiga-family/editor/compare/v1.61.0...v1.62.0) (2024-09-02)

### 🐞 Bug Fixes

- revert accordion state
  [(504a460)](https://github.com/taiga-family/editor/commit/504a460069b8cdbd7040ffb790350581851f1b3f)

### [1.61.0](https://github.com/taiga-family/editor/compare/v1.60.0...v1.61.0) (2024-08-26)

### 🐞 Bug Fixes

- image option button submits the form
  [(28a6755)](https://github.com/taiga-family/editor/commit/28a6755ca6b58e55bf900c435ac3ef2836d9db50)

### [1.60.0](https://github.com/taiga-family/editor/compare/v1.59.0...v1.60.0) (2024-08-19)

### 🐞 Bug Fixes

- click on label doesn't allow to type text
  [(b392e94)](https://github.com/taiga-family/editor/commit/b392e94f175e8d2403db1e06667c0c0b30cb05d1)

### [1.59.0](https://github.com/taiga-family/editor/compare/v1.58.0...v1.59.0) (2024-08-15)

### 🐞 Bug Fixes

- table breaks [(ffdf595)](https://github.com/taiga-family/editor/commit/ffdf5950b580e746bdd3ea226853bddc89f3296b)

### [1.58.0](https://github.com/taiga-family/editor/compare/v1.57.0...v1.58.0) (2024-08-09)

### 🚀 Features

- persist detail open state between editor and preview
  [(035a0c0)](https://github.com/taiga-family/editor/commit/035a0c01efa112fa0cddb0bacbbc1db1a3e8a6fe)

### 🐞 Bug Fixes

- accordion breaks into two
  [(d4d68a1)](https://github.com/taiga-family/editor/commit/d4d68a137336e43bcde9514fe643ae7fc0e6f041)
- correct delete details
  [(ef47df9)](https://github.com/taiga-family/editor/commit/ef47df945ec2a55237885f0bc2e01eccd176fec8)
- focus removed from editor when clicking arrow button in accordion
  [(e94c12f)](https://github.com/taiga-family/editor/commit/e94c12fd8022ec50063aaf95a4c2d41716865d11)
- broken accordion added to checkbox list
  [(4293fcb)](https://github.com/taiga-family/editor/commit/4293fcb038c16486b8cbe44c64c6331c1186ed06)
- no word wrap in the accordion title
  [(3028b03)](https://github.com/taiga-family/editor/commit/3028b03f25391af29ee0c7b9af4216f3c9cab9c4)

### [1.57.0](https://github.com/taiga-family/editor/compare/v1.56.0...v1.57.0) (2024-08-08)

### 🐞 Bug Fixes

- details extension should be correct destroy
  [(938027b)](https://github.com/taiga-family/editor/commit/938027bacf5ba7f6e27e8c1a0c143a645d911d3f)

### [1.56.0](https://github.com/taiga-family/editor/compare/v1.55.0...v1.56.0) (2024-08-05)

### 🚀 Features

- support shared toolbar
  [(0e79e65)](https://github.com/taiga-family/editor/commit/0e79e654877af88aa60f2b076e17c5205529c453)

### [1.55.0](https://github.com/taiga-family/editor/compare/v1.54.0...v1.55.0) (2024-08-02)

### 🚀 Features

- support auto min-height
  [(774cf54)](https://github.com/taiga-family/editor/commit/774cf5403291a28c60d200d5ec1167df8855df0e)
- support focus events
  [(45422b5)](https://github.com/taiga-family/editor/commit/45422b5d94c376b176783ce9d6c89ec28ac22222)

### [1.54.0](https://github.com/taiga-family/editor/compare/v1.53.0...v1.54.0) (2024-08-02)

### 🚀 Features

- show example text always
  [(ebce916)](https://github.com/taiga-family/editor/commit/ebce916ece66a08ac5e19152eafa71f77c9e8803)

### [1.53.0](https://github.com/taiga-family/editor/compare/v1.52.0...v1.53.0) (2024-08-01)

### 🚀 Features

- support readOnly [(0c3f0af)](https://github.com/taiga-family/editor/commit/0c3f0af428ead2a611113cadef3bfad52117c76e)

### [1.52.0](https://github.com/taiga-family/editor/compare/v1.51.0...v1.52.0) (2024-08-01)

### 🚀 Features

- decomposition image options
  [(c2023e6)](https://github.com/taiga-family/editor/commit/c2023e65d2402548cefaa206953c172349851f07)

### [1.51.0](https://github.com/taiga-family/editor/compare/v1.50.0...v1.51.0) (2024-08-01)

### 🚀 Features

- support align images in article
  [(00c549f)](https://github.com/taiga-family/editor/commit/00c549f424c96d1aaf7744dd4a69e01a2c608ae8)
- support align images in article
  [(58e2dce)](https://github.com/taiga-family/editor/commit/58e2dceec10c3f7b22c6ed5f841729ab4fec2da6)

### 🐞 Bug Fixes

- support draggable for image
  [(add57d4)](https://github.com/taiga-family/editor/commit/add57d43441212c2fce6e4041000afe09014d368)
- correct color for delete details button
  [(17bbfe9)](https://github.com/taiga-family/editor/commit/17bbfe9a0904de1b903c018829209c2f71861c22)

### [1.50.0](https://github.com/taiga-family/editor/compare/v1.49.0...v1.50.0) (2024-07-31)

### 🚀 Features

- override cell color tool
  [(dadd8c7)](https://github.com/taiga-family/editor/commit/dadd8c7bf3dc3af7a21f6315587d4e06bdd064a0)

### 🐞 Bug Fixes

- floating toolbar doesn't close if highlighted text was erased
  [(6c1fe57)](https://github.com/taiga-family/editor/commit/6c1fe57b0715dc5b900bf0c4533aedfd9cee6751)
- skip hydration [(83b9a8e)](https://github.com/taiga-family/editor/commit/83b9a8e90d125f4f31810cd9a4f4173c0b8d2691)

### [1.49.0](https://github.com/taiga-family/editor/compare/v1.48.0...v1.49.0) (2024-07-30)

### 🐞 Bug Fixes

- double dropdown when edit links
  [(f8c1f18)](https://github.com/taiga-family/editor/commit/f8c1f187b1f314c39074bf8252a6724318eaa506)

### [1.48.0](https://github.com/taiga-family/editor/compare/v1.47.0...v1.48.0) (2024-07-29)

### 🚀 Features

- support customization input color
  [(861c1d7)](https://github.com/taiga-family/editor/commit/861c1d79867e4ee9923e84c081e47860206dd6d6)

### [1.47.0](https://github.com/taiga-family/editor/compare/v1.46.0...v1.47.0) (2024-07-19)

### 🐞 Bug Fixes

- correct position for mention dropdown
  [(ea8f727)](https://github.com/taiga-family/editor/commit/ea8f727338ccd13dc5a8a1238c2988cde0d28bec)

### [1.46.0](https://github.com/taiga-family/editor/compare/v1.45.0...v1.46.0) (2024-07-17)

### 🚀 Features

- support break line inside details content
  [(55c53da)](https://github.com/taiga-family/editor/commit/55c53da615f6e7181c62ee4fb36bd5a4ff39f9e5)

### [1.45.0](https://github.com/taiga-family/editor/compare/v1.44.0...v1.45.0) (2024-07-17)

### 🚀 Features

- support delete detail from contenteditable area
  [(3a5c415)](https://github.com/taiga-family/editor/commit/3a5c415f6264701b00997176ece3825c6c5573e1)

### [1.44.0](https://github.com/taiga-family/editor/compare/v1.43.0...v1.44.0) (2024-07-17)

### [1.43.0](https://github.com/taiga-family/editor/compare/v1.42.0...v1.43.0) (2024-07-17)

### 🚀 Features

- add `TuiCustomEnter` and `Placeholder` extensions by default
  [(d95d46e)](https://github.com/taiga-family/editor/commit/d95d46e9d4fdcf44a8ba3dad2294d2554383bdc1)
- add outline color for selected cell
  [(cd22e0e)](https://github.com/taiga-family/editor/commit/cd22e0e2aabb2d07276e245c1b88be2601df2e87)
- improve styles for gapcursor
  [(71f5681)](https://github.com/taiga-family/editor/commit/71f56810242b6b803164e27fc70db0b80d91b846)
- support draggable for details
  [(b532540)](https://github.com/taiga-family/editor/commit/b532540a6882c0263b715d1ac347dd3bf5bd88b4)

### [1.42.0](https://github.com/taiga-family/editor/compare/v1.41.0...v1.42.0) (2024-07-15)

### 🐞 Bug Fixes

- reflow editor socket
  [(2078809)](https://github.com/taiga-family/editor/commit/20788097899b997bc1f7455e5642c4a5df1b03a6)

### [1.41.0](https://github.com/taiga-family/editor/compare/v1.40.0...v1.41.0) (2024-07-15)

### 🐞 Bug Fixes

- invalid link [(a6cbb33)](https://github.com/taiga-family/editor/commit/a6cbb334ca1f16773e6be5b588a9d6633188b8ac)

### [1.40.0](https://github.com/taiga-family/editor/compare/v1.39.0...v1.40.0) (2024-07-02)

### 🐞 Bug Fixes

- do not rewrite previous styles on table cell
  [(979495d)](https://github.com/taiga-family/editor/commit/979495d76abdd000d6db1626b17e7d19da5ea4d6)

### [1.39.0](https://github.com/taiga-family/editor/compare/v1.38.0...v1.39.0) (2024-07-01)

### 🐞 Bug Fixes

- prevent fetch resources in contenteditable
  [(f1575ce)](https://github.com/taiga-family/editor/commit/f1575ce05bc821b0d2b87485b8db0bc12734dc63)
- improve assert [(d062e32)](https://github.com/taiga-family/editor/commit/d062e321d5b6829ce184e4b0431b2bbc62d08c51)

### [1.38.0](https://github.com/taiga-family/editor/compare/v1.37.0...v1.38.0) (2024-06-25)

### 🐞 Bug Fixes

- links are not changed in Safari
  [(9b4ab76)](https://github.com/taiga-family/editor/commit/9b4ab7652a328e26b9865c33681479010a87f4cc)

### [1.37.0](https://github.com/taiga-family/editor/compare/v1.36.0...v1.37.0) (2024-06-10)

### 🐞 Bug Fixes

- revert some dependencies
  [(80c6929)](https://github.com/taiga-family/editor/commit/80c6929fdba66ba46942de04dc17110d59851ba0)

### [1.36.0](https://github.com/taiga-family/editor/compare/v1.35.0...v1.36.0) (2024-06-10)

### 🐞 Bug Fixes

- mark some peer dependencies as optional and remove some unnecessary peer dependencies (#1097)
  [(2d71423)](https://github.com/taiga-family/editor/commit/2d71423e8d1c96ffc313684effbf915bc33f7da3)

### [1.35.0](https://github.com/taiga-family/editor/compare/v1.34.0...v1.35.0) (2024-06-06)

### [1.34.0](https://github.com/taiga-family/editor/compare/v1.33.0...v1.34.0) (2024-06-06)

### 🐞 Bug Fixes

- doesn't work pasting image from clipboard
  [(990260e)](https://github.com/taiga-family/editor/commit/990260e7e7a438883c00c0e5f60874fd85450701)

### [1.33.0](https://github.com/taiga-family/editor/compare/v1.32.0...v1.33.0) (2024-06-05)

### 🚀 Features

### [1.32.0](https://github.com/taiga-family/editor/compare/v1.31.0...v1.32.0) (2024-05-29)

### 🐞 Bug Fixes

- support resize multiple images inside single paragraph
  [(d813f6c)](https://github.com/taiga-family/editor/commit/d813f6c6232cb05df261213509c94fe82f8eb95a)

### [1.31.0](https://github.com/taiga-family/editor/compare/v1.30.0...v1.31.0) (2024-05-20)

### 🚀 Features

- drop default minimum size for images less than 300px
  [(f52a8bc)](https://github.com/taiga-family/editor/commit/f52a8bcdb2a1f715f54fbe241582504678d3b095)

### [1.30.0](https://github.com/taiga-family/editor/compare/v1.29.0...v1.30.0) (2024-05-13)

### 🐞 Bug Fixes

- invalid typescript compatibility
  [(2b18bb9)](https://github.com/taiga-family/editor/commit/2b18bb99c9c348cf1a0c9796caa922d1082d843f)

### [1.29.0](https://github.com/taiga-family/editor/compare/v1.28.0...v1.29.0) (2024-05-13)

### 🚀 Features

- drop tiptap image extension favor own
  [(81bf545)](https://github.com/taiga-family/editor/commit/81bf54544557680544d877b795d8e9e28ec4aba2)

### [1.28.0](https://github.com/taiga-family/editor/compare/v1.27.0...v1.28.0) (2024-05-08)

### 🐞 Bug Fixes

- drop constructor [(d8b8052)](https://github.com/taiga-family/editor/commit/d8b805282ab2a3e72de52c772719ef29a1f41709)

### [1.27.0](https://github.com/taiga-family/editor/compare/v1.26.0...v1.27.0) (2024-05-08)

### 🐞 Bug Fixes

- class constructor NodeView cannot be invoked without 'new' (#1009)
  [(b2e44b0)](https://github.com/taiga-family/editor/commit/b2e44b06b2405e6f40555649c2f51ea2f7eddea7)

### [1.26.0](https://github.com/taiga-family/editor/compare/v1.25.1...v1.26.0) (2024-05-07)

### 🐞 Bug Fixes

- show custom tools when basic tools skipped
  [(881460d)](https://github.com/taiga-family/editor/commit/881460de2663bc9bb7b6392989946021d7e53891)
- reset counter list for nested li inside details (#998)
  [(0482ffa)](https://github.com/taiga-family/editor/commit/0482ffa8cb8c95bed5d637517a48062113f19a58)

### [1.25.1](https://github.com/taiga-family/editor/compare/v1.25.0...v1.25.1) (2024-04-08)

### 🐞 Bug Fixes

- import problem [(5f2bbc8)](https://github.com/taiga-family/editor/commit/5f2bbc8182119839232314caafff3d7c1f678356)

### [1.25.0](https://github.com/taiga-family/editor/compare/v1.24.0...v1.25.0) (2024-04-08)

### 🐞 Bug Fixes

- incorrect column's width after cell merging (#962)
  [(3f58640)](https://github.com/taiga-family/editor/commit/3f5864092cd4b1314949f3de1eefbce468bb336c)

### [1.24.0](https://github.com/taiga-family/editor/compare/v1.23.0...v1.24.0) (2024-04-02)

### 🚀 Features

- support relative links (#942)
  [(680edf4)](https://github.com/taiga-family/editor/commit/680edf4efb26ccd618966cf22a584ff525db57e0)

### 🐞 Bug Fixes

- support preview full list of mention suggestion (#944)
  [(e602062)](https://github.com/taiga-family/editor/commit/e602062da5e2adb1772b30d26b1e2d3098cda7f6)
- strange dropdown behaviour (#941)
  [(806be0b)](https://github.com/taiga-family/editor/commit/806be0b792cecec16727b2417d77d4bb39a93935)

### [1.23.0](https://github.com/taiga-family/editor/compare/v1.22.0...v1.23.0) (2024-04-01)

### 🐞 Bug Fixes

- incorrect dropdown behaviour (#940)
  [(3634bba)](https://github.com/taiga-family/editor/commit/3634bba0bb45aa58122258c7103a5915e723ef19)

### [1.22.0](https://github.com/taiga-family/editor/compare/v1.21.0...v1.22.0) (2024-03-29)

### 🚀 Features

- add markdown extension (#934)
  [(7938bd9)](https://github.com/taiga-family/editor/commit/7938bd94ef083704d14c62cdfb4235759cbd3b3c)

### [1.21.0](https://github.com/taiga-family/editor/compare/v1.20.1...v1.21.0) (2024-03-28)

### 🚀 Features

- add hex pattern in color picker (#929)
  [(a4ec210)](https://github.com/taiga-family/editor/commit/a4ec210815652b91cd18d64c3b12ec15cba9d984)

### [1.20.1](https://github.com/taiga-family/editor/compare/v1.20.0...v1.20.1) (2024-03-27)

### 🐞 Bug Fixes

- use checked attribute
  [(c296a02)](https://github.com/taiga-family/editor/commit/c296a027435dadb720d95d909f1ea08506e1fb61)

### [1.20.0](https://github.com/taiga-family/editor/compare/v1.19.0...v1.20.0) (2024-03-27)

### 🚀 Features

- add mention extension (#926)
  [(955ebff)](https://github.com/taiga-family/editor/commit/955ebffb32d9515531ed6c518bd3bb448429c82d)

### [1.19.0](https://github.com/taiga-family/editor/compare/v1.18.0...v1.19.0) (2024-03-26)

### 🚀 Features

- add checkbox (#919)
  [(96998c3)](https://github.com/taiga-family/editor/commit/96998c32913f7828602890b3b7b93811ca1e1df3)

### [1.18.0](https://github.com/taiga-family/editor/compare/v1.17.0...v1.18.0) (2024-03-22)

### 🚀 Features

- add toolbar examples
  [(4100402)](https://github.com/taiga-family/editor/commit/4100402714de533599bb905c390eb8432fb0868e)
- support floating toolbar (#901)
  [(e335879)](https://github.com/taiga-family/editor/commit/e335879b5226f11eb43adcfa0d4bcebb710f1ecc)
- support appearance (#867)
  [(47d6e6d)](https://github.com/taiga-family/editor/commit/47d6e6dae34b3c11a207587e4ed19efb9c54e694)

### [1.17.0](https://github.com/taiga-family/editor/compare/v1.16.0...v1.17.0) (2024-03-14)

### 🐞 Bug Fixes

- clear contenteditable focus after reset in Safari (#862)
  [(4866dc1)](https://github.com/taiga-family/editor/commit/4866dc13a3895fa5c1c2a7dd9d7bf337ec44e9ce)

### [1.16.0]() (2024-02-29)

### 🚀 Features

- add angular content editable accessor
  [(01e0f1e)](https://github.com/taiga-family/editor/commit/01e0f1eb5e72819d8eb32a63398114e3bfd2b2d1)
- nowrap text in editor links
  [(0fdf555)](https://github.com/taiga-family/editor/commit/0fdf5555b4145eec06edbbb4c6d27de58ffbe7df)
- improve ux for touching edit link
  [(6744776)](https://github.com/taiga-family/editor/commit/6744776da7071cd0a05bce23905b37265c323f8b)
- add `enableDefaultStyles` option (#823)
  [(defc64e)](https://github.com/taiga-family/editor/commit/defc64e604cb9361ab1fab03572cf9181a52aee0)
- remove `tui-input-count` (#676)
  [(bb3ebed)](https://github.com/taiga-family/editor/commit/bb3ebedf3566d3a5ed8e2a1afa850e110cf795ca)
- support copy paste multiple links (#610)
  [(f261eff)](https://github.com/taiga-family/editor/commit/f261effd5bf6ada05d079a06a0915aba60178904)
- reuse previous font color when change font size (#314)
  [(abd01e2)](https://github.com/taiga-family/editor/commit/abd01e2198e8be40808df3b2bcc5e0b0b1ed7916)
- improve ui for color-edit component (#257)
  [(b023a6a)](https://github.com/taiga-family/editor/commit/b023a6a9bfe40f143f04a454ba04f69e2bb2ab9c)
- support override icons (#165)
  [(4dc5cd4)](https://github.com/taiga-family/editor/commit/4dc5cd4ab69786637e661fa877e5c8bdc28b069b)
- change margin for list (#152)
  [(57d79ca)](https://github.com/taiga-family/editor/commit/57d79ca8741db87b88df887e921402477e228346)
- add stackblitz starter (#30)
  [(20831ef)](https://github.com/taiga-family/editor/commit/20831ef3f7815ef6e6be93da0387b0a55c486ddf)
- add e2e (#10) [(2e4067a)](https://github.com/taiga-family/editor/commit/2e4067ab525b6021251b8ba4061c548602981afb)
- support cypress (#8)
  [(11c6411)](https://github.com/taiga-family/editor/commit/11c6411ebe1950e909c47db7597a76834e698688)
- move all pages (#7)
  [(6daf751)](https://github.com/taiga-family/editor/commit/6daf751ae94a52bb020f2bc4a14e823843d78eae)
- remove ssr executors (#6)
  [(cdf9bcb)](https://github.com/taiga-family/editor/commit/cdf9bcb3c8d84de698b36c1911547b5cf5efac40)
- add starter page (#4)
  [(5c8d2a7)](https://github.com/taiga-family/editor/commit/5c8d2a714828647f8448e863fe1e91f5970c5d27)
- support gh-pages (#2)
  [(99c11e1)](https://github.com/taiga-family/editor/commit/99c11e1f27c6951f6be3bd55d5054168a322a6dd)
- cleanup (#1) [(be6f24b)](https://github.com/taiga-family/editor/commit/be6f24b549da262edacae7b7f8ffcaf2c434b446)

### 🐞 Bug Fixes

- revert package.json
  [(66ffc47)](https://github.com/taiga-family/editor/commit/66ffc479a3e03dbe6c5ce8c7ab408b5a59b14f13)
- cannot convert undefined or null to object at getOwnPropertyDescriptors
  [(2203aa7)](https://github.com/taiga-family/editor/commit/2203aa75cffe018f6cec4410cde20352b756c9e8)
- cannot convert undefined or null to object at getOwnPropertyDescriptors
  [(b991466)](https://github.com/taiga-family/editor/commit/b99146633d2850c314150e248a3c1e07a3409895)
- change hidden to clip (#827)
  [(00bb79b)](https://github.com/taiga-family/editor/commit/00bb79b4ddf2302dc28907b7e32c8d9410816445)
- strange behaviour on Windows (#821)
  [(420a19c)](https://github.com/taiga-family/editor/commit/420a19cea534f288ab7eef6ff85ce714b2e2787d)
- undo operation should work when updating attributes (#793)
  [(1d27675)](https://github.com/taiga-family/editor/commit/1d276756d2f58e46edad1512f7016b8e7c6c5c65)
- use image loader when using drag-and-drop images (#791)
  [(38f7bf5)](https://github.com/taiga-family/editor/commit/38f7bf588536919a9f0d18b4201b857b74fbe5d7)
- can't resolve item.directive.ts, but not a .d.ts file (#157)
  [(50b117e)](https://github.com/taiga-family/editor/commit/50b117e57626c8cd3cc93c8c912dc402b67f0d36)
- expect null pointer (#156)
  [(fb50ce7)](https://github.com/taiga-family/editor/commit/fb50ce734dfb61e7540203b983eeb8ae9cbb6b94)
- show cursor `pointer` for color `picker` (#73)
  [(e593796)](https://github.com/taiga-family/editor/commit/e593796281fb875b8200be6d62ec2d2a8c86397e)
