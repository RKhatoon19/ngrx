import { timer, Observable } from "rxjs";

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

const subscriber = timer(2000).subscribe(
    {
        next: observer => console.log(observer),
        complete: () => console.log("Complted!")
    });

setTimeout(() => {
    subscriber.unsubscribe()
    console.log("Unsubscribed!")
}, 1000)