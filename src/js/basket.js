/*Модальне вікно для корзини*/
const basket = document.getElementById('basket-wrapper');
const basketItems = document.getElementById('basket-items');
basket.addEventListener('click', () => {
    if (!+basketItems.innerText) {
        basket.dataset.target = '#cartModalCenter-empty'
    } else {
        basket.dataset.target = '#cartModalCenter-full'
    }
});



/*Кнопки +/- в корзині і зміна Total sum*/

const modalCartPlus = document.getElementById('modal-cart-plus');
const modalCartMinus = document.getElementById('modal-cart-minus');
const modalCartQuantity = document.getElementById('modal-cart-quantity');
const price = document.getElementById('modal-cart-sum');
const totalSum = document.getElementById('modal-cart-total-sum');

const modalCartPlus2 = document.getElementById('modal-cart-plus-2');
const modalCartMinus2 = document.getElementById('modal-cart-minus-2');
const modalCartQuantity2 = document.getElementById('modal-cart-quantity-2');
const price2 = document.getElementById('modal-cart-sum-2');

totalSum.innerText = (modalCartQuantity.innerText*price.innerText)+(modalCartQuantity2.innerText*price2.innerText);

modalCartPlus.addEventListener('click', () => {
    modalCartQuantity.innerText++;
    totalSum.innerText = (modalCartQuantity.innerText*price.innerText)+(modalCartQuantity2.innerText*price2.innerText);
    basketItems.innerText = +modalCartQuantity.innerText+(+modalCartQuantity2.innerText);
});

modalCartMinus.addEventListener('click', () => {
    if (modalCartQuantity.innerText>0) {
        modalCartQuantity.innerText--;
        totalSum.innerText = (modalCartQuantity.innerText*price.innerText)+(modalCartQuantity2.innerText*price2.innerText);
        basketItems.innerText = +modalCartQuantity.innerText+(+modalCartQuantity2.innerText);
    }
});

modalCartPlus2.addEventListener('click', () => {
    modalCartQuantity2.innerText++;
    totalSum.innerText = (modalCartQuantity.innerText*price.innerText)+(modalCartQuantity2.innerText*price2.innerText);
    basketItems.innerText = +modalCartQuantity.innerText+(+modalCartQuantity2.innerText);
});

modalCartMinus2.addEventListener('click', () => {
    if (modalCartQuantity2.innerText>0) {
        modalCartQuantity2.innerText--;
        totalSum.innerText = (modalCartQuantity.innerText*price.innerText)+(modalCartQuantity2.innerText*price2.innerText);
        basketItems.innerText = +modalCartQuantity.innerText+(+modalCartQuantity2.innerText);
    }
});