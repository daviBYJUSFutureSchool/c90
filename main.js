canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImageImgTag = new Image();
	backgroundImgTag.onload = uploadBackground;
	backgroundImage.src = backgroundImage;
	roverImgTag = new Image();
	roverImgTag.onload = uploadrover;
	roverImgTag.src = roverImage;



}

function uploadBackground() {
	ctx.drawImage(backgroundImageImgTag, 0, 0, canvas.width, canvas.height);

	
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}
	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
		  up();
		  console.log("cima")
		}
		if(keyPressed == '40')
		{
			down();
		  console.log("baixo")
		}

		//Atividade Adicional
		if(keyPressed == '37')
		{
			left();
		  console.log("esquerda")
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita")
			
		}
		//Fim da Atividade Adicional
}
//Coberto na C85. 
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando a seta para cima for pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando a seta para baixo for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("When left arrow is pressed,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("When right arrow is pressed,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover();
   }
}
	