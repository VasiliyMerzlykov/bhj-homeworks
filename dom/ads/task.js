let rot = Array.from(document.querySelectorAll("span"))

// function select(){
//     for(let i = 0; i < rot.length; i++){
//         if(rot[i].classList.contains("rotator__case_active") && i < rot.length - 1){
//             rot[i].classList.remove("rotator__case_active")
//             i += 1
//             rot[i].classList.add("rotator__case_active") 
//             console.log("в условиии " + i)
//         }
//         console.log("after " + i)          
//     }
// }

// setInterval(select, 1000)

// console.log(rot[1].classList.contains("rotator__case_active"))

console.log(rot.findIndex(item => item.classList.contains("rotator__case_active")))

function select(){
    let i = rot.findIndex(item => item.classList.contains("rotator__case_active"))
    if(i < rot.length - 1){        
    rot[i].classList.remove("rotator__case_active")
    i += 1
    rot[i].classList.add("rotator__case_active")
    } else {
        rot[i].classList.remove("rotator__case_active")
        rot[1].classList.add("rotator__case_active")
    }
            
}

setInterval(select, 1000)


