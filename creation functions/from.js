"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// from(['Alice','Bob','Charlie']).subscribe( {
//     next : value => console.log(value),
//     complete: ()=> console.log("Completed!")
// })
//------------------------------------------------------
// Convert Promise to Observable
//1. for resolve 
// const promise = new Promise((resolve, reject)=>{
//     resolve("Resolved!")
// })
// const observableFromPromise$ = from(promise).subscribe( {
// next : value => console.log(value),
// complete: () => console.log("Completed!")
// })
//2. for Reject
var promise = new Promise(function (resolve, reject) { return reject("Rejected!"); });
var observableFromPromise$ = (0, rxjs_1.from)(promise).subscribe({
    next: function (value) { return console.log(value); },
    error: function (err) { return console.log("Error : ", err); },
    complete: function () { return console.log("Completed!"); }
});
