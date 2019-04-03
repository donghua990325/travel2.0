const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空的路由器
var router=express.Router();
//添加路由
//1.用户登录
router.post('/login',(req,res)=>{
	//获取post请求的数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	//验证数据是否为空
	if(!$uname){
		res.send('用户名不存在');
		return;
	}
	if(!$upwd){
		res.send('密码不存在');
		return;
	}
	var sql='select * from user where uname=? and upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		console.log(result);
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
//2.查询用户名是否存在
router.post('/cuname',(req,res)=>{
	var $uname=req.body.uname;
	if(!$uname){
		res.send('用户名不能为空');
		return;
	}
	var sql='select * from user where uname=?';
	pool.query(sql,[$uname],(err,result)=>{
		if(err)throw err;
		console.log(result);
		if(result.length>0){
			res.send('0');
		}else{
			res.send('1');
		}
	});
});
//3.注册用户
router.post('/zhuce',(req,res)=>{
	var obj=req.body;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $emaiil=req.body.emaiil;
	console.log($emaiil);
	var $phone=req.body.phone;
	var sql='insert into user set ?';
	console.log(obj);
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		console.log(result);
		console.log(result.affectedRows);
		if(result.affectedRows>0){
			res.send('1');
		}
	});
});
//4.查询显示用户所有数据
router.get('/list',(req,res)=>{
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;
	if(!pno){pno=1}
	if(!pageSize){
		pageSize=7;
	}
	var sql='select * from user limit ?,?';
	var offset=(pno-1)*pageSize;
	pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
       if(err)throw err;
       res.writeHead(200,{
			"Access-Control-Allow-Origin":"*"
		});
		res.write(JSON.stringify(result));
		res.end();
  });
});
//5.删除用户
router.get('/deleteUser',(req,res)=>{
	var sql='delete from user where uid=?';
	var $uid=req.query.uid;
	if(!$uid){
		res.send('0');
		return;
	}
	pool.query(sql,[$uid],(err,result)=>{
		if(err)throw err;
		res.send('1');
	});
});
//6.修改数据
router.post('/updateUser',(req,res)=>{
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $emaiil=req.body.emaiil;
	var $gender=req.body.gender;
	var $phone=req.body.phone;
	var $username=req.body.username;
	var sql='update user set '+'uname=?,upwd=?,emaiil=?,phone=?,username=?,gender=? where uid=?';
	pool.query(sql,[$uname,$upwd,$emaiil,$phone,$username,$gender,$uid],(err,result)=>{
		if(err)throw err;
		console.log(result);
		res.send("1");
		
	});
})
//7.查询接口
router.get('/query',(req,res)=>{
	//得到uid
	var $uid=req.query.uid;
	if(!$uid){
		res.send('0');
		return;
	}
	var sql="select * from user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send('1');
		}
	});
});
//导出路由器
module.exports=router;



