$(document).ready(function () {
  $('.item-menu').hover(
    function () {
      $('.submenu-header').html('');
      var items = $(this).children('.submenu');
      let html = '';
      items.each(function (index, item) {
        html += $(item).html();
      });
      $('.submenu-header').html(html);
      // Hiển thị submenu-header và căn giữa nó
      $('.submenu-header').css({
        'display': 'flex',
        'left': '0%',
        // 'transform': 'translateX(-50%)',
      });
    },
  
  );
  $('.submenu-header').hover(
    function () {
   
    },
 
    function () {
        // Ẩn submenu-header khi bỏ hover ra khỏi nó
        $(this).css('display', 'none');
    }
);
  // $(document).hover(function (event) {
  //   console.log(event.target);
  // }
  // );
});







