const hamburger= document.querySelector(".hamburger");
const hover= document.querySelector(".hover-div");
let menOpen=false
hamburger.addEventListener("click",() =>{
  if (!menOpen){
    hamburger.classList.add('open');
    hover.style.display="block"; 
    menOpen=true;
  }else{
    hamburger.classList.remove('open');
    hover.style.display="none";
    menOpen=false;
  }
})