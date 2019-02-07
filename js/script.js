var animate = function() {
    $('.services-mid>div').addClass('animated');
    $('header>section h1').addClass('animated fadeInDownBig');
    $('header>section p').addClass('animated fadeInRightBig');
    $('header>section>a').addClass('animated fadeInUpBig');
    $('.down-side-portfolio>div>a').addClass('animated');
    $('#top-left, #top-right, #bot-left, #bot-right').css('opacity', '0');
    $('#top-left').waypoint(function() {
        $('#top-left').addClass('fadeInLeft');
        $('#top-right').addClass('fadeInRight');
    }, { offset: '80%' });
    $('#bot-left').waypoint(function() {
        $('#bot-left').addClass('fadeInLeft');
        $('#bot-right').addClass('fadeInRight');
    }, { offset: '90%' });
    $('#about-us').waypoint(function() {
      // $('.about-us>section>p').addClass('animated zoomIn');
      $('.about-us-photo').addClass('animated fadeInRightBig');
      $('.about-us>section>p').css('opacity', '1');
      $('.about-us-photo').css('opacity', '1');
    }, { offset: '50%'});
    $('.down-side-portfolio>div').hover(
      function() {
        $(this).find($('.button')).addClass('animated fadeInUp').removeClass('fadeOutDown');
      },
      function() {
        $(this).find($('.button')).addClass('animated fadeOutDown').removeClass('fadeInUp');

      }
    );
    $('#portfolio').waypoint(function() {
        $('.down-side-portfolio>div').addClass('animated fadeInUpBig');
    }, { offset: '80%' });
    $('.banner').waypoint(function() {
        $('.why-us-mid>div').addClass('animated fadeInUpBig');
    }, { offset: '80%' });
};
var banner = function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
}
var scrollMenu = function(event) {
  $('#menu, #header>section, .mobile-menu').on('click', 'a', function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
  });
};
var up = function() {
  $('.logo-footer').on('click', function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
  })
}
var sendMessage = function() {
  $('.btn').on('click', function (event) {
    event.preventDefault();
    $.ajax({
            url: "https://formspree.io/webstudio.dm@gmail.com",
            method: "POST",
            data: {
                name: $('.user-name').val(),
                number: $('.user-phone').val(),
                email: $('.user-email').val(),
                text: $('.user-commit').val()
            },
            dataType: "json"}).done(function(event){
              $('.forma>form').hide();
              $('.message').fadeIn();
            });
  });
};
var mobileMenu = function() {
  $('.mobile-menu-icon').on('click', function(event) {
    event.preventDefault();
    $('.mobile-menu-show').slideToggle();
    $('.mobile-menu-icon').css('display', 'none');
  })
  $('.close-menu').on('click', function(event) {
    event.preventDefault();
    $('.mobile-menu-icon').css('display', 'block');
    $('.mobile-menu-show').slideToggle();
  })
};
var progressBar = function() {
  $('.container-work>div').circleProgress({
    size: 180,
    fill: {
      gradient: ["#139dbd", "#138cc3"]
    }
  });
};
var animateCircle = function() {
  var check = true;
  var num = [0.10, 0.25, 0.50, 0.75, 1];
  $('.container-work').waypoint(function() {
    if (check) {
      for (var i = 0; i < num.length; i++) {
      console.log(num[i]);
      $('.container-work>div:eq('+i+')').circleProgress({value:num[i]});
      check = false;
      }
    }
  }, { offset: '80%' });
};

$(document).ready(function() {
  animate();
  scrollMenu();
  up();
  banner();
  sendMessage();
  mobileMenu();
  progressBar();
  animateCircle();
});
