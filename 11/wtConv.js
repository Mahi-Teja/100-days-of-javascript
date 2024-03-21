const weightInKg = document.querySelector("[weight-in-kg]");
const convertedWeight = document.querySelector("[converted-weight]")
weightInKg.addEventListener("change",function(){
    let wt = weightInKg.value 
    if(wt===""||wt>='a'&& wt<='z'||wt>='A'&& wt<='Z'){
        convertedWeight.innerHTML="PLease Enter Valid Input"
    }else{
    let pounds = wt * 2.2046;
    console.log(wt)
    convertedWeight.innerHTML=`${pounds} pounds`
    console.log(pounds);
    }
})