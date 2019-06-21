//getelementsbyclassname在IE10下是不支持的所以声明一个getclass方法获取类名
function  getbyclass(clsname,parent){
     var oParent =  parent ? document.getElementById(parent) : document;
     var eles = [];
     var elements = oParent.getElementsByTagName("*");
     for(var i = 0;i < elements.length; i++){
     	if(elements[i].className == clsname){
     		eles.push(elements[i]);
     	}
     }
       return eles; 	
}

window.onload = drag;

function drag(){
	var otitle = getbyclass("htop","box")[0];
	    otitle.onmousedown = fndown;
}
function fndown(event){
	event = event || window.event;
	var move = document.getElementById("box");
	// 按下光标时光标和面板之间的距离
		disX = event.clientX - move.offsetLeft;
		disY = event.clientY - move.offsetTop;
	// 移动
	   document.onmousemove = function(event){
	   	event = event || window.event;
	   	fnmove(event,disX,disY);
	   }
	   // 释放
	    document.onmouseup = function(){
    	document.onmousedown = null;
    	document.onmousemove = null;
       }
	}
 function fnmove(event,posX,posY){
 	event = event || window.event;
 	var move = document.getElementById("box");
 	var l = event.clientX - posX;
 	var t = event.clientY - posY;
 	var winW = document.documentElement.clientWidth || document.body.clientWidth;
 	var winH = document.documentElement.clientHeight || document.body.clientHeight;
 	var maxW = winW - move.offsetWidth;
 	var maxH = winH - move.offsetHeight; 
 		if(l < 0){
 		l = 0;
 	}else if(l > maxW){
 		l = maxW;
 	}
 	if(t < 0){
 		t = 0;
 	}else if(t > maxH){
 		t = maxH;
 	}
 	move.style.left = l + "px";
 	move.style.top = t + "px";
   
 }
