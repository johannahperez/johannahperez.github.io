$(document).ready(function() {
  var searchBarPosition = $(".navbar").offset().top;

  $(window).scroll(function() {
    console.log("hi!")
    var scrollHeight = $(window).scrollTop();
      if (scrollHeight > searchBarPosition) {
        $(".navbar").addClass("fixed");
      } else {
        $(".navbar").removeClass("fixed");
      }
})

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.container', '.parallax', '.container-2').css('top', -(scrolled * 0.6) + 'px');
}

$(window).scroll(function() {
    parallax();
});

$("a").click(function() {
  $('html, body').animate( {
    scrollTop: $( $.attr(this, 'href')).offset().top
  }, 1000); return false
})


});
