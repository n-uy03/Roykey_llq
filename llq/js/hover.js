


document.addEventListener("DOMContentLoaded", function() {
  var mobileItems = document.querySelectorAll(".mobile-item");
  
  mobileItems.forEach(function(item) {
    var link = item.querySelector(".in");
    var image = link.querySelector("img");

    link.addEventListener("click", function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
      var target = item.querySelector(".panel-collapse");

      // Đóng tất cả các panel-collapse khác trước khi mở/collapse panel hiện tại
      document.querySelectorAll('.panel-collapse').forEach(function(panel) {
        if (panel !== target && panel.classList.contains("show")) {
          panel.classList.remove("show");
        }
      });

      // Mở/collapse panel
      target.classList.toggle("show");

      // Thay đổi ảnh khi click
      if (image.getAttribute("src") === "imgs/icon/Chevron_Down.png") {
        image.setAttribute("src", "imgs/mobile/2.png");
      } else {
        image.setAttribute("src", "imgs/icon/Chevron_Down.png");
      }
    });
  });
});




