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
  $('.container', '.parallax', '.container-2', 'container-3').css('top', -(scrolled * 0.6) + 'px');
}

$(window).scroll(function() {
    parallax();
});

$("a").click(function() {
  $('html, body').animate( {
    scrollTop: $( $.attr(this, 'href')).offset().top
  }, 1000); return false
})

$('.faq_question').click(function() {
		if ($(this).parent().is('.open')){
			$(this).closest('.faqs').find('.faq_answer_container').animate({'height':'0'},500);
			$(this).closest('.faqs').removeClass('open');
			} else{
				var newHeight =$(this).closest('.faqs').find('.faq_answer').height() +'px';
				$(this).closest('.faqs').find('.faq_answer_container').animate({'height':newHeight},500);
				$(this).closest('.faqs').addClass('open');
			}
})

});
