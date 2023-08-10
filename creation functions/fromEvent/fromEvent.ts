import {fromEvent} from 'rxjs';

console.log("Starting")
let triggerButton;
if(typeof document !== undefined){
    console.log("Document exists.")
    triggerButton = document.getElementById('triggerButton');
    console.log(triggerButton);
}
else{
    console.log("Document does not exist")
}

fromEvent<MouseEvent>(triggerButton,'click').subscribe((event)=> console.log(event.type))