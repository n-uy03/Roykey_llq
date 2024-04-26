
  $(document).ready(function () {
    var owl = $('#silder2').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  
    $('#prev-cskh').click(function () {
      owl.trigger('prev.owl.carousel');
    });
  
    $('#next-cskh').click(function () {
      owl.trigger('next.owl.carousel');
    });
  });
  

  




