

$(function() {

    var interval = setInterval(changeSlide, 3000);
    var carouselList = $("#carousel ul");

    function changeSlide() { 
        carouselList.animate ({
            'marginLeft': -640
            }, 500, moveFirstSlide);
        };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
            carouselList.css({
                marginLeft: 0
            });
        }

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.css({
                marginLeft: -640
            });
        }

    function changeSlideBack() {
        moveLastSlide();
        carouselList.animate({
            'marginLeft': 0
        }, 1000);
    }

    $('.btn-right').click(function() {
        clearInterval(interval);
        changeSlide();
    })

    $('.btn-left').click(function() {
        clearInterval(interval);
        changeSlideBack();
    })       
       
});