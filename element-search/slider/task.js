let nextSlide = document.getElementsByClassName("slider__arrow_next")[0]
let lastSlide = document.getElementsByClassName("slider__arrow_prev")[0]
let slide = Array.from(document.getElementsByClassName("slider__item"))

nextSlide.onclick = () => {
    let indexSlide = slide.findIndex(item =>item.className === "slider__item slider__item_active")
    // if(indexSlide == slide.length - 1) {
    //     slide[0].classList.add("slider__item_active")
    // };
    // slide[indexSlide].classList.remove("slider__item_active")
    // slide[indexSlide + 1].classList.add("slider__item_active")   
    slide[indexSlide].classList.remove("slider__item_active")
    indexSlide == slide.length -1 ? slide[0].classList.add("slider__item_active") : slide[indexSlide + 1].classList.add("slider__item_active")
}

lastSlide.onclick = () => {
    let indexSlide = slide.findIndex(item =>item.className === "slider__item slider__item_active")
    // if( indexSlide == 0){
    //     slide[slide.length - 1].classList.add("slider__item_active")
    // }
    // slide[indexSlide].classList.remove("slider__item_active");
    // slide[indexSlide-1].classList.add("slider__item_active");
    slide[indexSlide].classList.remove("slider__item_active");
    indexSlide == 0 ? slide[slide.length - 1].classList.add("slider__item_active") : slide[indexSlide-1].classList.add("slider__item_active")
}



