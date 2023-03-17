const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-1');
        }
        else{
            entry.target.classList.remove('scroll-1');
        }
 
    });
}); 

const hiddenElements1 = document.querySelectorAll('.item-1');
hiddenElements1.forEach((el) => observer1.observe(el));
///////////////////////////

const observer12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-2');
        }
        else{
            entry.target.classList.remove('scroll-2');
        }
 
    });
}); 

const hiddenElements12 = document.querySelectorAll('.item-2');
hiddenElements12.forEach((el) => observer12.observe(el));
///////////////////////////

const observer123 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-0');
        }
        else{
            entry.target.classList.remove('scroll-0');
        }
 
    });
}); 

const hiddenElements123 = document.querySelectorAll('.item-0');
hiddenElements123.forEach((el) => observer123.observe(el));
