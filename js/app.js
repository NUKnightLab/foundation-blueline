$(document).ready(function(){
  // Change the size of the style guide div to mimic various device widths
  $('#change-view.sub-nav dd').click(function(){
    $('#style-guide').removeClass().addClass($(this).attr('class'));
  });
  $(".accordion").on("click", "li", function (event) {
        event.preventDefault();
        if($(this).hasClass('active')){
            $("li.active").removeClass('active').find(".content").slideUp("fast");    
        }
        else {
            $("li.active").removeClass('active').find(".content").slideUp("fast");
            $(this).addClass('active').find(".content").slideToggle("fast");    
        }
  });
});
