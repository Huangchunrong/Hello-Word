window.onload = function() {
	var title = document.getElementById("contain-tit");
	var mods = document.getElementsByClassName("mod");
	 // console.log(mods);
	 var  titles = title.getElementsByTagName("li");
	 if(titles.length!=mods.length){
	 	return;
	 }
	      // console.log(titles);
	 
	for(var i = 0;i<mods.length ;i++){
		 titles[i].index = i;
		 titles[i].onmouseover=function(){
		 	for(var j=0; j<titles.length; j++){
		 		titles[j].className="";
		 		mods[j].style.display="none";
		 	}
		 	 this.className="select";
		 	 mods[this.index].style.display="block";
		 };
	}
}