const numericals = document.querySelectorAll("[numerical-item]");
const dispay = document.querySelector("[value-in-out]");
const clearField = document.querySelector("[clear-field]")
const del = document.querySelector("[delete-item]")
const result = document.querySelector("[evaluate-exp]")
const powerStatus = document.querySelector("[cal-power]")
const invalidExp = "ERROR"

    
// numbers event + fn
numericals.forEach(function(key){
    key.addEventListener("click",function(){
        clearError()
        dispay.value += this.innerHTML
    })
})
// = event + fn
result.addEventListener("click",function(){
    let exp = dispay.value;
    try{
        dispay.value = eval(exp);
    }
    catch(err){
        dispay.value = invalidExp
    }
    
})
// AC event
clearField.addEventListener("click",clearDisplay)


//delete last digit  event + fn
del.addEventListener("click",function(){
    clearError()
    val = dispay.value.toString()
    val = val.slice(0,-1)
    dispay.value = val
})

    

// clear display function
function clearDisplay(){
    dispay.value=""
}
// error or undefined Clear function
function clearError(){
    if(dispay.value == invalidExp||dispay.value=="undefined"){
        clearDisplay()
    }
}