var mouseEvent="empty";

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="red";

width=5; 

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
mouseEvent="mouseDown";


}

canvas.addEventListener("mousemove",my_mousemove);

        function my_mousemove(e){
    
        current_position_of_mouse_x=e.clientX-canvas.offsetLeft; 
            
        current_position_of_mouse_y=e.clientY-canvas.offsetTop; 
          
        if(mouseEvent=="mouseDown") {
            console.log("Current Position of X & Y coordinates is=");

            console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);

        ctx.beginPath();

        ctx.strokeStyle=color; 

        ctx.lineWidth=width; 

        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,30, 0, 2*Math.PI);

        ctx.stroke();
        
        }
        
            }



function my_mouseup(e){
    mouseEvent="mouseUP";
    
    
    }

    function my_mouseleave(e){
        mouseEvent="mouseleave";
        
        
        }
        