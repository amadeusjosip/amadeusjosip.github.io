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
function windowResized(){
        print('hmm')
    if(windowWidth > windowHeight){
        resizeCanvas(600, 600);
    }
    else{
        resizeCanvas(windowWidth, windowWidth);
    }
    screen_sc = width/600;
    reposition_canvas(); 
}

 

function setup() {
	
	boja0 = color("#04151f");
	boja1 = color("#183a37"); 
	boja2 = color("#efd6ac"); 
	boja3 = color("#c44900"); 
	boja4 = color("#432534");  
	
	boje = [boja0, boja1, boja2, boja3, boja4];
	 
	
    if(windowWidth > windowHeight){
        canvas = createCanvas(600, 600);
    }
    else{
        canvas = createCanvas(windowWidth, windowWidth);
    }
    screen_sc = width/600; 
    reposition_canvas(); colorMode(HSB, 100);
    rectMode(CENTER);
	
	var pocY = 70;
	var pocRam = 51;
	s1 = createSlider(1, 99, 11);
	s1.position(1240, pocY + 0*pocRam);
	s1.style('width', '140px');
	
	
	
	  
	s2 = createSlider(1, 20, 4);
	s2.position(1240, pocY + 1*pocRam);
	s2.style('width', '140px');
	
	
	s6 = createSlider(0, 1, 1);
	s6.position(1240, pocY + 2*pocRam);
	s6.style('width', '40px');
	
	
	s3 = createSlider(0, 100, 0);
	s3.position(1240, pocY + 3*pocRam);
	s3.style('width', '140px');
	
	s4 = createSlider(0, 100, 0);
	s4.position(1240, pocY + 4*pocRam);
	s4.style('width', '140px');
	
	s5 = createSlider(0, 55, 0);
	s5.position(1240, pocY + 5*pocRam);
	s5.style('width', '140px');
	
	
	
	s7 = createSlider(8, 100, 30);
	s7.position(1240, pocY + 6*pocRam);
	s7.style('width', '140px');
	
	s8 = createSlider(5, 100, 40);
	s8.position(1240, pocY + 7*pocRam);
	s8.style('width', '140px');
	
	//s9 = createSlider(0, 1, 1);
	//s9.position(1240, pocY + 8*pocRam);
	//s9.style('width', '140px'); 
	 
}


 
var m = 0;
var brb = 1;
var indeks = 2;
var pozadina = 100; 
function draw() {
	const kol = s1.value();
	const brz = s2.value();
	const hju = s3.value(); 
	const dia = s4.value(); 
	const nojz = s5.value(); 
	const alfa = s6.value(); 
	const deb = s7.value(); 
	const razv = s8.value(); 
	//const smjer = s9.value();  
	
	//var smer = (smjer/1)-0.5;
	
  background(boje[indeks]);
  stroke(0);
  for(var i = 0; i < kol; i = i + 0.5){ 
  fill((hju + (i/kol)*dia)%100, 80, 80, alfa*100);
    push();
    translate(width/2, height/2);
    rotate(radians(m)+0.05*i);
	strokeWeight((102-i)*.03*(deb/100));
	var lk = 5;
	var cc = nojz*cos(radians(m)+55*noise(i*0.001*11));
	var ss = nojz*sin(radians(m)+55*noise(i*0.001*11));
    rect(cc, ss, (102-i)*lk*deb/100*3, (102-i)*lk*(razv/100)*deb/100*3);
    
    pop();  
  }
  
  m+=((brz*(1/1))/10);
  
   
}

 function saveImage(){
  save("slika.png");
}

function mouseClicked(){
	var xxxx2 = 30;
	var yyyy2 = 408;
	if(mouseX>width+xxxx2)
			if(mouseX<width+(xxxx2+120))
				if(mouseY>yyyy2)
				if(mouseY<(yyyy2+42)){
					
					if(indeks == 4){indeks = 0;}
					else{
					indeks++;}
					 
					}
					
	var xxxx1 = 30;
	var yyyy1 = 458;
	if(mouseX>width+xxxx1)
			if(mouseX<width+(xxxx1+120))
				if(mouseY>yyyy1)
				if(mouseY<(yyyy1+52)){
					 saveImage();
					}
	  
	
}
