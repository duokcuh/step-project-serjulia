/*Product item hover*/
$('.product-item').on('mouseenter mouseleave', (event) => {
    $(event.currentTarget).find('.product-overlay').fadeToggle(200);
    $(event.currentTarget).find('.product-title').toggleClass('text-dark');
    $(event.currentTarget).find('.product-footer-price').toggleClass('bg-dark');
});

/*window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) console.log(window.innerWidth);

});*/

/*quantity of product images*/
let imgQuantity = 20;

setImgLink();

$('.products-add-more-btn').click(() => {
    if (window.innerWidth >= 1200) {
        for (let i = 1; imgQuantity > 0 && i <= 9; imgQuantity--, i++) addProduct();
        setImgLink();
    } else if (window.innerWidth >= 768) {
        for (let i = 1;  i <= 4; imgQuantity--, i++) {
            const $mdLast = $('.product-item.d-md-block:last');
            if ($mdLast.next().length)
                $mdLast.next().addClass('d-md-block');
                else if(imgQuantity > 0) addProduct();
                else $mdLast.next().addClass('d-md-block');
        setImgLink();
        }
    }

});


function setImgLink() {
    const $productImg = $('.product-img');
    imgQuantity = 20 - $productImg.length;
    $productImg.each(i => $productImg.eq(i).attr('src', `img/products/furniture/${i+1}.png`));
}
function addProduct() {
    $('#product-item-template').clone().removeAttr('id').fadeIn(300).appendTo($('.products-list'))
}