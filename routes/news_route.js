//使用express构建web服务器
const express=require('express');
const router=express.Router();
const pool=require("../pool");
router.get('/',(req,res)=>{
	var sql="select * from news";
	pool.query(sql,[],(err,result)=>{
		if(err) console.log(err);
		//res.send(result)
		//包含了
		res.writeHead(200,{
			"Access-Control-Allow-Origin":"*"
		});
		res.write(JSON.stringify(result));
		res.end();
	})
})
module.exports=router;