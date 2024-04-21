const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculateBmi = document.querySelector("[bmi]");
const response = document.querySelector("[response]");

calculateBmi.addEventListener("click",()=>{
    response.classList.remove("invisible")
    let wt = weight.value;
    let ht = height.value * 100;
    
    if(!wt && !ht){
        response.style.color="red"
        response.innerHTML = `Enter both height and weight`
        return
    }else{
        response.style.color="blue"
        let bmi = wt / (ht * ht);
        response.innerHTML = `BMI is: ${bmi}`
    }

})
