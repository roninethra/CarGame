canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


x= 100;
y= 50;
x2= 100;
y2= 115;
width= 150;
height= 90;
carimage= "top-car-view-png-34878.png";
car2image= "Car1.png"
background= "https://media.istockphoto.com/photos/international-race-track-picture-id1156933946?k=6&m=1156933946&s=612x612&w=0&h=SBnNogBYQgcXLWjfLyZnBANH4ax53ZIj7V9dqxHaARM=";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background;


    car_imgTag= new Image();
    car_imgTag.onload = uploadcar;
   car_imgTag.src= carimage;

    car2_imgTag= new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src= car2image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag, x, y, width, height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, x2, y2, width, height);
}

window.addEventListener("keydown", my_keydown);

function up(){
    if(y>0){
     y= y - 20;
     uploadBackground();
     uploadcar();
     uploadcar2();

 
    }
 }
 
    function down(){
     if(y<=500){
      y=y + 20;
      uploadBackground();
      uploadcar();
      uploadcar2();

  
     }
 }
 
     function right(){
         if(x<=700){
          x=x + 20;
          uploadBackground();
          uploadcar();
          uploadcar2();

          if(x > 700){
            console.log("car1 Won!!");
            document.getElementById("game_status").innerHTML = "Car 1 Won!";
        }
         }
     }
 
         function left(){
             if(x>0){
              x=x - 20;
              uploadBackground();
              uploadcar();
              uploadcar2();

              
             }
             
         }
         function up2(){
            if(y2>0){
             y2= y2 - 20;
             uploadBackground();
             uploadcar2();
             uploadcar();

         
            }
         }
         
            function down2(){
             if(y2<=500){
              y2=y2 + 20;
              uploadBackground();
              uploadcar2();
              uploadcar();

              
          
             }
         }
         
             function right2(){
                 if(x2<=700){
                  x2=x2 + 20;
                  uploadBackground();
                  uploadcar2();
                  uploadcar();

                  if(x2 > 700){
                    console.log("car1 Won!!");
                    document.getElementById("game_status").innerHTML = "Car 2 Won!";
                }
            
                 }
                 
             }
         
                 function left2(){
                     if(x2>0){
                      x2=x2 - 20;
                      uploadBackground();
                      uploadcar2();
                      uploadcar();

                
                
                     }
                 }

                

                 
        
         



function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '65'){
        up2();
        console.log("up2");
    }

    if(keyPressed == '66'){
        down2();
        console.log("down2");
    }

    if(keyPressed == '67'){
        left2();
        console.log("left2");
    }

    if(keyPressed == '68'){
        right2();
        console.log("right2");
    }
}

