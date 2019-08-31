const hamburger = document.querySelector('.menu');
const navLink = document.querySelector('nav');
const Links = document.querySelectorAll('ul li');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('Navtoggle');
  Links.forEach(link => {
    link.classList.toggle('fade');
  });
});

//change class on scroll
addEventListener("load", function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('nav').removeClass('nav-style');
      $('nav').addClass('scrolled');
    } else {
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

$(window).on('load', function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('.homelink').removeClass('active');
      $('.Aboutlink').addClass('active');
    } else if ($(window).scrollTop() < 600) {
      $('.Aboutlink').removeClass('active');
      $('.homelink').addClass('active');
    }
  });
});

$(window).on('load', function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1200) {
      $('.Servicelink').addClass('active');
      $('.Aboutlink').removeClass('active');
    } else if ($(window).scrollTop() < 1200) {
      $('.Servicelink').removeClass('active');
    }
  });
});

$(window).on('load', function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 2400) {
      $('.Contactlink').addClass('active');
      $('.Servicelink').removeClass('active');
    } else if ($(window).scrollTop() < 2400) {
      $('.Contactlink').removeClass('active');
    }
  });
});





$(window).on('load', function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 3000) {
      document.getElementById("socialMedia").style.display = 'none';
    } else if ($(window).scrollTop() < 3000) {
      document.getElementById("socialMedia").style.display = '';
    }
  });
});

$(document).ready(function () {
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      const elem = this; // save it so we can use it in the animate
      $('html, body').animate({
        scrollTop: $($(elem).attr('href')).offset().top
      }, 1000);
    }
  });
});