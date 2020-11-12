const menu = Array.from(document.querySelectorAll(".menu__link"))

for(let i = 0; i < menu.length; i++){
    menu[i].onclick = () => {
        let elem = menu[i].parentElement.querySelector('.menu_sub')
        // if(elem.classList.contains("menu_active")){
        //     elem.classList.remove("menu_active")
        // } else elem.classList.add("menu_active")
        elem.classList.toggle("menu_active")
        return false;
    };
};
