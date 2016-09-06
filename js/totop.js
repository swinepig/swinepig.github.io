(function(){
$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

 $("#Nickname-swinepig").hover(function(){
    $(this).addClass("about_item_hover");
    },function(){
    $(this).removeClass("about_item_hover");
  });
  $("#Nickname-swinepig").siblings().hover(function(){
    $(this).addClass("about_item_hover");
    },function(){
    $(this).removeClass("about_item_hover");
  });

$("#nav-menu a").click(function (e) {
		// what tab was pressed
		var whatTab = $(this).index();

		// Work out how far the slider needs to go
		var howFar = 85 * whatTab;


		/* Add the ripple */

		// Remove olds ones
		$(".ripple").remove();

		// Setup
		var posX = $(this).offset().left,
	  posY = $(this).offset().top,
	  buttonWidth = $(this).width(),
	  buttonHeight = $(this).height();

		// Add the element
		$(this).prepend("<span class='ripple'></span>");

		// Make it round!
		if (buttonWidth >= buttonHeight) {
			buttonHeight = buttonWidth;
		} else {
			buttonWidth = buttonHeight;
		}

		// Get the center of the element
		var x = e.pageX +howFar - posX - buttonWidth / 2;
		var y = e.pageY - posY - buttonHeight / 2;

		// Add the ripples CSS and start the animation
		$(".ripple").css({
			width: buttonWidth+20,
			height: buttonHeight+20,
			top: y + 'px',
			left: x + 'px'
		}).addClass("rippleEffect");
	});

})(jQuery);
