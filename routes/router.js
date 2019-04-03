//使用express构建web服务器
const express=require('express');
const router=express.Router();
const pool=require("../pool");
//显示全部列表
router.get('/',(req,res)=>{
	var sql="select * from place_pic";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		//res.send(result)
		//包含了
		//跨域
		res.writeHead(200,{
			"Access-Control-Allow-Origin":"*"
		});
		res.write(JSON.stringify(result));
		res.end();
	})
})
//添加列表
router.get('/addlist',(req,res)=>{
	var pic=req.query.pic;
	var title=req.query.title;
	var subtitle=req.query.subtitle;
	var price=req.query.price;
	var sql="insert into place_pic values(null,?,?,?,?,'router.html')";
	pool.query(sql,[pic,title,subtitle,price],(err,result)=>{
		if(err)throw err;
		res.send({code:1,msg:"添加成功"})
	})
})
//列表分页
router.get('/page',(req,res)=>{
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;
	if(!pno){pno=1}
	if(!pageSize){
		pageSize=7;
	}
	var sql="select cid,pic,title,subtitle,price from place_pic limit ?,?";
	var offset=(pno-1)*pageSize;
	pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
       if(err)throw err;
       res.writeHead(200,{
			"Access-Control-Allow-Origin":"*"
		});
		res.write(JSON.stringify(result));
		res.end();
//     res.send(result);
  });
})
module.exports=router;