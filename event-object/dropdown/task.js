let btn = document.getElementsByClassName("dropdown__value")
let dropValue = document.getElementsByClassName("dropdown__list")
let link = Array.from(document.getElementsByClassName("dropdown__link"))

btn[0].onclick = () => {
    dropValue[0].classList.contains("dropdown__list_active") ? dropValue[0].classList.remove("dropdown__list_active") : dropValue[0].classList.add("dropdown__list_active")    
}
for(let i = 0; i < link.length; i++){
    link[i].onclick = () => {
        btn[0].textContent = link[i].textContent
        dropValue[0].classList.remove("dropdown__list_active")
        return false
    }
}
