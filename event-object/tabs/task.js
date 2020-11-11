let tab = Array.from(document.getElementsByClassName("tab"))
let content = document.getElementsByClassName("tab__content")
let avtineContent = document.getElementsByClassName("tab__content_active")

function getTabActive(a){
    return a.classList[1] === "tab_active"
}

for(let i = 0; i < tab.length; i++){
    function element () {    
        if(tab[0].classList[0] === "tab"){
            let a = tab.findIndex(getTabActive)
            tab[a].classList.remove("tab_active")
            avtineContent[0].classList.remove("tab__content_active")
            tab[i].classList.add("tab_active")
            content[i].classList.add("tab__content_active")                         
        }          
    }      
    tab[i].addEventListener("click", element)
}










