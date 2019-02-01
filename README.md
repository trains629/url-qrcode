# url-qrcode
chrome插件用于将地址转为二维码

主要代码是:
```js
import QRCode from "qrcode.react";
chrome.tabs.getSelected(null, function (tab) {
  $('#code').qrcode(tab.url);
});
```

使用`qrcode.react`展现二维码。
