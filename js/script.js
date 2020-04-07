$(document).ready(function(){
    $('.carousel-in').slick({
        dots:false,
        speed:1500,
        slidesToShow: 2,
        autoplay:true,
        prevArrow:"<button type=\"button\" class=\"slick-prev\"><img src='./arrows/left.svg' alt=''></button>",
        nextArrow:"<button type=\"button\" class=\"slick-next\"><img src='./arrows/right.svg' alt=''></button>",
    });
});




new WOW().init();
