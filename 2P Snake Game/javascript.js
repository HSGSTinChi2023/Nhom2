canv=document.getElementById("gc");
ctx=canv.getContext("2d");
document.addEventListener("keydown",keyPush);
setInterval(game,50);
move1 = 0;
move2 = 0;
x = 200;
px1 = py1 = 10; 
px2 = py2 = 20;
gs = tc = 40; 
ax = ay = 15;
xv1 = yv1 = 0;
xv2 = yv2 = 0;
count = 0;
trail1=[];
trail2=[];
tail1 = 5;
tail2 = 5;
green = purple = 0;
count1 = count2 = 0;
function resetGame(){
    px1 = py1 = 10;
    px2 = py2 = 20;
    xv1 = yv1 = 0;
    xv2 = yv2 = 0;
    ax = ay = 15;
    count1 = count2 = 0;
    trail1 = [];
    trail2 = [];
    tail1 = tail2 =5;
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37://left
            if(move1 == 39){
                xv1=1;yv1=0;
                break;
            } 
            else{    
                move1 = 37;
                xv1=-1;yv1=0;                             
                count1++;
                break;
            }
        case 38://up
            if(move1 == 40){
                xv1=0;yv1=1;
                break;
            }
            else{
                move1 = 38;                
                xv1=0;yv1=-1;
                count1++;
                break;
            }
        case 39://right
            if(move1 == 37){
                xv1=-1;yv1=0;
                break;
            }
            else {
                move1 = 39;
                xv1=1;yv1=0;
                count1++;
                break;
            }
        case 40://down
            if(move1 == 38){
                xv1 = 0;yv1 =-1;
                break;
            }
            else{
                move1 = 40;
                xv1=0;yv1=1;
                count1++;
                break;        
            }
        case 65://d
            if(move2 == 39){
                xv2=1;yv2=0;
                break;
            } 
            else{    
                move2 = 37;
                xv2=-1;yv2=0;                             
                count2++;
                break;
            }
        case 87://up
            if(move2 == 40){
                xv2=0;yv2=1;
                break;
            }
            else{
                move2 = 38;                
                xv2=0;yv2=-1;
                count2++;
                break;
            }
        case 68://right
            if(move2 == 37){
                xv2=-1;yv2=0;
                break;
            }
            else {
                move2 = 39;
                xv2=1;yv2=0;
                count2++;
                break;
            }
        case 83://down
            if(move2 == 38){
                xv2 = 0;yv2 =-1;
                break;
            }
            else{
                move2 = 40;
                xv2=0;yv2=1;
                count2++;
                break;        
            }
    }
}

function game() {
	px1+=xv1;
    py1+=yv1;
    px2+=xv2;
    py2+=yv2;
    if(px1<0) {
		px1= tc-1;
    }
    if(px1>tc-1) {
		px1= 0;
    }
    if(py1<0) {
		py1= tc-1;
    }
    if(py1>tc-1) {
		py1= 0;
    }
    if(px2<0) {
		px2= tc-1;
    }
    if(px2>tc-1) {
		px2= 0;
    }
    if(py2<0) {
		py2= tc-1;
    }
    if(py2>tc-1) {
		py2= 0;
    }
    if(px1 == px2 && py1 == py2){
        if(tail1 > tail2){
            window.alert("green snake won!");
        }
        else if(tail1 == tail2){
            window.alert("draw!");
        }
        else {
            window.alert("purple snake won!");
        }
        resetGame();
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    ctx.fillStyle="lime";
    for(var i=0;i<trail1.length;i++) {
        ctx.fillRect(trail1[i].x*10,trail1[i].y*10,8,8);
        if(trail1[i].x==px1 && trail1[i].y==py1) {
            if(count1 > 0){
                window.alert("purple snake won!");
                purple++;
                resetGame();
            }
        }
        if(trail1[i].x == px2 && trail1[i].y == py2){
            window.alert("green snake won!");
            green++;
            resetGame();            
        }
    }
    ctx.fillStyle="purple";
    for(var i=0;i<trail2.length;i++) {
        ctx.fillRect(trail2[i].x*10,trail2[i].y*10,8,8);
        if(trail2[i].x==px2 && trail2[i].y==py2) {
            if(count2 > 0){
                console.log(count2);
                window.alert("green snake won!");
                green++;
                resetGame();
            }
        }
        if(trail2[i].x == px1 && trail2[i].y == py1){
            window.alert("purple snake won!");
            purple++;
            resetGame();
        }
    }
    trail1.push({x:px1,y:py1});
    trail2.push({x:px2,y:py2});
    while(trail1.length>tail1) {
        trail1.shift();
    }
    while(trail2.length>tail2) {
        trail2.shift();
    }
    if(ax==px1 && ay==py1) {
		tail1++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    if(ax==px2 && ay == py2){
        tail2++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*10,ay*10,8,8);
	document.getElementById("controls_score-label").innerHTML = green +  "|" + purple ;

}
