function make(){
let char="";
for(let i=0;i<70-21;i++)
{
    var rn=Math.floor(Math.random()*10);
 char+=`<div class="box">${rn}</div>`;
}
document.querySelector(".down").innerHTML=char;
}
make();
let  scr=0 ;
var hitnum;
const kaa=document.getElementById("inp2")

function settimer(){
for(let i=60;i>=0;i--)
{
setTimeout(()=>{
kaa.innerText=i;
if(i==0){
    alert("Gameover. Your Score is:"+scr);
    document.querySelector(".down").innerHTML="";
}
},(60-i)*1000)};
}
settimer();


function sethit(){
let hit=document.querySelector("#inp1");

hitnum=""+Math.floor(Math.random()*10);
hit.innerText=hitnum
}

sethit();

const score=document.querySelector("#inp3");


const box=document.querySelector(".down");
box.addEventListener("click",(dets)=>{
    const kaa=document.querySelector("#inp1");
    let hit=document.querySelector("#inp1");
    var num=Number(dets.target.textContent)
   if(num==hitnum)
   {
    scr=scr+10;
    hitnum=""+Math.floor(Math.random()*10);
    hit.innerText=hitnum;
    make();
   }
  
    score.textContent=scr;
    
});