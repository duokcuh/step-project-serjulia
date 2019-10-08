/*Products - Add to card*/

$productsList.on('click', '.add-to-cart-btn', event => {
    const $productToCard = $(event.currentTarget).closest('.product-item');
    console.dir($productToCard.children('.product-img').attr('src'));
    console.dir($productToCard.find('.product-title').text());
    console.dir($productToCard.find('.product-footer-price').text());
    console.dir($productToCard.find('.product-footer-price-old').text());

    const $cartDetailsTemplate = $('#cart-details-template');
    console.dir($cartDetailsTemplate.find('.modal-cart-details-img').attr('src'));
    console.dir($cartDetailsTemplate.find('.modal-cart-details-name').text());
    console.dir($cartDetailsTemplate.find('.modal-cart-details-price').text());
    console.dir($cartDetailsTemplate.find('.modal-cart-details-old-price').text());
});