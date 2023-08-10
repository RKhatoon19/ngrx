"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//decalre observable
// const observable$=new Observable<string>((subcriber =>{
//     subcriber.next("Alice");
//     setTimeout(()=>subcriber.next("Bob"),2000);
//     setTimeout(()=>subcriber.next("Charlie"),4000);
// }))
// const observer = {
// next : value => console.log(value)
// }
// //subscription process
// console.log("First Subscription")
// // const subscription = observable$.subscribe(observer)
// // const subscription =observable$.subscribe({next: variable => console.log(variable)})
// const subscription =observable$.subscribe(variable => console.log("Subscription 1 :",variable))
// // console.log(subscription)
// //Multiple subscription(runs independently)
// console.log("Second Subscription")
// setTimeout(()=>{
//     observable$.subscribe(variable => console.log("Subscription 2:",variable))
// },1000)
//unsubscribe
// setTimeout(()=>{
//     console.log("Unsubscribed")
//     subscription.unsubscribe()
//  } ,3000)
//---------------------------------------------------------------
//empty Observable
// const observableEmpty$ = new Observable(Subscriber => console.log("Observable Executed.")).subscribe(observer => console.log("Subscriber Executed"));
//multiple value emitted
// const observable$ = new Observable<string>((Subscriber) => {
//   console.log("Observable Executed");
//   Subscriber.next("Alice");
//   Subscriber.next("Ben");
//   setTimeout(() => {
//     Subscriber.next("Charlie"), Subscriber.complete();
//   }, 2000);
//   //After running complete logic , the subscription to be in end  and Teardown logic was run . 
//   //In this terdown logic used by the observable basically for clean up itself(the memories, to provide cancellation logic ) 
//   //for http call it aborted the request
//   return () => console.log("Teardown after complete state")
// });
// console.log("Before subscribe");
// observable$.subscribe({ 
//     next: (observer) => console.log(observer) ,
//     complete: ()=>console.log("Complete state")
// });
// console.log("After subscribe");
// so in the above code the observable can emit notifications in both synchronous and asynchronous way
//error 
var observable$ = new rxjs_1.Observable(function (Subscriber) {
    console.log("Observable Executed");
    Subscriber.next("Alice");
    Subscriber.next("Ben");
    setTimeout(function () { return Subscriber.next("Charlie"); }, 2000);
    setTimeout(function () { return Subscriber.error(new Error('Failure')); }, 4000);
    return function () { return console.log("Teardown phase"); };
});
console.log("Before subscribe");
observable$.subscribe({
    next: function (value) { return console.log(value); },
    error: function (error) { return console.log(error.message); },
    complete: function () { return console.log("completed"); }
});
console.log("After subscribe");
