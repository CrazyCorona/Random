var timer=
{
	val:0,
	type:true
};
var dot=
{
	x:100,
	y:100,
	diameter:10	,
	type:0,
	col:{
		r:10,
		g:10,
		b:10
	}
};

function setup() {
	createCanvas(windowWidth, windowHeight);
		background(255);
		timer.val=0;
}

function draw()
{

	randomise();
	noStroke();
	fill(dot.col.r,dot.col.g,dot.col.b,100);

	if(dot.type<=1)
	{
	ellipse(dot.x,dot.y,dot.diameter,dot.diameter);
	}
	else if (dot.type<=2) {
		rect(dot.x,dot.y,dot.diameter,dot.diameter);
	}
	else if (dot.type<=3&&dot.type>=2.7) {
		stroke(dot.col.r,dot.col.g,dot.col.b);
		var newx=random(-dot.diameter/100,dot.diameter/100);
		var newy=random(-dot.diameter,dot.diameter);
		line(dot.x,dot.y,dot.x+newx,dot.x+newy);
	}
	else{
	}

}

function randomise()
{
	dot.type=random(0,5);
	dot.x=random(0,width);
	dot.y=random(0,height);
	dot.col.r=map(dot.x,0,width,0,255);
	dot.col.g=map(dot.y,0,height,0,255);
	dot.col.b=map(dot.x+dot.y,0,width+height,0,255);
}
