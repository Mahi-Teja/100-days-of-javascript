const addToCart = document.querySelector("[addToCart]");
const addToCartBubble = document.querySelector("[addCartBubble]");
const cartBubble = document.querySelector("[cartBubble]") ;
const cart = document.querySelector("[cart]")
let cartItems = 0;
addToCart.addEventListener("click",function(){
    
    add()


})
function cartUpdate(){
    cartBubble.classList.remove('invisible');
    cart.classList.add("shake")
    cartItems++;
    cartBubble.innerHTML = cartItems;
    setTimeout(function(){
        cart.classList.remove("shake")
    },500)
}
function add(){
    addToCartBubble.classList.add("buttonAnimate")
    setTimeout(function(){
        addToCartBubble.classList.remove("buttonAnimate")

        cartUpdate()
    },1000)
}