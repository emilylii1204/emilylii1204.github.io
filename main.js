$(document).ready(function() {
	$(".navbar .collection").click(function() {
		$(".navbar .list").animate({
			opacity: 0
		}, function() {
			$(".navbar .list").animate({
				opacity: 1
			});
		});
	});
});


$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});