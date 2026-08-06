window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.background="#ffffffee";
header.style.backdropFilter="blur(15px)";

}else{

header.style.background="#fff";

}

});