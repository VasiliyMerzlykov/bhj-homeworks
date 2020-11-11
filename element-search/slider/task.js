const nextSlide = document.getElementsByClassName("slider__arrow slider__arrow_next")[0];
const lastSlide = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0];
let listElement = document.getElementsByClassName("slider__item");
let arr = Array.from(listElement);

function getStr(arrs){
    return arrs.classList[1] === "slider__item_active"
};

nextSlide.onclick = function (){
    let a = arr.findIndex(getStr);   
    arr[a].classList.remove("slider__item_active");    
    (a == arr.length - 1) ?arr[0].classList.add("slider__item_active"):arr[a+1].classList.add("slider__item_active");
};

lastSlide.onclick = function (){
    let a = arr.findIndex(getStr);   
    arr[a].classList.remove("slider__item_active");    
    (a == 0)? arr[arr.length - 1].classList.add("slider__item_active"):arr[a-1].classList.add("slider__item_active");     
};

