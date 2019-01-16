
$(document).ready(function () {
  //set listener to the form submit event
  $('#sizePicker').submit(function (event) {
    event.preventDefault();
    //get Grid sizes
    var gridHeight = $('#inputHeight').val();
    var gridWidth = $('#inputWeight').val();

    //pass the value of the grid sizes as arguments to the makeGrid function.
    makeGrid(gridHeight, gridWidth);
    applyColor();
  });
});

//create the grid using the value of the grid sizes
  function makeGrid(height, width) {
  $('tr').remove();
  for (var row = 1; row <= height; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (var col = 1; col <= width; col++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
};

//add color to the cell when clicked
var applyColor = function applyColor() {
  var cells = $('td');
  cells.click(function () {

    //extract the current value of the color picker
    var color = $('#colorPicker').val();

    //check for style attribute and remove or add it.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
};






