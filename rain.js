const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();

let drops = Array.from({length:140},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  l:Math.random()*18+10,
  s:Math.random()*6+4
}));

function rain(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle="rgba(200,200,200,.35)";
  ctx.lineWidth=1;

  drops.forEach(d=>{
    ctx.beginPath();
    ctx.moveTo(d.x,d.y);
    ctx.lineTo(d.x,d.y+d.l);
    ctx.stroke();
    d.y+=d.s;
    if(d.y>canvas.height){
      d.y=-20;
      d.x=Math.random()*canvas.width;
    }
  });
  requestAnimationFrame(rain);
}
rain();

window.addEventListener("resize",resize);
