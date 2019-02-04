import QRCode from "qrcode.react";

import { h, render } from 'preact';

function init(value) {
   const qrcode = document.querySelector("#qrcode");
   render(<QRCode value={value} />, qrcode);

}

chrome.tabs.getSelected(null, function ({url}) {
  init(url);
});
