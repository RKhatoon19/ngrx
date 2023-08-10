import { interval } from "rxjs";
import { Observable } from "rxjs";

const interval$ = new Observable<number>((Subscription) => {
    let counter =0;
  const intervalId = setInterval(() => {
    console.log("Starts interval", "Counter ::", counter);
    Subscription.next(counter++);
  }, 2000);

  return () => {
    console.log("Tear down phase ::::::: Interval id : ", intervalId);
    clearInterval(intervalId);
  };
});

const subscription =interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed!"),
});


setTimeout(() => {
    subscription.unsubscribe()  
    console.log("Unsubscribed!");
},5000)
//---------------------------------------------------

// const interval$ = interval(2000).subscribe( {
// next : val => console.log(val),
// complete: () => console.log("Completed")
// })
//  setTimeout(()=> {
//     interval$.unsubscribe()
//     console.log("Unsbscribe")
// }, 5000)
