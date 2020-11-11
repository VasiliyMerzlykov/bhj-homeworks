const click = document.getElementsByClassName("menu__link")

for(let i = 0; i < click.length; i++){
    const subMenus = click[i].getElementsByClassName("menu__sub");    
    console.log(subMenus)
};