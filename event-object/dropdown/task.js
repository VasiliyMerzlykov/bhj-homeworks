let menu = document.getElementsByClassName("dropdown__value")
let list = document.querySelectorAll("ul.dropdown__list")
let item = document.querySelectorAll("li > a")
let content = document.getElementsByClassName("dropdown__value")

item = Array.from(item)

menu[0].onclick = function () {
    list[0].classList.add("dropdown__list_active")
}

for(i = 0; i < item.length; i++){
    item[i].onclick = function(event) {
        let target = event.currentTarget.textContent;
        content[0].textContent = target;
        let arrDropLink = Array.from(document.getElementsByClassName("dropdown__link"))
        list[0].classList.remove("dropdown__list_active")
        return false;
    }
}