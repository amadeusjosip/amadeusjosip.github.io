var page1 = document.getElementById("myDiv");
var page2 = document.getElementById("tajni");
var imaz = document.getElementById("myImage");
var tabby = document.getElementById("tabby");

page1.style.display = "block"; // show page1 initially

page1.onclick = function(event) {
  page2.style.zIndex = "3"; // set z-index of page2 to be on top of page1
  page1.style.display = "none"; // hide page1
  page2.style.display = "flex"; // show page2


  if(event.target === tabby){
    page2.style.display = "none"; // hide page2
    page1.style.display = "none"; // show page1
    imaz.style.width = "30px";
  }
};

page2.onclick = function(event) { 
  if (event.target === imaz) {
    // click occurred on image, show page2
    page2.style.display = "flex"; // show page2
    page1.style.display = "none"; // hide page1
  } else {
    // click occurred outside image, show page1
    page2.style.display = "none"; // hide page2
    page1.style.display = "block"; // show page1
  }

 

  
};
