//===================== инициализация слайдера =============================
$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// ================ burger =====================================
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger , .header__nav, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header__links , .header__logo").click(function (e) {
    $(".header__burger , .header__nav, .header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
});
