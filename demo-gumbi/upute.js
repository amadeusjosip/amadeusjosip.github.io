const konstBody = document.getElementById("bodij");  
const konstPara = document.getElementById("vid");  
const konstSpan = document.getElementById("espan");  
 

document.getElementById("kvd2").addEventListener("mouseover", A2);
document.getElementById("kvd2").addEventListener("mouseout", B2);
document.getElementById("kvd2").addEventListener("click", X2); 

document.getElementById("kvd3").addEventListener("mouseover", A3);
document.getElementById("kvd3").addEventListener("mouseout", B3);
document.getElementById("kvd3").addEventListener("click", X3); 
 

 
/////////////////////////
function A2() {
  document.getElementById("kvd2").style.scale = "110%"
  document.getElementById("kvd2").style.transition = "0.2s";
} 
function B2() {
  document.getElementById("kvd2").style.scale = "100%"
  document.getElementById("kvd2").style.transition = "0.2s";
} 
function X2() { 
    konstBody.style.backgroundColor = "#552583"; 
    konstBody.style.transition = "0.2s"; 
    konstSpan.style.color = "#fdb927";  
    konstPara.style.color = "#fff";   
}

/////////////////////////
function A3() {
  document.getElementById("kvd3").style.scale = "110%" 
  document.getElementById("kvd3").style.transition = "0.2s";
} 
function B3() {
  document.getElementById("kvd3").style.scale = "100%" 
  document.getElementById("kvd3").style.transition = "0.2s";
} 
function X3() { 
  konstBody.style.backgroundColor = "#fdb927"; 
  konstBody.style.transition = "0.2s"; 
  konstSpan.style.color = "#552583";  
  konstPara.style.color = "#111";   
}
 
