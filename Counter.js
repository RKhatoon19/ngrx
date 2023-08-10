"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var Observable$ = new rxjs_1.Observable(function (subscriber) {
    var counter = 1;
    var interval = setInterval(function () {
        // you can see even after apling unsubscribe the counter goes on increase for that need to use cleanInterval()
        console.log("Counter : ", counter);
        subscriber.next(counter++);
    }, 2000);
    return function () {
        console.log("Last Interval : ", interval);
        clearInterval(interval);
    };
}).subscribe(function (value) { return console.log(value); });
setTimeout(function () {
    console.log("Unsubscribe works");
    Observable$.unsubscribe();
}, 7000);
