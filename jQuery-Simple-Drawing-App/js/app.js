// Problem : User interaction causes no changes to applications
// Solution : When user interacts, cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;

// WHen clicking on control list items
$(".controls").on("click", "li", function(){
  // De-select sibling elements
  $(this).siblings().removeClass("selected");
  // select clicked element
  $(this).addClass("selected");
  // cache current color
  color = $(this).css("background-color");
});
  
// When add color is pressed
$("#revealColorSelect").click(function(){
  // Show color select or hide it
  changeColor();
  $("#colorSelect").toggle();
});
  
function changeColor() {
 var r = $("#red").val();
 var g = $("#green").val();
 var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}

// When color sliders change
$("input[type=range]").change(changeColor);
  // Update the new color span

// When add color is pressed
$("#addNewColor").click(function(){
  // Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // Select the new color
  $newColor.click();              
});
// On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  // Draw Lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
  


