let zoom= 1
const zoomSpeed =0.1
document.addEventListener("wheel",function (e) {
    
    if(e.deltaY>0){
        document.querySelector("[main]").style.transform=`scale(${zoom += zoomSpeed})`
        console.log(e.deltaY)
    }else{
        document.querySelector("[main]").style.transform=`scale(${zoom -= zoomSpeed})`
        console.log("e.deltaY")
    }
    
})
