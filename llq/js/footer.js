$(document).ready(function () {

        $('.silder').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

      $('.conten-event-perv').click(function() {
        $('.silder').trigger('prev.owl.carousel');
      });

      // Sự kiện click vào nút next
      $('.conten-event-next').click(function() {
        $('.silder').trigger('next.owl.carousel');
      });
});