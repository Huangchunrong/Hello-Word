//  跨浏览器对象事件处理  封装成一个文件   以对象  方法的方式	  
//  和ie8以下兼容  
	    var EventUtil = {
	    	// 添加句柄
	    	 addHandle:function(element,type,handler){
	    	 	if(element.addEventListener){
	    	 		element.addEventListener(type,handler,false);  //DOM二级判断
	    	 	}else if(element.attachEvent){
	    	 		element.attachEvent("on"+type,handler); //ie事件处理程序判断
	    	 	}else{
	    	 		//html事件处理程序
	    	 		element["on"+type]=handler; //element.onclick===element["onclick"]
	    	 	}

	    	  },
	    	  //删除句柄
	    	  removeHandle:function(element,type,handler){
	    	  	if(element.addEventListener){
	    	 		element.removeEventListener(type,handler,false);  //DOM二级判断
	    	 	}else if(element.attachEvent){
	    	 		element.detachEvent("on"+type,handler); //ie事件处理程序判断
	    	 	}else{
	    	 		//html事件处理程序
	    	 		element["on"+type]=null; //element.onclick===element["onclick"]
	    	 	}
	    	  },
	    	  getEvent:function(event){
	    	  		return event?event:window.event;
	    	  },
	    	  getType:function(event){
	    	  		return event.type;
	    	  },
	    	  getElement:function(event){
	    	  		return event.target||event.srcElement;
	    	  },
	    	  stopPropagation:function(event){
	    	  		if(event.stopPropagation){
	    	  			event.stopPropagation();
	    	  		}else{
	    	  			event.cancelBubble=true;//阻止冒泡  IE8下
	    	  		}
	    	  },
	    	  preventDefault:function(event){
	    	  		if(event.preventDefault){
	    	  			event.preventDefault();
	    	  		}else{
	    	  			event.returnValue=false;
	    	  		}
	    	  },
	    	  	        	  }
