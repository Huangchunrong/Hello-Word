window.onload=function(){
    var timer;
    
	title = document.getElementById("contain-tit").getElementsByTagName("li");
	mods = document.getElementsByClassName("mod");

	// console.log(title);
	if(title.length != mods.length){
		return;
	}
    
    
    for(var i=0; i<title.length; i++){
    			title[i].index=i;
    			title[i].onmouseover = function(){
    				// 用that来应用当前滑过的li
    				var that=this;
    				// 如果有当前准备执行的定时器，立即清除，只有停留时间超过500ms的时候执行
    				if(timer){
    					clearTimeout(timer);
    					timer=null;
    				}
    				// 延时半秒执行
    				timer=setTimeout(function(){
    				  for( var j = 0 ; j< title.length ; j++ ){
    					title[j].className="";
    					mods[j].style.display="none";
    				  }

    				  title[that.index].className="select";
    				  mods[that.index].style.display="block";
    				 
    			    },500);
    			}
    			
    		};
    
  




}