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

  $("#Nickname-swinepig,#Email-409989258-qq-com").hover(function(){
    $(this).addClass("about_item_hover");
    },function(){
    $(this).removeClass("about_item_hover");
  });

})(jQuery);
