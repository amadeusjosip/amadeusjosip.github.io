window.onscroll = function() {
  var title = this.document.getElementById("preko-pozadine");
  var scrollTop = document.documentElement.scrollTop * 0.5; 
  var odmak = 90;
  scrollTop += odmak;
  title.style.transform =
    "scale(0.7) translateY(-" + scrollTop + "px)";
};
