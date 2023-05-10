
var br2 = 0;

document.getElementById("web").addEventListener("click", function() {
  br2++;
  var tajniLinks = document.querySelectorAll(".tajni2 a");
  console.log("ok");
  for (var i = 0; i < tajniLinks.length; i++) {
      if(br2%2==1){
    tajniLinks[i].style.color = "white";
    tajniLinks[i].style.transition = "0.15s";}
    else{
    tajniLinks[i].style.color = "#021daa";
    tajniLinks[i].style.transition = "0.15s";}
  }
});


var br1 = 0;

document.getElementById("cont").addEventListener("click", function() {
  br1++;
  var tajniLinks = document.querySelectorAll(".tajni1 a");
  console.log("ok");
  for (var i = 0; i < tajniLinks.length; i++) {
      if(br1%2==1){
    tajniLinks[i].style.color = "white";
    tajniLinks[i].style.transition = "0.15s";

  }
    else{
      tajniLinks[i].style.color = "#021daa";
      tajniLinks[i].style.transition = "0.15s";
    }
  }
});
