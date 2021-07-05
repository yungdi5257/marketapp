$(window).scroll(function () {
  var height = $(document).scrollTop();

  if (height > 100) {
    // $(".logo").css("display", "none");
    $(".logo").addClass("show");
  } else {
    // $(".logo").css("display", "block");
    $(".logo").removeClass("show");
  }
});

AOS.init({
  easing: "ease-out-back",
  duration: 2000,
});
