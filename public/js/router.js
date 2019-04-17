(function(){
	//发送请求
	$.ajax({
		type:"get",
		url:"router",
		dataType:"json"
	})
	.then(function(result){
		console.log(result);
	
	/******添加推荐线路*******/
	var html="";
	html='<tr>'
	for(var i=0;i<4;i++){
		var n=result[i];
		html+=`<td>
					<img src=" ${n.pic} "/>
						<div class="fig">
							<h2>${n.title}</h2>
							<a>${n.subtitle}</a>
							<p>价格:${n.price.toFixed(2)}</p>
						</div>
				</td>`
	}
	html+='</tr><tr>'
	for(var i=4;i<8;i++){
		var n=result[i];
		html+=`<td>
				<img src=" ${n.pic} "/>
					<div class="fig">
						<h2>${n.title}</h2>
						<a>${n.subtitle}</a>
						<p>价格:${n.price.toFixed(2)}</p>
					</div>
			</td>`
	}
	html+='</tr><tr>'
	for(var i=8;i<12;i++){
		var n=result[i];
		html+=`<td>
				<img src=" ${n.pic} "/>
					<div class="fig">
						<h2>${n.title}</h2>
						<a>${n.subtitle}</a>
						<p>价格:${n.price.toFixed(2)}</p>
					</div>
			</td>`
	}
	html+='</tr>'
	var div1=document.querySelector("#content1>table")
//	console.log(div1);
	div1.innerHTML=html;
	/*******较热路线*******/
	var html="";
	html='<tr>'
	for(var i=12;i<16;i++){
		var n=result[i];
		html+=`<td>
				<img src=" ${n.pic} "/>
					<div class="fig">
						<h2>${n.title}</h2>
						<a>${n.subtitle}</a>
						<p>价格:${n.price.toFixed(2)}</p>
					</div>
			</td>`
	}
	html+='</tr><tr>';
	for(var i=16;i<20;i++){
		var n=result[i];
		html+=`<td>
					<img src=" ${n.pic} "/>
						<div class="fig">
							<h2>${n.title}</h2>
							<a>${n.subtitle}</a>
							<p>价格:${n.price.toFixed(2)}</p>
						</div>
				</td>`
	}
	html+='</tr>'
	var div2=div1.parentNode.nextElementSibling.children[0];
	console.log(div2);
	div2.innerHTML=html;
	/*******国内路线*******/
var html="";
	html='<tr>'
	for(var i=20;i<24;i++){
		var n=result[i];
		html+=`<td>
				<img src=" ${n.pic} "/>
					<div class="fig">
						<h2>${n.title}</h2>
						<a>${n.subtitle}</a>
						<p>价格:${n.price.toFixed(2)}</p>
					</div>
			</td>`
	}
	html+='</tr><tr>';
	for(var i=24;i<28;i++){
		var n=result[i];
		html+=`<td>
					<img src=" ${n.pic} "/>
						<div class="fig">
							<h2>${n.title}</h2>
							<a>${n.subtitle}</a>
							<p>价格:${n.price.toFixed(2)}</p>
						</div>
				</td>`
	}
	html+='</tr>'
	var div3=div2.parentNode.nextElementSibling.children[0];
	div3.innerHTML=html;
	/*******国外路线*******/
var html="";
	html='<tr>'
	for(var i=28;i<32;i++){
		var n=result[i];
		html+=`<td>
				<img src=" ${n.pic} "/>
					<div class="fig">
						<h2>${n.title}</h2>
						<a>${n.subtitle}</a>
						<p>价格:${n.price.toFixed(2)}</p>
					</div>
			</td>`
	}
	html+='</tr><tr>';
	for(var i=32;i<36;i++){
		var n=result[i];
		html+=`<td>
					<img src=" ${n.pic} "/>
						<div class="fig">
							<h2>${n.title}</h2>
							<a>${n.subtitle}</a>
							<p>价格:${n.price.toFixed(2)}</p>
						</div>
				</td>`
	}
	html+='</tr>'
	var div4=div3.parentNode.nextElementSibling.children[0];
	div4.innerHTML=html;
	/*******自由行*******/
var html="";
	html='<tr>'
	for(var i=36;i<40;i++){
		var n=result[i];
		html+=`<td>
				<img src=" ${n.pic} "/>
					<div class="fig">
						<h2>${n.title}</h2>
						<a>${n.subtitle}</a>
						<p>价格:${n.price.toFixed(2)}</p>
					</div>
			</td>`
	}
	html+='</tr><tr>';
	for(var i=40;i<result.length;i++){
		var n=result[i];
		html+=`<td>
					<img src=" ${n.pic} "/>
						<div class="fig">
							<h2>${n.title}</h2>
							<a>${n.subtitle}</a>
							<p>价格:${n.price.toFixed(2)}</p>
						</div>
				</td>`
	}
	html+='</tr>'
	var div5=div4.parentNode.nextElementSibling.children[0];
	div5.innerHTML=html;
	})
})()