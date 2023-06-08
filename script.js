var counter=document.getElementById('start');
var next=document.getElementById("below");
var start=document.getElementById("above");

var a=1;

let interval;
counter.addEventListener('click',function(){
       
       var val=document.querySelector('input').value;
       console.log("animate",val);
       
       interval=setInterval(animate,1000,val);
       

});
function animate(val){
    
    
    next.classList.add('animate');
    
    setTimeout(() => {
        next.classList.remove('animate');
        start.innerText=a;
        
        next.innerText=++a;
    },500);
    
    
    console.log(a,val);

    if(a==val){
        clearInterval(interval);
        a=0;
        return;
    }
}