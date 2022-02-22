var l1, l2;

function setup() {
  createCanvas(400, 400);
  l1 = createGraphics(width, height);
  l2 = createGraphics(width, height);
}


function draw() {
  background(220);
  
  if (mouseIsPressed === true) {
    l1.fill(255,0,0);
    l1.noStroke();
    l1.ellipse(mouseX, mouseY, 2, 2);

    l2.fill(0);
    l2.noStroke();
    for(var x = 0; x < width; x += 5){
      l2.ellipse(x, mouseY, 1, 1);
    }
    for(var y = 0; y < height; y += 5){
      l2.ellipse(mouseX, y, 1, 1);
    }
  }
  
  image(l2, 0, 0);
  image(l1, 0, 0);
}

function keyPressed(){
  l1.clear();
  l2.clear();
}

function mouseClicked(){
  //var l3 = createGraphics(width, height);
  //l3.background(0,0,255);
  //l3.image(l1, 0, 0);
  //l3.save("image.jpg");
}