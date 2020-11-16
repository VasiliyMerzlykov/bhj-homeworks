const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

[...product].map(item => {
    item.addEventListener('click', e =>{
        const value = item.querySelector('.product__quantity-value')
        const id = item.dataset.id;        
        const img = item.querySelector('.product__image').getAttribute('src');
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        const elementParent = cartProduct.find((elem) => {
            return elem.dataset.id === id;
        }); 
        
        if(e.target.matches('.product__quantity-control_dec')){
            value.innerText == 1 ? value.innerText : --value.innerText;
        };
        if(e.target.matches('.product__quantity-control_inc')){
            ++value.innerText;
        };                   
            
        if (elementParent) {
            if (e.target.matches('.product__add')) {
                let valueAdd = Number(elementParent.querySelector('.cart__product-count').innerText);
                elementParent.querySelector('.cart__product-count').innerText = valueAdd + (+value.innerText);
            }
        } else if(e.target.matches('.product__add')){
            cartProducts.insertAdjacentHTML('beforeEnd', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${value.innerText}</div>
            </div>`);
        };
    })
})

