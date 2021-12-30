canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
greencar_width = 75 ;
greencar_height = 100;
greencar_X = 5;
greencar_Y = 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag , 0 , 0 , canvas.width , canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag , greencar_X , greencar_Y , greencar_width , greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_Y >= 0){
        greencar_Y = greencar_Y-10;
        uploadBackground();
        uploadgreencar();
	}	
} 

function down()
{
	if(greencar_Y <= 300){
        greencar_Y = greencar_Y+10;
        uploadBackground();
        uploadgreencar();
	}	
}

function left()
{
	if(greencar_X >= 0){
        greencar_X = greencar_X-10;
        uploadBackground();
        uploadgreencar();
	}		
}

function right()
{
	if(greencar_X <= 700){
        greencar_X = greencar_X+10;
        uploadBackground();
        uploadgreencar();
	}		
}
