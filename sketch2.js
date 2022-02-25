var canvas;
var grid;
var min_dist = 10;
var cell_size = min_dist*1.414;
var screen_sc = 1.0;

  
 

function reposition_canvas(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);

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
frameRate(120);
   rectMode(CORNER);
   background(200);
   boja0 = color("#4d194d");
	boja1 = color("#212f45"); 
	boja2 = color("#006466");
	boja3 = color("#f6f3f0 ");     
	
	boje = [boja0, boja1, boja2, boja3];
	 
	
	
	 
	colorMode(HSB, 100);
	 
    if(windowWidth > windowHeight){
        canvas = createCanvas(1200, 600);
    }
    else{
        canvas = createCanvas(windowWidth, windowWidth);
    }
    screen_sc = width/1200; 
    reposition_canvas();
	
	l1 = createGraphics(width, height);
  l2 = createGraphics(width, height);
  lx = createGraphics(width, height);
 
	l2.background("#f6f3f0");
	
	
	  //odradi();
	
	
	
}
 
										var vrm = 0;
										var prosliX = -1; var prosliY = -1;
									 function wow(){
										 vrm+=1;
										 lx.colorMode(HSB,100);
										 var dista = dist(mouseX, mouseY, prosliX, prosliY)*1;
										 lx.fill((dista*0.04)%100, 80, 80); 
										 lx.noStroke(); 
										 var rrad = 40+dista*sin(radians(vrm)+1);
										 lx.ellipse(mouseX , mouseY , dista, dista);
										 
										 prosliX = mouseX; prosliY = mouseY;
										 
										 
										 
										 
									 }

 
 
 
 function odradi(){
	 for(var crx = 0; crx <= width; crx+=(width/nx)){
		l2.strokeWeight(2);
		l2.stroke("#FFFFFF");
		l2.line(crx, 0, crx, height); 
	}
	for(var cry = 0; cry <= height; cry+=(height/ny)){
		l2.strokeWeight(2);
		l2.stroke("#FFFFFF");
		l2.line(0, cry, width, cry); 
	}
	 
	 
	 
 }
 
  function odradi1(){
	 for(var crx1 = 0; crx1 <= width; crx1+=(width/nx)){
		 strokeWeight(2);
		 stroke("#FFFFFF");
		 line(crx1, 0, crx1, height); 
	}
	for(var cry1 = 0; cry1 <= height; cry1+=(height/ny)){
		 strokeWeight(2);
		 stroke("#FFFFFF");
		 line(0, cry1, width, cry1); 
	}
	 
	 
	 
 }

var indeks = 0;
var pcellx = -1;
var pcelly = -1;
function draw() {
	noStroke();
  var dx = width/nx;
  var cellx = floor(nx*mouseX/width);
  var x = cellx*dx;

  var dy = height/ny;
  var celly = floor(ny*mouseY/height);
  var y = celly*dy;
   
  
  if((pcellx-cellx == 0) && (pcelly-celly == 0))   
      noFill();
     
 
  fill(boje[indeks]);
   if (mouseIsPressed === true){ 
			l1.fill(boje[indeks]);
			l1.noStroke();
			l1.rect(x, y, dx, dy);
			wow();
   }
 
  pcellx = cellx;
  pcelly = celly;
   
   image(l2, 0, 0);
  image(lx, 0, 0);
  image(l1, 0, 0);
  
}

function mouseClicked(){
	if(mouseX>1221 && mouseX<(1221+120)){
		if(mouseY>0 && mouseY<40)indeks = 0; 
		else if(mouseY>0 + 60 && mouseY<60 + 40) indeks = 1;
		else if(mouseY>0 + 60*2 && mouseY<60*2 + 40) indeks = 2;
		else if(mouseY>0 + 60*3 -3 && mouseY<60*3 + 40) indeks = 3;
		else if(mouseY>0 + 60*4 -5 && mouseY<60*4 + 40){  l1.background("#f6f3f0");  
																 }
		else if(mouseY>0 + 60*5 -8 && mouseY<60*5 + 40) saveImage();
		 
		
	}
	 
	 
	
}

function saveImage(){
	 var l3 = createGraphics(width, height); 
   l3.background("#f6f3f0");
   l3.image(l1, 0, 0);
   l3.save("slika.jpg"); 
	
}
