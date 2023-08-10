"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
console.log("start");
// const observable$ = new Observable<number>((subscription) => {
//   const timeoutId = setTimeout(() => {
//     console.log('Timeout!')
//     subscription.next(0);
//     subscription.complete();
//   }, 2000);
//   return () => {
//     console.log("Teardown phase starts...")
//     clearTimeout(timeoutId)}
// });
// const subscriber = observable$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("Completed!"),
// });
// setTimeout(() => {
//   subscriber.unsubscribe();
//   console.log("Unsubscribed!");
// },1000);
//---------------------------------------------------
var subscriber = (0, rxjs_1.timer)(2000).subscribe({
    console: console,
    : .log("Starts listening"),
    next: function (observer) { return console.log(observer); },
    complete: function () { return console.log("Complted!"); }
});
setTimeout(function () {
    subscriber.unsubscribe();
    console.log("Unsubscribed!");
}, 1000);
