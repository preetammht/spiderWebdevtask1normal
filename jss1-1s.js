var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


 var rant1=true;
 var rant2=true;
 var t1x;
 var t1y;
 var t2x;
 var t2y; 
 var p1=true;
 var p2=false;  
 var comp=false;
 var ang;
 var bomx;
 var bomy;
 var clk=false;
 var ballspeed=7;
 var coll=true;
 var spl=false;
 var mpl=false;
 var mmove=0;
 var mmove2=0;
 var bomx2;
 var bomy2;
 var clk2=false;
 var score1=0;
 var score2=0;
 var shots=0;
 var cang;
 var cn=true;

 function drawm()
 {ctx.fillStyle = 'brown';
 ctx.beginPath();
 ctx.moveTo(300,600);
 for(var i=1;i<=10;i++) 
 {ctx.lineTo(300+10*(i-1),600-5*i);
  ctx.lineTo(300+10*i,600-5*i);}  
 for(var i=1;i<=10;i++) 
 {ctx.lineTo(400+5*(i-1),550-20*i);
  ctx.lineTo(400+5*i,550-20*i);}
 for(var i=1;i<=10;i++) 
 {ctx.lineTo(450+5*i,350+20*(i-1));
  ctx.lineTo(450+5*i,350+20*i);}
 for(var i=1;i<=10;i++) 
 {ctx.lineTo(500+10*i,550+5*(i-1));
  ctx.lineTo(500+10*i,550+5*i);}  
     
  ctx.fill();}

  function createtank(s)
  {if(s==1)
   {ctx.fillStyle = 'green';
   	if(rant1){t1x= Math.floor(Math.random()*1000)%230;
             t1y= 540;}
    ctx.fillRect(t1x,t1y,70,40);
    ctx.beginPath();
    ctx.arc(t1x+20,590,10,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath(); 
    ctx.arc(t1x+50,590,10,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath(); ctx.closePath();}  //this line is totally unnecesary!!!why wont it show wheels in green without this?HELP
   else if(s==2)
   {ctx.fillStyle = 'blue';
   	if(rant2){t2x= Math.floor(Math.random()*1000)%230 +600;
              t2y= 540;}
    ctx.fillRect(t2x,t2y,70,40);
    ctx.arc(t2x+20,590,10,0,2*Math.PI);
    ctx.fill();
    ctx.arc(t2x+50,590,10,0,2*Math.PI);
    ctx.fill();} 
}

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: -2,
  radius: 10,
  color: 'red',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

 
 

function mouseMoveHandler(e){
	if(p1)
		{if(e.clientX - canvas.offsetLeft>=t1x+35)
			{ang=Math.atan((540- e.clientY + canvas.offsetTop)/(e.clientX - canvas.offsetLeft-t1x-35));
	     bomx=t1x+35+35*Math.cos(ang);
	     bomy=540-35*Math.sin(ang);
	     
		 }}
	if(p2)
	    {if(e.clientX - canvas.offsetLeft<=t2x+35)
			{ang=Math.atan((540- e.clientY + canvas.offsetTop)/-(e.clientX - canvas.offsetLeft-t2x-35));
	     bomx2=t2x+35-35*Math.cos(ang);
	     bomy2=540-35*Math.sin(ang);
	     
		 }}	 
}

function clickHandler(e){
	if(p1){canvas.removeEventListener('mousemove', mouseMoveHandler);
	clk=true;
	ball.x= bomx+10*Math.cos(ang);
	ball.y= bomy-10*Math.sin(ang);
	ball.vx=ballspeed*Math.cos(ang);
	ball.vy=-ballspeed*Math.sin(ang);}
	if(p2){canvas.removeEventListener('mousemove', mouseMoveHandler);
	clk2=true;
	ball.x= bomx2-10*Math.cos(ang);
	ball.y= bomy2-10*Math.sin(ang);
	ball.vx=-ballspeed*Math.cos(ang);
	ball.vy=-ballspeed*Math.sin(ang);
}}

 function collision()
 {if(ball.x-10<0||ball.x+10>canvas.width||ball.y+10>canvas.height)
    {rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}
  var x1,y1;
  var angg;
  angg=Math.atan(0.5);
  x1=ball.x+10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>300&&x1<400)&&(y1<600&&y1>600-0.5*(x1-300)))
 {rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}
 angg=Math.atan(4);
  x1=ball.x+10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>400&&x1<450)&&(y1<600&&y1>550-4*(x1-400)))
 {rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}

  angg=Math.atan(0.5);
  x1=ball.x-10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>500&&x1<600)&&(y1<600&&y1>600-0.5*(600-x1)))
 {rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}
 angg=Math.atan(4);
  x1=ball.x-10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>450&&x1<500)&&(y1<600&&y1>550-4*(500-x1)))
 {rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}

 if(p1)
 {x1=ball.x+10;y1=ball.y;
 if(x1>t2x&&x1<t2x+90&&y1+10>540)
 {score1++;rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}}	
 if(p2){
 x1=ball.x-10;y1=ball.y;
 if(x1>t1x-20&&x1<t1x+70&&y1+10>540)
 {score2++;rant1=p1;rant2=p2;p1=!p1;p2=!p2;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;clk2=false;mmove=0;mmove2=0;shots++;}}

}

function collision2()
 {if(ball.x-10<0||ball.x+10>canvas.width||ball.y+10>canvas.height)
    {rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}
  var x1,y1;
  var angg;
  angg=Math.atan(0.5);
  x1=ball.x+10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>300&&x1<400)&&(y1<600&&y1>600-0.5*(x1-300)))
 {rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}
 angg=Math.atan(4);
  x1=ball.x+10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>400&&x1<450)&&(y1<600&&y1>550-4*(x1-400)))
 {rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}

  angg=Math.atan(0.5);
  x1=ball.x-10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>500&&x1<600)&&(y1<600&&y1>600-0.5*(600-x1)))
 {rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}
 angg=Math.atan(4);
  x1=ball.x-10*Math.sin(angg);
  y1=ball.y+10*Math.cos(angg);  
  if((x1>450&&x1<500)&&(y1<600&&y1>550-4*(500-x1)))
 {rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}

 if(p1)
 {x1=ball.x+10;y1=ball.y;
 if(x1>t2x&&x1<t2x+90&&y1+10>540)
 {score1++;rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}} 
 if(comp){
 x1=ball.x-10;y1=ball.y;
 if(x1>t1x-20&&x1<t1x+70&&y1+10>540)
 {score2++;rant1=p1;rant2=comp;p1=!p1;comp=!comp;canvas.addEventListener("mousemove", mouseMoveHandler, false);clk=false;mmove=0;mmove2=0;shots++;}}

}

function menu() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('pocket tank(normal)', canvas.width / 2, canvas.height / 4);
  ctx.font = '20px Arial';
  ctx.fillText('INSTRUCTIONS:Each player has 5 shots. ', canvas.width / 2, canvas.height / 2);
  ctx.fillText('Use mouse to aim and click to shoot ', canvas.width / 2, canvas.height / 2+30);
  ctx.rect(50,500,150,50);
  ctx.stroke();
  ctx.fillText('Single player ', 125, 525);
  ctx.rect(600,500,150,50);
  ctx.stroke();
  ctx.fillText('Multi player ', 675, 525); 
   // Start the game on a click
  canvas.addEventListener('click', startGame);
}

function startGame(e) {
  var sngx=	e.clientX - canvas.offsetLeft;
  var sngy=	e.clientY - canvas.offsetTop;
  if(sngx>50&&sngx<200&&sngy>500&&sngy<550)
  {canvas.removeEventListener('click', startGame);
    spl=true;
    canvas.addEventListener("mousemove", mouseMoveHandler, false);
    canvas.addEventListener("click", clickHandler, false);
    draw();}
  if(sngx>600&&sngx<750&&sngy>500&&sngy<550)
  {canvas.removeEventListener('click', startGame);
    mpl=true;
    canvas.addEventListener("mousemove", mouseMoveHandler, false);
    canvas.addEventListener("click", clickHandler, false);
    draw();}
}

function endgame() {
 if(mpl){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if(score1>score2)
  {ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('player 1 wins!!', canvas.width / 2, canvas.height / 4);}
  else if(score2>score1)
  {ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('player 2 wins!!', canvas.width / 2, canvas.height / 4);}
  else
  {ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('it is a tie!!', canvas.width / 2, canvas.height / 4);}}

  if(spl){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if(score1>score2)
  {ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('player 1 wins!!', canvas.width / 2, canvas.height / 4);}
  else if(score2>score1)
  {ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('computer wins!!', canvas.width / 2, canvas.height / 4);}
  else
  {ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.font = '36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('it is a tie!!', canvas.width / 2, canvas.height / 4);}}
}

function draw()
{if(mpl){ctx.clearRect(0,0, canvas.width, canvas.height);
  drawm(); 
   createtank(1);
  createtank(2);
  ctx.fillStyle = '#000000';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Score:'+score1, 125,50);
  ctx.fillText('Score:'+score2, 675,50);

  rant1=false;
  rant2=false;
  if(p1){
  	if(mmove==0){ bomx=t1x+70;
               bomy=540;
               mmove=1;}

         ctx.lineWidth=5;
	     ctx.strokeStyle = 'black';
		 ctx.beginPath();
		 ctx.moveTo(t1x+35,540);
		 ctx.lineTo(bomx,bomy);
		 ctx.stroke();
 if(clk)
 	{if(coll){ball.draw();
         ball.x += ball.vx;
         ball.y += ball.vy;
         ball.vy+=0.067;
         collision();
          }	}
   }
  
  if(p2){
  	if(mmove2==0){ bomx2=t2x;
               bomy2=540;
               mmove2=1;}

  ctx.lineWidth=5;
	     ctx.strokeStyle = 'black';
		 ctx.beginPath();
		 ctx.moveTo(t2x+35,540);
		 ctx.lineTo(bomx2,bomy2);
		 ctx.stroke();
 if(clk2)
 	{if(coll){ball.draw();
         ball.x += ball.vx;
         ball.y += ball.vy;
         ball.vy+=0.067;
         collision();
          }	}
   } 
  
  if(shots==10)
  	{endgame();}
  else
  requestAnimationFrame(draw);}

  if(spl)
{ctx.clearRect(0,0, canvas.width, canvas.height);
  drawm(); 
   createtank(1);
  createtank(2);
  ctx.fillStyle = '#000000';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Score:'+score1, 125,50);
  ctx.fillText('Score:'+score2, 675,50);

  rant1=false;
  rant2=false;
  if(comp){
    if(mmove2==0){ bomx2=t2x;
               bomy2=540;
               }

  ctx.lineWidth=5;
       ctx.strokeStyle = 'black';
     ctx.beginPath();
     ctx.moveTo(t2x+35,540);
     ctx.lineTo(bomx2,bomy2);
     ctx.stroke();
  
    if(mmove2==0){ cang= Math.PI/2-0.5*Math.asin((t2x-t1x+(Math.floor((Math.random()*100)%20)))/738); 
     bomx2=t2x+35-35*Math.cos(cang);
     bomy2=540-35*Math.sin(cang); 
     ball.x= bomx2-10*Math.cos(cang);
     ball.y= bomy2-10*Math.sin(cang);
     ball.vx=-ballspeed*Math.cos(cang);
     ball.vy=-ballspeed*Math.sin(cang);
     mmove2=1;
      }

    if(cn){ball.draw();
         ball.x += ball.vx;
         ball.y += ball.vy;
         ball.vy+=0.067;
         collision2();
          } 
   } 
  if(p1){
    if(mmove==0){ bomx=t1x+70;
               bomy=540;
               mmove=1;}

         ctx.lineWidth=5;
       ctx.strokeStyle = 'black';
     ctx.beginPath();
     ctx.moveTo(t1x+35,540);
     ctx.lineTo(bomx,bomy);
     ctx.stroke();
 if(clk)
  {if(coll){ball.draw();
         ball.x += ball.vx;
         ball.y += ball.vy;
         ball.vy+=0.067;
         collision2();
          } }
   }
  
  
  
  if(shots==10)
    {endgame();}
  else
  requestAnimationFrame(draw);}

}
menu();