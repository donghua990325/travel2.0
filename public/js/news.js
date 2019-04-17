(function(){
	//发送请求
	$.ajax({
		type:"get",
		url:"news",
		dataType:"json"
	})
	.then(function(result){
		console.log(result);
	var html="";
	/******添加公司新闻*******/
	for(var i=0;i<8;i++){
		var n=result[i];
		html+=`<tr>
						<td>
							<div>
							<img src="${n.pic}" class="_img"/>
							</div>
						</td>
						<td>
							<a href="${n.href}">${n.title}</a>	
							<p>
								${n.subtitle}
							</p>
						</td>
					</tr>`
	}
	var div1=document.querySelector("#content1>table")
	div1.innerHTML=html;
	/*******媒体报道*******/
	var html="";
	for(var i=8;i<16;i++){
		var n=result[i];
		html+=`<tr>
						<td>
							<div>
							<img src="${n.pic}" class="_img"/>
							</div>
						</td>
						<td>
							<a href="${n.href}">${n.title}</a>	
							<p>
								${n.subtitle}
							</p>
						</td>
					</tr>`
	}
	var div2=div1.parentNode.nextElementSibling.children[0];
	console.log(div2);
	div2.innerHTML=html;
	/*******行业动态*******/
	var html="";
	for(var i=17;i<result.length;i++){
		var n=result[i];
		html+=`<tr>
						<td>
							<div>
							<img src="${n.pic}" class="_img"/>
							</div>
						</td>
						<td>
							<a href="${n.href}">${n.title}</a>	
							<p>
								${n.subtitle}
							</p>
						</td>
					</tr>`
	}
	var div3=div2.parentNode.nextElementSibling.children[0];
	console.log(div3);
	div3.innerHTML=html;
	})
})()
