 function track() {
	$("#items li").on("click", function(e) {
			$(this).toggleClass("onsquare");
		}	
	);
 };
//$.ready(function () { bingo()});
$(window).on('load', function() { track()});

