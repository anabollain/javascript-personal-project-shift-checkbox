'use strict';

const allCheckbox = document.querySelectorAll('.checkbox');

let lastChecked;

function handleCheck(ev){
    //Check if shift key down
    //AND check that the user is checking it
    let inBetween = false;
    if(ev.shiftKey && this.checked){
        //loop over every single checkbox
        allCheckbox.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                //flag that changes to true if the checkbox has just been checked
                //it turns to false once it arrives to the lastChecked
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }   
    lastChecked = this;    
}


for(const checkbox of allCheckbox){
    checkbox.addEventListener('click', handleCheck);
}