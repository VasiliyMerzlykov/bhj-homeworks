const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

interestCheck.forEach(elem => {
    let interestClosest = elem.closest('.interest');
    const arrInterest = Array.from(interestClosest.querySelectorAll('.interest__check'));
    
	if (interestClosest.querySelector('.interests')) { 
        elem.addEventListener('change', () => { 
            for (let i = 0; i < arrInterest.length; i++) {
                if (elem.checked) {                   
                    arrInterest[i].checked = true;
                } else {                   
                    arrInterest[i].checked = false;
                }
            }
		});
	}
})