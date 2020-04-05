$(document).ready(function() {
    var offset = $('.main-nav').offset();
    var offsetTrigger = offset.top;
    var navHeight = $('.main-nav').height();
    $(window).scroll(function() {
        if( $(this).scrollTop() > offsetTrigger )  {
            $('.main-nav').addClass('fixed');
            if (window.matchMedia("(max-width: 1140px)").matches) {
                $('main').css('padding-top', navHeight);
            }
        }
        else {
            $('.main-nav').removeClass('fixed');
            $('main').css('padding-top', 'initial');
        }
    });
    $(window).resize(function() {
        offset = $('.main-nav').offset();
        offsetTrigger = offset.top;
        navHeight = $('.main-nav').height();
    });

    /* bio in modal */
    $('.show-bio').on('click', function() {
        $('.overlay').addClass('on');
        $('body').addClass('noScroll');
        $(this).prev().find('.bio').addClass('modal').show();
    });
    $('.overlay, .bio').on('click', function() {
        $('.overlay').removeClass('on');
        $('body').removeClass('noScroll');
        $('.bio.modal').removeClass('modal').hide();
    });
    /* end bio in modal */
});
