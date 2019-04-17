(function(){
    //后台景点列表
    $.ajax({
        url:"router/page",
        type:"get",
        dataType:"json"
    })
        .then(function(result){
              console.log(result)
            var text="";
            for(var j=0;j<result.length;j++){
                var r=result[j];
                text+=`<tr><td>${r.cid}</td><td>${r.pic}</td>
                <td>${r.title}</td>
                <td>${r.subtitle}</td>
                <td>${r.price.toFixed(2)}</td>
                <td><a href=''>修改</a></td>
                </tr>`
            }
            var html1=document.querySelector("#listbody");
	console.log(html1);
            html1.innerHTML=text;
        })
     //后台添加用户列表
     $.ajax({
        url:"user/list",
        type:"get",
        dataType:"json"
    })
        .then(function(result){
//            console.log(result)
            var text="";
            for(var i=0;i<result.length;i++){
                var r=result[i];
			if(r.gender==0){
				gender="女";
			}else if(r.gender==1){
				gender="男";
			}else{
				gender="不详";
			}
                text+=`<tr><td>${r.uname}</td>
                <td>${r.upwd}</td>
                <td>${r.emaiil}</td>
                <td>${r.phone}</td>
                <td>${r.username}</td>
                <td>${gender}</td>
                <td><a href='admin_main.html?uid=${r.uid}'>修改用户</a></td>
                </tr>`
            }
            var html2=document.querySelector("#listbody1");
//	console.log(html2);
            html2.innerHTML=text;
    })
})()

        