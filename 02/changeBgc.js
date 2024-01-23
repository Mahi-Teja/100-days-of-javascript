const changeBg = document.querySelector("#change-bg");
const hexColors =
// [0-9,a-f  ] [Red,green,blue,opacity]
//             [00,00,00,00]

changeBg.addEventListener("click",function(){
//     let r1 = Math.random()*255
// let r2 = 
// let r3 = Math.random()*255

let c1=(Math.floor(Math.random()*255))
let c2=(Math.floor( Math.random()*255))
let c3=(Math.floor( Math.random()*255))

let color = "rgb("+c1+","+c2+","+c3+")"
    document.body.style.backgroundColor=color
    console.log(color)
})
