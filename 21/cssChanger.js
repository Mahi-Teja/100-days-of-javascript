const width = document.querySelector("#width");
const blur = document.querySelector("#blur");
const borderRadius = document.querySelector("#border-radius");
const padding = document.querySelector("#padding");
const color = document.querySelector("#color");
const subject = document.querySelector("[subject]");

let defColor = color.value
subject.style.backgroundColor=`${defColor}`

function changePadding(){
    let pad = padding.value/2
    console.log(pad)
    subject.style.padding=`${pad}%`
}
function changeColor(){
    let col = color.value
    console.log(col)
    subject.style.backgroundColor=`${col}`
    
}

function changeBlur(){
    let blr = blur.value/4
    console.log(blr)
    subject.style.filter=`blur(${blr}px)`
    
}
function changeBorderRadius(){
    let brr = borderRadius.value
    console.log(brr)
    subject.style.borderRadius=`${brr}%`
    
}
function changeWidth(){
    let wd = width.value
    console.log(wd)
    subject.style.width=`${wd}%`
    subject.style.height=`${wd}%`

}