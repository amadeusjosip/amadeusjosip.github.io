var canvas;
var grid;
var min_dist = 10;
var cell_size = min_dist*1.414;
var screen_sc = 1.0;

  
 

function reposition_canvas(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
    canvas.style("z-index", "-100");

    grid = []

    min_dist = 10 * screen_sc;
    cell_size = min_dist*1.414;

    for(var y=0; y<height/min_dist; y++){
        var row = [];
        for(var x=0; x<width/min_dist; x++){
            row.push([]);
        }
        grid.push(row)
    }
}

 
  var nx = 60;
  var ny = nx/2;
var l1, l2;
function setup() {  
   rectMode(CORNER);
   background(200);
   boja0 = color("#4d194d");
	boja1 = color("#212f45"); 
	boja2 = color("#006466");
	boja3 = color("#f6f3f0 ");     
	
	boje = [boja0, boja1, boja2, boja3];
	 
	
	
	 
	colorMode(HSB, 100);
	 
    if(windowWidth > windowHeight){
        canvas = createCanvas(windowWidth, windowHeight-0.5);
    }
    else{
        canvas = createCanvas(windowWidth, windowHeight);
    }
    screen_sc = width/1200; 
    reposition_canvas();
	
	l1 = createGraphics(width, height);
  l2 = createGraphics(width, height);
  l5 = createGraphics(width, height);
  l53 = createGraphics(width, height);
  lx = createGraphics(width, height);
  
 
	 
	
}
 
var m=0;
function draw(){
    m+=3.5;
    l2.background("#111");
    for(var x = 18; x < width-5; x+=25){
        for(var y = 36; y < height-25; y+=25){
        l2.noStroke();
        l2.fill("#e7e7e7");
        l2.push();
        l2.translate(x, y);
        var nojz = 10*noise(x*0.0023, y*0.0023);
        var xx = 10*cos(radians(m)+nojz);
        var yy = 10*sin(radians(m)+nojz);
        l2.ellipse(xx, yy, 6, 6);
        l2.pop();
        }
    }

    image(l2, 0, 0);

}