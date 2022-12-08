///////////////////////// 
 
document.getElementById("mode").addEventListener("click", changeColor);



  
 
/////////////////////////
 
var t = 0;
function changeColor() {    

    document.getElementById('my-scrollbar').style.transition = '1.4s';
    if(t % 2 == 1){
        document.documentElement.style.setProperty('--bijela', '#fff');   
        document.documentElement.style.setProperty('--crna', '#000');   
    }
    else{ 
        document.documentElement.style.setProperty('--bijela', '#000'); 
        document.documentElement.style.setProperty('--crna', '#fff');  
    }

   
    t++; 
     
}
