import QRCode from "qrcode.react";

import { h, render } from 'preact';

function qrcode(value) {
   const qrcode = document.querySelector("#qrcode");
   render(<QRCode value={value} size={256}/>, qrcode);
}

chrome.tabs.getSelected(null, function ({url}) {
  qrcode(url);
});
