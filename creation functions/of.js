"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (subscription) {
    subscription.next('A');
    subscription.next('B');
    subscription.next('C');
    subscription.next('D');
    subscription.next('E');
    subscription.complete();
});
observable$.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log("Completed"); }
});
//------------------------------------------
// of('Alice','Bob','Charlie').subscribe({
//     next:observer =>{console.log(observer)},
//     complete:()=>console.log("complete")
// })
//---------------------------------------------------
// function userDefinedOfFunction(...args:string[]):Observable<string>{
//     return new Observable<string>(subscription=>{
//         for(let i=0; i<args.length; i++){
//             subscription.next(args[i]);
//         }
//         subscription.complete();
//     })
// }
// userDefinedOfFunction('A','B','C','D').subscribe(
//     {
//         next: value => console.log(value),
//         complete: ()=>console.log("completed")
//     })
