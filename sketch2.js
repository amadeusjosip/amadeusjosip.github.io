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
  l5 = createGraphics(width, height);
  l53 = createGraphics(width, height);
  lx = createGraphics(width, height);
 
	l2.background("#f6f3f0");
	
	
	  //odradi();
	
	
	
}
 
										var vrm = 0;
										var prosliX = 0; var prosliY = 0;
									 function wow(){
										 vrm+=1;
										 lx.colorMode(HSB,100);
										 var dista = dist(mouseX, mouseY, prosliX, prosliY)/10;
										 lx.fill((dista*0.04)%100, 80, 80); 
										 lx.noStroke(); 
										 var rrad = 40+dista*sin(radians(vrm)+1);
										 
										 for(var pe = 0; pe < 1; pe = pe + 1/dista){
											var x55 = prosliX + pe*(mouseX - prosliX);
											 
											var y55 = prosliY + pe*(mouseY - prosliY);
											
											lx.ellipse(x55, y55, dista, dista);
										  }
										 lx.ellipse(mouseX , mouseY , dista, dista);
										 
										 prosliX = mouseX; prosliY = mouseY;
										 
										 
										 
										 
									 }

 
 
 
 function odradi(){
	 for(var crx = 0; crx <= width; crx+=(width/nx)){
		l5.strokeWeight(1);
		l5.stroke("#FFFFFF");
		l5.line(crx, 0, crx, height); 
	}
	for(var cry = 0; cry <= height; cry+=(height/ny)){
		l5.strokeWeight(1);
		l5.stroke("#FFFFFF");
		l5.line(0, cry, width, cry); 
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
 
 function ajde(x, y, m){
	 l53.colorMode(HSB, 100);
	 l53.rectMode(CENTER);
	 l53.fill((em*0.1)%100, 80, 80);
	 l53.noStroke();
	 l53.push();
	 l53.translate(x, y);
	 l53.rotate(radians(em));
	 var erx = 30+15*sin(radians(em*3));
	 var ery = erx*0.2; 
	 l53.fill((em*0.1)%100, 80, 80);
	 l53.ellipse(0, 0, erx*2,ery*2);
	 l53.fill((25+em*0.1)%100, 80, 80);
	 l53.ellipse(2, 2, erx*2,ery*2);
	 l53.fill((20+em*0.1)%100, 50, 100);
	 l53.rect(erx/2, 0, erx*.051,erx*.21);
	 l53.rect(erx/2, 0, erx*.21,erx*.051);
	 l53.rect(-erx/2, 0, erx*.051,erx*.21);
	 l53.rect(-erx/2, 0, erx*.21,erx*.051);
	 l53.pop();
	 
 }

var indeks = 0;
var pcellx = -1;
var pcelly = -1;
var em = 0;
function draw() {
	em++;
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
			ajde(x, y, em);
			l1.rect(x, y, dx, dy);
			wow();
   }
   
 
  pcellx = cellx;
  pcelly = celly;
    odradi();
  image(l2, 0, 0); 
    //image(l53, 0, 0);
   image(l1, 0, 0);
  image(l5, 0, 0); 
  
}

function mouseClicked(){
	if(mouseX>1221 && mouseX<(1221+120)){
		if(mouseY>0 && mouseY<40)indeks = 0; 
		else if(mouseY>0 + 60 && mouseY<60 + 40) indeks = 1;
		else if(mouseY>0 + 60*2 && mouseY<60*2 + 40) indeks = 2;
		else if(mouseY>0 + 60*3 -3 && mouseY<60*3 + 40) { l1.clear(); lx.clear(); l53.clear(); }
		else if(mouseY>0 + 60*4 -5 && mouseY<60*4 + 40)  saveImage();  
		 
		 
		
	}
	 
	 
	
}

function saveImage(){
	 var l3 = createGraphics(width, height); 
   l3.background("#f6f3f0");
   l3.image(l53, 0, 0);
   l3.save("slika.jpg"); 
	
}
