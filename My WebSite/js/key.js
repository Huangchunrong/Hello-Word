
var data = ['充气娃娃一套','iphone','华为mate20一台','ipad','高清液晶屏电视机一台','一千元红包','飞鸽牌自行车一辆','50元手机话费充值卡'];
var timer = null;
var flag = 0;

window.onload = function(){
	var title = document.getElementById("title");
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");
 //开始抽奖
	play.onclick = playFun;
	stop.onclick = stopFun;
//  键盘事件
    document.onkeyup = function(event){
    	 event = event || window.event;
    	// console.log(event.keyCode);
    	if(event.keyCode == 13){
    		if(flag == 0){
    			playFun();
    			flag = 1;
    		}else{
    			stopFun();
    			flag = 0;
    		}
    	}
    }
}

function playFun(){
	clearInterval(timer);
	timer = setInterval(function(){
		var title = document.getElementById("title");
		var play = document.getElementById("play");
		title.innerHTML = data[Math.floor(Math.random()*data.length)];
	},50);
	play.style.background = "#999";
}
function stopFun(){
	clearInterval(timer);
	var play = document.getElementById("play");
	play.style.background = "#036";
}
