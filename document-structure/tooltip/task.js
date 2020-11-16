const arr = document.querySelectorAll('.has-tooltip');

[...arr].map(item => {
    item.insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0"></div>');
    item.onclick = function() {            
        item.nextElementSibling.classList.toggle('tooltip_active');
        item.nextElementSibling.textContent = item.title;
        item.nextElementSibling.style.top = `${item.getBoundingClientRect().bottom}px`;
        item.nextElementSibling.style.left = `${item.getBoundingClientRect().left}px`;          
        return false;
    }    
})


