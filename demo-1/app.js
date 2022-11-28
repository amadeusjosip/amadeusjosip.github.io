////////////////////////////////////////////////////////////////

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('efektprvi');
        }
        else{
            entry.target.classList.remove('efektprvi');
        }
 
    });
}); 

const hiddenElements1 = document.querySelectorAll('.prvi');
hiddenElements1.forEach((el) => observer1.observe(el));

////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////

 const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('efektdrugi');
        }
        else{
            entry.target.classList.remove('efektdrugi');
        }
 
    });
}); 

const hiddenElements2 = document.querySelectorAll('.drugi');
hiddenElements2.forEach((el) => observer2.observe(el));

////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('ee');
        }
        else{
            entry.target.classList.remove('ee');
        }
 
    });
}); 

const hiddenElements3 = document.querySelectorAll('.divota');
hiddenElements3.forEach((el) => observer3.observe(el));

////////////////////////////////////////////////////////////////
 