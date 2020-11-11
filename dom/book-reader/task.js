let font = Array.from(document.getElementsByClassName("font-size")) 
let book = document.getElementsByClassName("book")
console.log()




for(let i = 0; i < font.length; i++){
    font[i].onclick = function() {
        let a = font.findIndex(item => item.classList.contains("font-size_active"))
        font[a].classList.remove("font-size_active")
        font[i].classList.add("font-size_active")
        if(font[i].classList.contains("font-size_small")){
            book[0].classList.remove("font-size_big")
            book[0].classList.add("font-size_small")
        } else if(font[i].classList.contains("font-size_big")){
            book[0].classList.remove("font-size_small")
            book[0].classList.add("font-size_big")
            
        } else if(true){
            book[0].classList.remove("font-size_big")
            book[0].classList.remove("font-size_small")
        }
        return false
    }
}

