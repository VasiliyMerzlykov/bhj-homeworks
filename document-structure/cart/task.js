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



// const productQuantityControls = Array.from(document.querySelectorAll('.product__quantity-controls'));
// const product = Array.from(document.querySelectorAll('.product'));
// const cartProducts = document.querySelector('.cart__products');
// const cart = document.getElementsByClassName("cart__title");


// for (let i = 0; i < productQuantityControls.length; i++) {
//     console.log(document.querySelector("cart__product"))
//     productQuantityControls[i].addEventListener('click', (event) => {
//         let value = productQuantityControls[i].querySelector('.product__quantity-value');

//         if (event.target.matches('.product__quantity-control_dec')) {
//             if (value.innerText == 1) {
//                 return;
//             }
//             --value.innerText;            
//         } else if (event.target.matches('.product__quantity-control_inc')) {
//             ++value.innerText;          
//         }
//         return value.innerText;
//     })
// }

// for (let i = 0; i < product.length; i++) {
//     product[i].addEventListener('click', (event) => {
//         const cartProduct = Array.from(document.querySelectorAll('.cart__product'));      

//         const id = product[i].dataset.id;
//         const value = Number(product[i].querySelector('.product__quantity-value').innerText);
//         const img = product[i].querySelector('.product__image').getAttribute('src');
        
        // const elementParent = cartProduct.find((elem) => {
        //     return elem.dataset.id === id;
        //     // return elem.dataset.id === event.target.closest('.product').dataset.id;
        // })            
            
        // if (elementParent) {
        //     if (event.target.matches('.product__add')) {
        //         let valueAdd = Number(elementParent.querySelector('.cart__product-count').innerText);
        //         elementParent.querySelector('.cart__product-count').innerText = valueAdd + value;
        //     }            
//         } else {
//             if (event.target.matches('.product__add')) {
//                 cartProducts.insertAdjacentHTML('beforeEnd', `
//                 <div class="cart__product" data-id="${id}">
//                     <img class="cart__product-image" src="${img}">
//                     <div class="cart__product-count">${value}</div>
//                 </div>`);
//             }
//         }
//     })
// }

