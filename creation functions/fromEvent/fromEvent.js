"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
console.log("Starting");
var triggerButton;
if (typeof document !== undefined) {
    console.log("Document exists.");
    triggerButton = document.getElementById('triggerButton');
    console.log(triggerButton);
}
else {
    console.log("Document does not exist");
}
(0, rxjs_1.fromEvent)(triggerButton, 'click').subscribe(function (event) { return console.log(event.type); });
