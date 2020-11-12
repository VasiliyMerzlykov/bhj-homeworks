// В момент запуска скрипта, покажите окно #modal_main
const popus = document.getElementById("modal_main")
popus.classList.add('modal_active')

// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
const close = document.getElementsByClassName('modal__close')
console.log(close)
close[0].onclick = () => {
    popus.classList.remove('modal_active')
}

// По нажатию на элемент с классом show-success покажите окно #modal_success
const button = document.getElementsByClassName("show-success")[0]
const showSuccess = document.getElementById("modal_success")
button.onclick = () => {
    popus.classList.remove("modal_active")
    showSuccess.classList.add("modal_active")
}

close[2].onclick = () => {
    showSuccess.classList.remove('modal_active')
    popus.classList.remove('modal_active')
}
