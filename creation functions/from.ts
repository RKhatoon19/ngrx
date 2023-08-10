import { from } from "rxjs";

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
const promise = new Promise((resolve, reject) => reject("Rejected!"));

const observableFromPromise$ = from(promise).subscribe({
    next: value => console.log(value),
    error: (err) => console.log("Error : ", err),
    complete: () => console.log("Completed!")
})

