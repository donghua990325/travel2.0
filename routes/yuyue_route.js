const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空的路由器
var router=express.Router();
router.post('/kehu',(req,res)=>{
	var obj=req.body;
	var $yname=req.body.yname;
	var $phone=req.body.phone;
	var $time=req.body.time;
	var $tourist_location=req.body.tourist_location;
	var $num=req.body.num;
	var $remark=req.body.remark;
	var sql='insert into yuyue set ?';
	console.log(obj);
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		console.log(result);
//		res.addHeader("Access-Control-Allow-Origin":"*");
		console.log(result.affectedRows);
		if(result.affectedRows>0){
			res.send('1');
		}
		
	});
});
module.exports=router;