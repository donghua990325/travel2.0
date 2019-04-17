(function(){
	//首页图片轮播
	$.ajax({
		url:"index/pic",
		type:"get",
		dataType:"json"
	})
	.then(function(result){
		var text="";
	for(var j=0;j<result.length;j++){
		var r=result[j];
		text+=`<a href="${r.href}">
		            <div class="banner-slide" style="background-image: url(${r.pic_lg});"></div>
		        </a>`
	}
	var html5=document.querySelector("#banner");
//	console.log(html5);
	html5.innerHTML=text;
	})
})()
