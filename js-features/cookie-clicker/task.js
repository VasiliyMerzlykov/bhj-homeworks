const image = document.getElementById("cookie")
const number_clicks = document.getElementById("clicker__counter")
const time = document.getElementById("time")
setInterval(() => time.textContent = +time.textContent + 1, 1000)
const speed = document.getElementById("speed")
const max_speed = document.getElementById("max_speed")

image.onclick = function() {
    if(image.width === 200){
        image.width += 300
    } else if(image.width === 500){
        image.width -= 300
    }  
    number_clicks.textContent = +number_clicks.textContent + 1
    speed.textContent = (+number_clicks.textContent / +time.textContent).toFixed(2)
    if(speed.textContent == Infinity) speed.textContent = 0  
    if(+max_speed.textContent < +speed.textContent) max_speed.textContent = +speed.textContent  
}




