

translate(width/1000, height/3000);
for (var i = 0; i < 8; i++) {
push();
fill(17,67,16)
rotate(TWO_PI * i / 8);
ellipse(15, 10, 7, 7);
pop();
//green
}
translate(width/6500, height/8000);
for (var i = 0; i < 8; i++) {
push();
fill(212,200,31)
rotate(TWO_PI * i / 8);
ellipse(6, 6, 7, 7);
pop();
//yellow
}





function setup() {
	createCanvas(900, 1000);
	slider = createSlider(0, 300, 0);
	  slider.position(120, 340);

		textSize(20);
		fill(32,32,32);
		text("Y O U T H + C O M P U T I N G",50,-600);

}

function draw() {
	//ge
	var val = slider.value();
	textSize(15)
	fill(105,133,203);
	text("gender equality", 80, 30);
	//e
	textSize(15);
fill(105,133,203);
	text("_____", 300, 30);
//sp
textSize(15)
fill(105,133,203);
text("politics", 540, 30);
//no
textSize(15)
fill(105,133,203);
text("pRoHiBiTiOnS", 780, 30);
///////////slider
if( 20 < val){
	textSize(17);
	text("1965- First form of internet interaction ", 10, 100);
      textSize(17);
			text("Two computers at MIT Lincoln Lab communicate with one another using packet-switching technology", 10, 120);
}
if( 40 < val){
 textSize(17);
 text("1992- The first audio and video are distributed over the Internet ", 10, 150);
			textSize(17);
			text("a scanned .gif version of a shot of CERN’s house band, Les Horribles Cernette was shared. The idea was to prove that", 10, 170);

}

if( 60 < val){
 textSize(17);
 text("1994- The world’s first blog  ", 10, 200);
			textSize(17);
		 text("Twenty-year-old Justin Hall is credited with creating the world’s first internet-based diary/blog,'justins links'", 10, 220);
}
if( 80 < val){
 textSize(17);
 text("2004- Launch of 'The Facebook'  ", 10, 250);
			textSize(17);
		 text("the era of social networking begins ", 10, 270);
}
slider.style('width',windowWidth-200+"px");

}
