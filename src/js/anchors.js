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

