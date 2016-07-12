$(document).ready(function() {
    // Cache DOM
    winWidth = $(window).width();
    winHeight = $(window).height();
    headerHeight = 50;
    $('.section').css({'height': winHeight - headerHeight});
});


$(window).resize(function() {

});
