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
 
	l2.background("#d8e2dc");
	
	
	  //odradi();
	
	
	
}
 
										var vrm = 0;
										var prosliX = 0; var prosliY = 0;
									 function wow(){
										 vrm+=1;
										 lx.colorMode(HSB,100);
										 var dista = dist(mouseX, mouseY, prosliX, prosliY)/10;
										 lx.fill((dista*2)%100, 80, 80); 
										 lx.noStroke();
											lx.strokeWeight(dista/5);
											lx.stroke(255);
									 if(dista>25) {lx.noFill(); lx.noStroke();}
										 var rrad = dista + dista*sin(radians(vrm));
										  
										 for(var pe = 0; pe < 1; pe = pe + 1/(dista*1)){
											var x55 = prosliX + pe*(mouseX - prosliX);
											 
											var y55 = prosliY + pe*(mouseY - prosliY);
											
											var radijan = dista*x55/(1000*pe);
											
											lx.ellipse(x55, y55, radijan+5, radijan+5);
										  }
										   
										 lx.ellipse(mouseX , mouseY , dista+5, dista+5);
										 
										 prosliX = mouseX; prosliY = mouseY;
										 
										 
										 
										 
									 }

 
 
 
 function odradi(){
	 for(var crx = 0; crx <= width; crx+=(width/nx)){
		l2.strokeWeight(1);
		l2.stroke("#FFFFFF");
		l2.line(crx, 0, crx, height); 
	}
	for(var cry = 0; cry <= height; cry+=(height/ny)){
		l2.strokeWeight(1);
		l2.stroke("#FFFFFF");
		l2.line(0, cry, width, cry); 
	}
	 
	 
	 
 }
 
  function odradi1(){
	 for(var crx1 = 0; crx1 <= width; crx1+=(width/nx)){
		 strokeWeight(4);
		 stroke("#FFFFFF");
		 line(crx1, 0, crx1, height); 
	}
	for(var cry1 = 0; cry1 <= height; cry1+=(height/ny)){
		 strokeWeight(4);
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
			l1.fill("#fff");
			l1.noStroke();
			 
			 l1.rect(x, y, dx-0.5, dy-0.5);
			wow();
   }
   
 
  pcellx = cellx;
  pcelly = celly; 
  image(l2, 0, 0); 
   image(lx, 0, 0);
  
}

function mouseClicked(){
	if(mouseX>1221 && mouseX<(1221+120)){
		 
		  if(mouseY> 60*0    && mouseY<60*0 + 42){    lx.clear(); 
																 }
		else if(mouseY>0 + 60*1 -1 && mouseY<60*1 + 40) saveImage();
		 
		
	}
	 
	 
	
}

function saveImage(){
	 var l3 = createGraphics(width, height); 
   l3.background("#252422");
   l3.image(lx, 0, 0);
   l3.save("slika.jpg"); 
	
}