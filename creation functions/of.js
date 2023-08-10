"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// const observable$ = new Observable<string>((subscription)=>{
//     subscription.next('A');
//     subscription.next('B');
//     subscription.next('C');
//     subscription.next('D');
//     subscription.next('E');
//     subscription.complete();
// })
// observable$.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log("Completed")
// });
//------------------------------------------
// of('Alice','Bob','Charlie').subscribe({
//     next:observer =>{console.log(observer)},
//     complete:()=>console.log("complete")
// })
//---------------------------------------------------
function userDefinedOfFunction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new rxjs_1.Observable(function (subscription) {
        for (var i = 0; i < args.length; i++) {
            subscription.next(args[i]);
        }
        subscription.complete();
    });
}
userDefinedOfFunction("A", "B", "C", "D").subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log("completed"); },
});
