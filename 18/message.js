const submit = document.querySelector("[submit]");
const response = document.querySelector("[response]");

submit.addEventListener("click",()=>{
    const msg = document.querySelector("#message").value;
    if(msg == ""){
        response.innerHTML = "Enter a Message"
        return
    }
    let res = `Your message "${msg}" recieved!!!`
    response.innerHTML = res

})
