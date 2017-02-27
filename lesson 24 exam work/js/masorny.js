jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
 $('.grid').imagesLoaded( function(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        isAnimated: true,
        isFitWidth: true
    });
 });

 $(window).resize(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        isAnimated: true
    }, 'reload');
 });
});