/*PRODUCTS*/

/*Current and previous product prices*/

const productPrices = [
    {current: 30, old: 35},
    {current: 15, old: 0},
    {current: 25, old: 35},
    {current: 30, old: 0},
    {current: 15, old: 0},
    {current: 25, old: 40},
    {current: 30, old: 0},
    {current: 15, old: 0},
    {current: 25, old: 30},
    {current: 30, old: 0},
    {current: 15, old: 0},
    {current: 25, old: 35},
    {current: 30, old: 0},
    {current: 15, old: 0},
    {current: 25, old: 50},
    {current: 30, old: 0},
    {current: 15, old: 0},
    {current: 25, old: 35},
    {current: 15, old: 0},
    {current: 25, old: 35},
];

const $productsList = $('.products-list');
const $productsMoreBtn = $('.products-add-more-btn');


(function showProducts() {
    for (let i = 2; i <= 9; i++) {
        addProduct();
        if (i > 3) $productsList.children(':last-child').addClass('d-none');
        if (i === 4) $productsList.children(':last-child').addClass('d-md-block');
        if (i > 4) $productsList.children(':last-child').addClass('d-xl-block');
    }
    setProductData();
})();

function addProduct() {
    $('#product-item-template').clone().removeAttr('id').appendTo($productsList);
}

function setProductData() {
    $productsList.children().each((index, elem) => {
        $(elem).children('.product-img').attr('src', `img/products/furniture/${index + 1}.png`);
        $(elem).find('.product-footer-price').text(`$${productPrices[index].current.toFixed(2)}`);
        if (!!productPrices[index].old) {
            $(elem).find('.product-footer-price-old del').text(`$${productPrices[index].old.toFixed(2)}`);
        }
    })
}


/*Product item hover*/

$productsList.on('mouseenter', '.product-item', event => {
    $(event.currentTarget).find('.product-overlay').fadeIn();
    $(event.currentTarget).find('.product-title').removeClass('text-dark');
    $(event.currentTarget).find('.product-footer-price').removeClass('bg-dark');
});
$productsList.on('mouseleave', '.product-item', event => {
    $(event.currentTarget).find('.product-overlay').fadeOut();
    $(event.currentTarget).find('.product-title').addClass('text-dark');
    $(event.currentTarget).find('.product-footer-price').addClass('bg-dark');
});


$productsMoreBtn.click(() => {
    $productsList.children(':not(:first-child)').remove();
    for (let i = 2; i <= productPrices.length; i++) addProduct();
    setProductData();
    $productsMoreBtn.attr('disabled', 'true');
});
