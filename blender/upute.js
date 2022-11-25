let mala1 = document.querySelector("#s1"); 
let mala2 = document.querySelector("#s2"); 
let mala3 = document.querySelector("#s3"); 
let mala4 = document.querySelector("#s4"); 
let mala5 = document.querySelector("#s5"); 
let velika1 = document.querySelector("#v1"); 
let velika2 = document.querySelector("#v2"); 
let velika1a = document.querySelector("#v3"); 
let velika2b = document.querySelector("#v4"); 

mala1.onclick = function(){
	let myIDx = mala1.getAttribute("src");  
  
	velika1.setAttribute("src", "slike/a.jpg");
	velika2.setAttribute("src", "slike/a.jpg");
	velika1a.setAttribute("src", "slike/a.jpg");
	velika2b.setAttribute("src", "slike/a.jpg");
}
mala2.onclick = function(){
	let myIDx = mala2.getAttribute("src");  
  
	velika1.setAttribute("src", "slike/b.jpg");
	velika2.setAttribute("src", "slike/b.jpg");
	velika1a.setAttribute("src", "slike/b.jpg");
	velika2b.setAttribute("src", "slike/b.jpg");
}
mala3.onclick = function(){
	let myIDx = mala3.getAttribute("src");  
  
	velika1.setAttribute("src", "slike/c.jpg");
	velika2.setAttribute("src", "slike/c.jpg");
	velika1a.setAttribute("src", "slike/c.jpg");
	velika2b.setAttribute("src", "slike/c.jpg");
}
mala4.onclick = function(){
	let myIDx = mala4.getAttribute("src");  
  
	velika1.setAttribute("src", "slike/d.jpg");
	velika2.setAttribute("src", "slike/d.jpg");
	velika1a.setAttribute("src", "slike/d.jpg");
	velika2b.setAttribute("src", "slike/d.jpg");
} 
mala5.onclick = function(){
	let myIDx = mala5.getAttribute("src");  
  
	velika1.setAttribute("src", "slike/e.jpg");
	velika2.setAttribute("src", "slike/e.jpg");
	velika1a.setAttribute("src", "slike/e.jpg");
	velika2b.setAttribute("src", "slike/e.jpg");
} 