const express=require('express');
//中间件
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
//引入预约路由器
const yuyueRouter=require('./routes/yuyue_route.js');
//引入新闻路由器
const newsRouter=require('./routes/news_route.js');
//引入路线路由器
const Router=require('./routes/router.js');
//引入首页的路由器
const indexRouter=require('./routes/index_route.js');

//创建web服务器
var server=express();
server.listen(5050);//监听
//托管静态资源到public
server.use(express.static('./public'));
//托管资源到img
server.use(express.static('./public/img'));
//配置中间件
server.use(bodyParser.urlencoded({
	entended:false
}))
//把用户路由器挂载到/user下，访问形式user/接口
server.use('/user',userRouter);
//把预约路由器挂载到/yuyue下,访问形式yuyue/接口
server.use('/yuyue',yuyueRouter);
//把新闻路由器挂载到/news下,访问形式new/接口
server.use('/news',newsRouter);
//把路线路由器挂载到/route下,访问形式route/接口
server.use('/router',Router);
//把首页路由器挂载到/index下,访问形式index/接口
server.use('/index',indexRouter);
