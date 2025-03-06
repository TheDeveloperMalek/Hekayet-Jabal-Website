$(window).on("load", function () {
  $("#loading-page")
    .delay(800)
    .fadeOut(500, function () {
      $(this).hide();
    }),
    $("#loading-page .load")
      .delay(300)
      .fadeOut(500, function () {
        $(this).hide(), (document.body.style.overflow = "auto");
      });
});
//hide and show back to top button
var back = document.getElementById("backToTopBtn");
window.onscroll = function () {
  scrollY >= (document.documentElement.scrollHeight - window.innerHeight) * 0.4
    ? (back.style.opacity = "1")
    : (back.style.opacity = "0");
};
