(function(){
	//精选路线发送请求
	$.ajax({
		url:"index/wall",
		type:"get",
		dataType:"json"
	})
	.then(function(result){
//		console.log(result);
		//精选路线
		var html="";
		for(var i=0;i<result.length;i++){
			var r=result[i];
	html+=`<li>
			<div class="container">
				<div class="before" style="background-image: url(${r.pic});">
					<div class="zhezhao">
						<div class="font_height">
							<h3>${r.title}</h3>
						<h5>${r.subtitle}</h5>
						</div>
					</div>
				</div>
				<a href="router.html"><div class="after" onclick="route()">
					
				</div></a>
			</div>
		</li>`
	
	}
	var div1=document.querySelector("#s_dh>ul");
	div1.innerHTML=html;
	})
	//首页中热门景点
	$.ajax({
		url:"index/route",
		type:"get",
		dataType:"json"
	})
	.then(function(result){
//		console.log(result);
	//首页中热门景点的采取第一行
	var text="";
	for(var j=12;j<16;j++){
		var r=result[j];
		text+=`<li>
						<div class="travel_scale">
						<a href="${r.href}"><img class="scale_img" src="${r.pic}"/></a>
						</div>
						<div>
							<p>${r.title}</p>
						<p>价格：<span>${r.price}</span></p></div>
					</li>`
	}
	var html6=document.querySelector("#s_cl>ul");
	console.log(html6);
	html6.innerHTML=text;
	//首页中热门景点的采取第二行
	var text="";
	for(var j=16;j<20;j++){
		var r=result[j];
		text+=`<li>
						<div class="travel_scale">
						<a href="${r.href}"><img class="scale_img" src="${r.pic}"/></a>
						</div>
						<div>
							<p>${r.title}</p>
						<p>价格：<span>${r.price}</span></p></div>
					</li>`
	}
	var html2=html6.nextElementSibling;
//	console.log(html2);
	html2.innerHTML=text;
	})
	
	//新闻文字轮播
	$.ajax({
		url:"index/news",
		type:"get",
		dataType:"json"
	})
	.then(function(result){
		var text="";
	for(var j=0;j<result.length;j++){
		var r=result[j];
		text+=`<li>
				<a href="${r.href2}">${r.title}</a>	
				<p>${r.subtitle}</p>
			</li>`
	}
	var html3=document.querySelector("#new>div>ul");
//	console.log(html3);
	html3.innerHTML=text;
	})		
	//新闻图片轮播
	$.ajax({
		url:"index/newspic",
		type:"get",
		dataType:"json"
	})
	.then(function(result){
		var text="";
	for(var j=0;j<result.length;j++){
		var r=result[j];
		text+=`<li><img src="${r.pic}" /></li>`
	}
	var html4=document.querySelector("#new_pic>.inner>ul");
//	console.log(html4);
	html4.innerHTML=text;
	})
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
