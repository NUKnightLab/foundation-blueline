// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
  // Change the size of the style guide div to mimic various device widths
  $('#change-view.sub-nav dd').click(function(){
    $('#style-guide').removeClass().addClass($(this).attr('class'));
  });
});
