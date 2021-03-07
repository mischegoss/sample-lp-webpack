import './box-one';
import './box-two';
import './box-three';
import './box-four';

// Toggle all the boxes when button clicked
$(document).ready(function(){
    $("button").click(function(){
      $(".item").toggle();
    });
  });
