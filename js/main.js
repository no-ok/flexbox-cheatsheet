$(function() {
    $(document).on('click', 'a.link-to[href^="#"]', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var $id = $(id);
        var mainHeader = $('.main-header').height() + 20;
        var pos = $id.offset().top;

        if ($id.length === 0) {return;}
      
        $('body, html').animate({
          scrollTop: pos - mainHeader
        }, 800);
    });


    $('.spoiler-title').on('click', function(){
        $(this).parent().toggleClass('open')
        $(this).parent().find('.spoiler-content').slideToggle(300);
    })

     $('.aside-toggle').on('click', function(){
       $('#page-overlay').fadeIn();
       $('.aside-nav').addClass('active');
       $('body').addClass('fixed');
     });

     $('#page-overlay').on('click', function(){
       $(this).fadeOut();
       $('.aside-nav').removeClass('active');
       $('body').removeClass('fixed');
     });

     $('.aside-nav-close').on('click', function(){
       $('#page-overlay').fadeOut();
       $('.aside-nav').removeClass('active');
       $('body').removeClass('fixed');
     });

     $('.link-to').on('click', function(){
       $('#page-overlay').fadeOut();
       $('.aside-nav').removeClass('active');
       $('body').removeClass('fixed');
     });


     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('.aside-toggle').outerHeight();

     $(window).scroll(function(event){
        didScroll = true;
     });

     setInterval(function() {
         if (didScroll) {
            hasScrolled();
            didScroll = false;
         }
     }, 250);

    function hasScrolled() {
         var st = $(this).scrollTop();

         if(Math.abs(lastScrollTop - st) <= delta)
            return;
         if (st > lastScrollTop && st > navbarHeight){
            $('.aside-toggle').removeClass('show-toggle').addClass('hide-toggle');
         } else {
            if(st + $(window).height() < $(document).height()) {
                $('.aside-toggle').removeClass('hide-toggle').addClass('show-toggle');
            }
        }
        lastScrollTop = st;
    }
});







