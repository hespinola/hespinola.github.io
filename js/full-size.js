$(document).ready(function() {
    // Cache DOM
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var headerHeight = 50;
    $('.section').css({'height': winHeight - headerHeight});
});
