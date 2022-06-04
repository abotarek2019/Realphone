var cirlce=document.getElementById('circle');
var upbtn=document.getElementById('upbtn');
var downbtn=document.getElementById('downbtn');

var rotatevalue=cirlce.style.transform;
var rotatesum;

upbtn.onclick=function(){
    rotatesum=rotatevalue+"rotate(-90deg)";//here u can add a value of transform from here by concatinaation
    cirlce.style.transform=rotatesum;
    rotatevalue=rotatesum;
}
downbtn.onclick=function(){

    rotatesum=rotatevalue+"rotate(90deg)";//here u can add a value of transform from here by concatinaation
    cirlce.style.transform=rotatesum;
    rotatevalue=rotatesum;
}
    
