//change class on scroll
    addEventListener("load", function () {
      $(window).scroll(function() {
          if($(window).scrollTop() >= 100) {
            $('nav').removeClass('nav-style');
            $('nav').addClass('scrolled');
          }

          else {
              $('nav').removeClass('scrolled');
              $('nav').addClass('nav-style');
          }
        });
    });

$(window).resize(function () {
      var viewportWidth = $(window).width();
      if (viewportWidth > 991) {
            $('#navbarNav').removeClass('show');
      }
    });
   addEventListener("load", function () {
      setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
      window.scrollTo(0, 1);
    }
    
    $(window).on('load',function () {
      $(window).scroll(function() {
          if($(window).scrollTop() > 600) {
            $('.homelink').removeClass('active');
            $('.Aboutlink').addClass('active');
          }
          else if ($(window).scrollTop() < 600){
              $('.Aboutlink').removeClass('active');
              $('.homelink').addClass('active');
          }
        });
    });

    $(window).on('load',function () {
      $(window).scroll(function() {
         if ($(window).scrollTop() > 1200){
              $('.Servicelink').addClass('active');
              $('.Aboutlink').removeClass('active');
          }
          else if ($(window).scrollTop() < 1200){
              $('.Servicelink').removeClass('active');
          }
      });
    });

    $(window).on('load',function () {
      $(window).scroll(function() {
         if ($(window).scrollTop() > 2400){
              $('.Contactlink').addClass('active');
              $('.Servicelink').removeClass('active');
          }
          else if ($(window).scrollTop() < 2400){
              $('.Contactlink').removeClass('active');
          }
      });
    });





    $(window).on('load',function () {
      $(window).scroll(function() {
          if($(window).scrollTop() > 3000) {
            document.getElementById("socialMedia").style.display='none';
          }
          else if($(window).scrollTop() < 3000) {
            document.getElementById("socialMedia").style.display='';
          }
        });
    });
   // Select all links with hashes
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { 
                return false;
              } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
              };
            });
          }
        }
      });