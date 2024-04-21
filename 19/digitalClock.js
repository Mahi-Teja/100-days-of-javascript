const hr = document.querySelector("[hr]")
const min = document.querySelector("[min]")
const sec = document.querySelector("[sec]")
const clock = document.querySelector("[clock]")

const d = new Date();
clock.innerHTML = d.toLocaleTimeString()


// hr.innerHTML = d.getHours().toString().padStart(2, '0')
// min.innerHTML = d.getMinutes().toString().padStart(2, '0')
// sec.innerHTML = d.getSeconds().toString().padStart(2, '0');
    // setInterval(()=>{
    //     const d = new Date();
    //     hr.innerHTML = d.getHours().toString().padStart(2, '0')
    //     min.innerHTML = d.getMinutes().toString().padStart(2, '0')
    //     sec.innerHTML = d.getSeconds().toString().padStart(2, '0');
        
    // },1000)
    

    setInterval(()=>{
        date = new Date()
        clock.innerHTML = date.toLocaleTimeString()
    },1000)

