import { Observable, interval } from "rxjs";

const Observable$ =new Observable<number>(subscriber =>{
    let counter= 1;
    const interval =setInterval(()=>{
        // you can see even after appling unsubscribe the counter goes on increase for that need to use cleanInterval()
        console.log("Counter : ",counter)  
        subscriber.next(counter++)
    },2000)
    return ()=>{ 
        console.log("Last Interval : ",interval)
        clearInterval(interval);}
}).subscribe(value => console.log(value));

setTimeout(()=>{
    console.log("Unsubscribe works")
    Observable$.unsubscribe()
},7000);