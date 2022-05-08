var mouseEvent=  "empty";
var last_position_of_x,last_position_of_y;
canvas= document. getElementById('myCanvas');
ctx= canvas.getContext("2d");
color="black";
width_of__line=1;
canvas .addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
  color =document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;



mouseEvent ="mousedown";
}
canvas.addEventListener("mouseleave",  my_mouseleave);
function my_mouseleave(e)
{
mouseEvent ="mouseleave";
}
canvas.addEventListener("mouseup",  my_mouseup);
function my_mouseup(e)
{
mouseEvent ="mouseup";
}
canvas.addEventListener("mousemove",  my_mousemove);
function my_mousemove(e)
{
c_x=e.clientX - canvas.offsetLeft;
c_y=e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown") {


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= width_of_line;
    
    ctx.moveTo(last_position_of_x, last_position_of_y);

    ctx.lineTo(c_x,c_y);
    ctx.stroke();
}

  last_position_of_x = c_x;
  last_position_of_y = c_y;
 
}