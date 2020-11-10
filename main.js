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

