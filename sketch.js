var s1, s2;
function setup() { 
  createCanvas(810, 400);
  colorMode(HSB, 100); 
  textSize(15);
  noStroke();rectMode(CENTER);
 
  s1 = createSlider(0, 255, 100);
  s1.position(450, 20);
  s1.style('width', '270px');
  s2 = createSlider(0, 255, 20);
  s2.position(450, 50); 
  s2.style('width', '140px');
  s3 = createSlider(0, 255, 40);
  s3.position(450, 80); 
  s3.style('width', '140px');
}

var m = 0;
  let bbb = 20;







function draw() {
  const s33 = s3.value();
  var brz = s33/20;
  m+=brz;
  const r = s1.value();
  const g = s2.value(); 
  
  var bja = (mouseX+110)/1920*40;
  var bra = mouseY/height*100;
   
  background(bbb, 55, 37) 
  noStroke();
  fill(42, 57, 89);
  text('BOJA', s1.x * 2 + s1.width, 35);
  text('VELICINA', s2.x * 2 + s2.width, 65);  
  text('BRZINA', s3.x * 2 + s3.width, 95); 
  
  
  fill((r/3)%100, 80, 80); 
  stroke(15, 4, 91);
  
  var ra = (g+7)*0.4;  
  strokeWeight((g+7)*0.07);
  
  
  translate(width/2, height/2);
  
  var x1 = 20*cos(radians(m));
  var y1 = 20*sin(radians(m));
  rotate(radians(m/4));
  rect(x1, y1, ra, ra, bja); 
  
  resetMatrix();
  
  
}



function mouseClicked() {
  
  if(mouseY>100)
  
bbb = random(100);
   
  
}




