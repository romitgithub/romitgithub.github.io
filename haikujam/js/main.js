function centerVertically(element, container) {
    container = container || element.parentElement;
    var inHeight = $(element).height();
    var conHeight = $(window).height();
    element.style.marginTop = (conHeight - inHeight) / 2 + 'px';
}

if (!$(document.body.parentElement).is('.flexbox')) {

    var $brand = $('.brand');
    var resizeBrand = function () {
        centerVertically($brand[0]);
    };
    window.addEventListener('resize', resizeBrand);
    window.addEventListener('load', resizeBrand);
} else {
    console.log('Supports Felx');
}

var $sameAsWindowHeight = $('.same-as-window-height');
var resizeElements = function () {
    var setHeightSameAsWindowHeight = setHeightSameAsWindowHeight || window.setHeightSameAsWindowHeight;
    $sameAsWindowHeight.each(function (index, element) {
        setHeightSameAsWindowHeight(element);
    });
};

$(function () {
    window.addEventListener('resize', resizeElements);
    window.addEventListener('load', resizeElements);

    $('.haikus').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        vertical: true,
        infinite: true
    });
});



