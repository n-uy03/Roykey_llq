$(document).ready(function() {
    $('#check').change(function() {
      var isChecked = $(this).prop('checked');
      var mobileContainer = $('#navbar-mobile');
      var logoMobile = $('#lg-mobile');

      if (isChecked) {
        mobileContainer.addClass('checked-container');
        logoMobile.attr('src', 'imgs/mobile/lgdo.png');
      } else {
        mobileContainer.removeClass('checked-container');
        logoMobile.attr('src', 'imgs/mobile/logo_trang.png');
      }
    });


    $('.checkbox-mobile-menu').change(function() {
        if ($(this).is(':checked')) {
            $('body').addClass('scroll-disabled');
            $('.header').addClass('#navbar');
        } else {
            $('body').removeClass('scroll-disabled');
            $('.header').removeClass('#navbar');
        }
    });
  });
  
  