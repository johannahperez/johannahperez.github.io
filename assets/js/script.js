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
  $('.parallax').css('top', -(scrolled * 0.6) + 'px');
}

$(window).scroll(function() {
    parallax();
});


});
