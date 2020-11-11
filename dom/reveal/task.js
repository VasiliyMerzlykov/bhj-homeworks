let ele = document.getElementsByClassName("reveal")
console.log(ele)
console.log("top: " + ele[0].getBoundingClientRect().top)
console.log("bot: " + ele[0].getBoundingClientRect().bottom)
let win = window.innerHeight
console.log(win)

function a (){
    if(ele[0].getBoundingClientRect().top < win) {
        ele[0].classList.add("reveal_active")
    }
}

window.addEventListener("scroll", a)