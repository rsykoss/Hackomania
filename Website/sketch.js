class Pixie{
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}

	draw(){
		fill(255, 0, 0);
		ellipse(this.x, this.y, this.r);
	}
}


let pixie;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixie = new Pixie(50, 50, 10);
}

function draw() {
	background(0);
	pixie.draw();
	pixie.x = mouseX;
	pixie.y = mouseY;
}