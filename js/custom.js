$(document).ready(function() {
    $('#js-btn-mr').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-after').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});
$(document).ready(function() {
    $('#js-btn-about').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-aboutus').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});
$(document).ready(function() {
    $('#js-btn-after').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-after').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});
$(document).ready(function() {
    $('#js-btn-tariffs').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-tariffs').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});
$(document).ready(function() {
    $('#js-btn-about-down').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-aboutus').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});
$(document).ready(function() {
    $('#js-btn-after-down').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-after').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});
$(document).ready(function() {
    $('#js-btn-tariffs-down').on('click', function(e) {
        e.preventDefault();
        let top = $('#js-tariffs').offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });
});