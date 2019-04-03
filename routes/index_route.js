const express=require("express");
const router=express.Router();
const pool=require("../pool");
//精选路线
router.get('/wall',(req,res)=>{
	var sql="select sid,pic,title,subtitle from index_pic";
	pool.query(sql,[],(err,result)=>{
		if(err)throw err;
		res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
	})
})
//首页大图轮播
router.get('/pic',(req,res)=>{
	var sql="select href,pic_lg from index_lunbo";
	pool.query(sql,[],(err,result)=>{
		if(err)throw err;
		res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();
	})
})
//热门景点
router.get('/route',(req,res)=>{
	var sql="select pic,title,price,href from place_pic";
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
//新闻文字轮播
router.get('/news',(req,res)=>{
	var sql="select title,subtitle,href2 from news";
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
//新闻图片轮播
router.get('/newspic',(req,res)=>{
	var sql="select pic from news_pic";
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