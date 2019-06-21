window.onload=function(){
	     // 当前高亮索引
	var index=0;
	var timer=null;
	head = document.getElementById("contain-tit").getElementsByTagName("li");
	content= document.getElementsByClassName("mod");

   // 绑定事件 鼠标滑过跳转并停止定时器
   for(var i=0; i<head.length;i++){
   		head[i].id=i;
   		head[i].onmouseover=function(){
   			clearInterval(timer);
   			operation(this.id);
   			// for(var j=0; j<head.length;j++){
   			// 	head[j].className="";
   			// 	content[j].style.display="none";
   			// }

   			// head[this.id].className="select";
   			// content[this.id].style.display="block";
   		}
   		head[i].onmouseout= function(){
   			  timer=setInterval(autoPlay,2000);
   		}
   		if(timer){
   			clearInterval(timer);
   			timer=null;
   		}
   		// 添加定时器 改变当前高亮
		  timer=setInterval(autoPlay,2000);
		  	// function(){
		   //   	index++;
		   //   	if(index>=head.length){
		   //   		index=0;
		   //   	}
		     	// for(var j=0; j<head.length;j++){
		     	// 	head[j].className=" ";
		     	// 	content[j].style.display="none";
		     	// }
		     	// head[index].className="select";
		     	// content[index].style.display="block";
		     
   		
   		// 封装相同代码  优化
   		 
		function  autoPlay(){
		     	index++;
		     	if(index>=head.length){
		     		index=0;
		     	}
		     	operation(index);
			     }	   		
          function operation(curindex){
          	for(var j=0; j<head.length;j++){
		     		head[j].className=" ";
		     		content[j].style.display="none";
		     	}
		     	head[curindex].className="select";
		     	content[curindex].style.display="block";
		     	index=curindex; // 鼠标滑出后 继当前鼠标索引往下播放
          }



   }








}