const lefmenu = $("#active-menu")
const maubgc= $(".bcg")
const mauc = $(".i")
const menu_dr =$(".drop-menu")
const sub_item= $(".subitem")
const menu_hd=$("#submenu-headerdk")
const nen_mobile = $(".mobile-container")
const mau_trok=$(".m-trok")

$(document).ready(function() {
    var lastScrollTop = 0; // Biến lưu trữ vị trí cuối cùng của cuộn trang
  
    $(window).scroll(function() {
      var currentScrollTop = $(this).scrollTop();
  
      if (currentScrollTop > 800) {
        if (currentScrollTop > lastScrollTop) {
            
        $('#navbar').css('top', '-60px'); 
        lefmenu.addClass('left-item')
        maubgc.addClass('coler-bcg')
        mauc.addClass('mauchu')
        menu_dr.addClass('dropmenu')
        sub_item.addClass('sub-p')
        menu_hd.addClass('menu-hd')
        nen_mobile.addClass('nen-mobile')
        mau_trok.addClass('mau-trok')

        $("#logo-header").attr("src", "imgs/lg.jpg");
        $("#icon-search").attr("src", "imgs/icon/search_den.jpg");
        $("#icon-VI").attr("src", "imgs/icon/vi_den.jpg");
        $("#icon-dt").attr("src", "imgs/icon/dt_den.jpg");
        $(".icon-x").attr("src", "imgs/icon/x_den.png");
        $("#lg-mobile").attr("src", "imgs/mobile/lgdo.png");
        } else {
          $('#navbar').css('top', '0'); 

        }
      } else {
        $('#navbar').css('top', '0');
        lefmenu.removeClass('left-item') 
        maubgc.removeClass('coler-bcg')
        mauc.removeClass('mauchu')
        menu_dr.removeClass('dropmenu')
        sub_item.removeClass('sub-p')
        menu_hd.removeClass('menu-hd')
        nen_mobile.removeClass('nen-mobile')
        mau_trok.removeClass('mau-trok')
        $("#logo-header").attr("src", "imgs/logo.png");
        $("#icon-search").attr("src", "imgs/icon/search_trang.png");
        $("#icon-VI").attr("src", "imgs/icon/vi_trang.png");
        $("#icon-dt").attr("src", "imgs/icon/dt_trang.png");
        $(".icon-x").attr("src", "imgs/icon/icon x.png");
        $("#lg-mobile").attr("src", "imgs/mobile/logo_trang.png");
      }
  
      lastScrollTop = currentScrollTop;
    });

   
  });
  