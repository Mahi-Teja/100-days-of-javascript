const textToCount = document.querySelector(".text-to-count");
const countOutput = document.querySelector(".char-count")

let count = 0;


textToCount.addEventListener("keyup",function(){
    let txt = textToCount.value
    count = txt.length;
    countOutput.innerHTML=count
});