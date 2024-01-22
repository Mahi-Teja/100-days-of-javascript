const billAmount = document.querySelector("#bill-amount");
const tip = document.querySelector("#tip");
const noOfPeople = document.querySelector("#split");
const tipCalculate = document.querySelector(".calculate");
const output = document.querySelector(".output")

function calculateTip(){
    // formula = amount + tip / people 
    if(billAmount.value=="" ||tip.value==-1 ||noOfPeople.value=="" ){
        
        alert("Enter the Inputs");

    }else if((billAmount.value!="" ||tip.value>=0 ||noOfPeople.value!="" )){
        
        let amount = Number(billAmount.value);
        let tipAmount =  Number(tip.value);
        let people =  Number(noOfPeople.value);
        let finalTip = amount+((amount*tipAmount)/100)
        let share = (finalTip/people).toFixed(2);
        
        output.innerHTML = +share+" each.";
            
    }else{
        alert("Invalid Inputs");
    }
    
}
