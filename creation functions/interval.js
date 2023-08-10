"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var interval$ = new rxjs_1.Observable(function (Subscription) {
    var counter = 0;
    var intervalId = setInterval(function () {
        console.log("Starts interval", "Counter ::", counter);
        Subscription.next(0);
    }, 2000);
    return function () {
        console.log("Tear down phase ::::::: Interval id : ", intervalId);
        clearInterval(intervalId);
    };
});
var subscription = interval$.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log("completed!"); },
});
setTimeout(function () {
    subscription.unsubscribe();
    console.log("Unsubscribed!");
}, 5000);
//---------------------------------------------------
// const interval$ = interval(2000).subscribe( {
// next : val => console.log(val),
// complete: () => console.log("Completed")
// })
//  setTimeout(()=> {
//     interval$.unsubscribe()
//     console.log("Unsbscribe")
// }, 5000)
