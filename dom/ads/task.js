let rot = Array.from(document.querySelectorAll("span"));

function select(){
    let i = rot.findIndex(item => item.classList.contains("rotator__case_active"));
    if(i < rot.length - 1){        
    rot[i].classList.remove("rotator__case_active");    
    rot[i + 1].classList.add("rotator__case_active");
    } else {
        rot[i].classList.remove("rotator__case_active");
        rot[1].classList.add("rotator__case_active");
    } ;          
};

setInterval(select, 1000);


