/*Для якорів*/

$(document).ready(function(){
    $(".top-menu-big-screen").on("click","a", function (event) {
        event.preventDefault();
        const $elementClick  = $(this).attr('href');
        const $destination = $($elementClick).offset().top;
        $('body,html').animate({
            scrollTop: $destination
        }, 1000);
    });
});


/*Для ініціалізації Tooltip*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});



/*Carousel в Furniture Gallery section*/
$('#carousel-example').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 6;
    var totalItems = $('.carousel-item-2').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            if (e.direction=="left") {
                $('.carousel-item-2').eq(i).appendTo('.carousel-inner-2');
            }
            else {
                $('.carousel-item-2').eq(0).appendTo('.carousel-inner-2');
            }
        }
    }
});

