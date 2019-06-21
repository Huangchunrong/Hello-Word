window.onload = function(){

		var b2 = document.getElementById("btn2");
		var bo = document.getElementById("box");
		var go = document.getElementById("go");
		   EventUtil.addHandle(b2,"click",function(event){
		    	alert("这是第二个按钮");
		    	EventUtil.stopPropagation(event);
		    });
		   EventUtil.addHandle(bo,"click",function(){
		   	alert("我是div上的点击事件");
		   });
		   EventUtil.addHandle(go,"click",function(e){
		   	e=e||window.event;
		   // e = EventUtil.getEvent(e);
		      alert(EventUtil.getElement(e).nodeName);
		      EventUtil.stopPropagation(e);
		      EventUtil.preventDefault(e);
		      alert(EventUtil.getType(e));
		   });

}