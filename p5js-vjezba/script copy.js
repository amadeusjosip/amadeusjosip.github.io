function preload() {
  // preload all images and add them to array
  for (let i = 1; i <= 9; i++) {
    imgList.push(loadImage(`assets/slike/a${i < 10 ? '0' : ''}${i}.jpg`));
  }
}
let canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style("position", "fixed");
  canvas.style("left", "0px");
  canvas.style("top", "0px");
  pixelDensity(1);
  canvas.style("z-index", "-1");  
  imageMode(CENTER);
}
let rectColor = 255; // start with white color
let rects = []; // array to store rectangles
let lastX = 0; // last x position
let lastY = 0; // last y position
let distance = 0; // distance traveled by mouse

let imgIndex = 0; // index of current image to display
let imgList = []; // array to store images

 

function draw() {
  // calculate distance traveled by mouse
  let dx = mouseX - lastX;
  let dy = mouseY - lastY;
  distance += sqrt((dx * dx) + (dy * dy));

  // update last position of mouse
  lastX = mouseX;
  lastY = mouseY;

  // change rectangle color if distance traveled is greater than or equal to 25 pixels
  if (distance >= 80) {
    // if there are already 5 rectangles, remove the oldest one
    if (rects.length >= 5) {
      rects.shift();
    }
    // add new rectangle to array
    rects.push({
      x: mouseX, // adjust x position to center rectangle
      y: mouseY, // adjust y position to center rectangle
      imgIndex: imgIndex // index of current image to display
    });
    distance = 0;
    imgIndex = (imgIndex + 1) % imgList.length; // move to next image in list
  }

  // draw all rectangles in array
  background(255,255,255);
  for (let i = 0; i < rects.length; i++) {
    let rekt = rects[i];
    let img = imgList[rekt.imgIndex];
    image(img, rekt.x - width/2, rekt.y - height/2, 200, 300);
  }

}
