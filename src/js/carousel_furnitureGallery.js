/*Carousel в Furniture Gallery section*/

$('#carousel-slider-1').on('slide.bs.carousel', function (e) {

    const $e = $(e.relatedTarget);
    let idx = $e.index();
    const itemsPerSlide = 6;
    const totalItems = $('.carousel-item-1').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            if (e.direction==="left") {
                $('.carousel-item-1').eq(i).appendTo('.carousel-inner-1');
            }
            else {
                $('.carousel-item-1').eq(0).appendTo('.carousel-inner-1');
            }
        }
    }
});

$('#carousel-slider-2').on('slide.bs.carousel', function (e) {

    const $e = $(e.relatedTarget);
    let idx = $e.index();
    const itemsPerSlide = 6;
    const totalItems = $('.carousel-item-2').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            if (e.direction==="left") {
                $('.carousel-item-2').eq(i).appendTo('.carousel-inner-2');
            }
            else {
                $('.carousel-item-2').eq(0).appendTo('.carousel-inner-2');
            }
        }
    }
});

$('#carousel-slider-3').on('slide.bs.carousel', function (e) {

    const $e = $(e.relatedTarget);
    let idx = $e.index();
    const itemsPerSlide = 6;
    const totalItems = $('.carousel-item-3').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            if (e.direction==="left") {
                $('.carousel-item-3').eq(i).appendTo('.carousel-inner-3');
            }
            else {
                $('.carousel-item-3').eq(0).appendTo('.carousel-inner-3');
            }
        }
    }
});

$('#carousel-slider-4').on('slide.bs.carousel', function (e) {

    const $e = $(e.relatedTarget);
    let idx = $e.index();
    const itemsPerSlide = 6;
    const totalItems = $('.carousel-item-4').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            if (e.direction==="left") {
                $('.carousel-item-4').eq(i).appendTo('.carousel-inner-4');
            }
            else {
                $('.carousel-item-4').eq(0).appendTo('.carousel-inner-4');
            }
        }
    }
});




const $sliderImg = $('.furniture-gallery-slider-img');
$sliderImg.click(function() {
    const index = $(this).attr('data-slider');
    const content = $('.furniture-gallery-tab-content-no-active[data-slider="'+ index +'"]');

    $('.furniture-gallery-tab-content-no-active.furniture-gallery-tab-content-active').removeClass('furniture-gallery-tab-content-active');
    content.addClass('furniture-gallery-tab-content-active');
});

const $navLinkTab = $('.nav-link-tab');
$navLinkTab.click(function () {
    const index = $(this).attr('data-tab');
    const content = $('.furniture-gallery-tab-content-no-active[data-tab="'+ index +'"]');

    $('.furniture-gallery-tab-content-no-active.furniture-gallery-tab-content-active').removeClass('furniture-gallery-tab-content-active');
    content.addClass('furniture-gallery-tab-content-active');
});