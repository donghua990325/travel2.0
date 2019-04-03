SET NAMES UTF8;
DROP DATABASE IF EXISTS travel;
CREATE DATABASE travel CHARSET=UTF8;
USE travel;
/*客户信息*/
CREATE TABLE user(
uid INT PRIMARY KEY AUTO_INCREMENT,	
uname VARCHAR(16),
upwd VARCHAR(32),
emaiil VARCHAR(32),
phone VARCHAR(11),
gender VARCHAR(1),
username VARCHAR(6)/*真实姓名*/
);
/******首页精选路线********/
CREATE TABLE index_pic(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),            /*景点图片*/
	title VARCHAR(32),       /*精选路线大标题*/
	subtitle VARCHAR(32)           /*副标题*/
);
/**********首页+每页上部的轮播效果************/
CREATE TABLE index_lunbo(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	href VARCHAR(32),			/*首页轮播跳转*/	
	pic_lg VARCHAR(128)          /*轮播图片*/
);
/************首页新闻部分的轮播**************/
CREATE TABLE news_pic(
	pid  int PRIMARY KEY AUTO_INCREMENT,
	pic  VARCHAR(128)	/*图片路径*/
);
/*路线景点*/
CREATE TABLE place_pic(
  cid INT PRIMARY KEY AUTO_INCREMENT,/**/
  pic VARCHAR(128),            /*景点图片*/
  title VARCHAR(32),            /*景点名称*/
  subtitle VARCHAR(32),           /*副标题*/
	price DECIMAL(10,2),		  /*价格*/
 	href VARCHAR(32)			/*首页热门景点跳转*/		
);
/*在线预约*/
CREATE TABLE yuyue(
	yid INT PRIMARY KEY AUTO_INCREMENT,/**/
	yname VARCHAR(16),				/*预约人名字*/
	phone VARCHAR(11),				/*预约人手机号*/
	time VARCHAR(12),					/*预约出行时间*/
	tourist_location VARCHAR(128),		/*旅游地点*/
	num INT(3),								/*出行人数*/
	remark VARCHAR(128)				/*留言备注*/
);
/*新闻中心--表1公司新闻--表2媒体查询--表3行业动态*/
CREATE TABLE news(
	nid   int PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  pic VARCHAR(128),	#图片路径
  time BIGINT,  		#发表时间
  href VARCHAR(128),	#点击进入对应链接
  href2 VARCHAR(32)		/*首页点击新闻跳转*/
);

/******************/
/*****数据导入******/
/********************/
/***用户信息****/
INSERT INTO user VALUES
(NULL,"ming",'123456','123@qq.com','12345678932',1,'王家明'),
(NULL,"hua",'6789561','987@qq.com','18137196326',0,'顾辛曼'),
(NULL,"qin",'abcdefg','456@qq.com','13545696352',1,'肖潇花'),
(NULL,"xiao",'456789','789@qq.com','13547569422',0,'嗯啊'),
(NULL,"dingding",'0987654','ding@qq.com','15488632145',1,'John'),
(NULL,"dangdang",'fdasdxzc','dang@qq.com','13894542633',1,'dang'),
(NULL,"yao",'51913151','5195@qq.com','17895426225',0,'云瑶'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569','1','窦志强'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560','0', '秦小雅'),
(NULL, 'aaaa', '123456', 'a@qq.com', '13505464215','0', '小雅'),
(NULL, 'babba', '123456', 'ba@qq.com', '13501234560','0' , '秦雅'),
(NULL, 'haha', '123456', 'ha@qq.com', '13501234560', '0', '秦小'),
(NULL, 'dede', '123456', 'de@qq.com', '13501234560','0', '小雅');
/****在线预约****/
INSERT INTO yuyue VALUES
(NULL,"jiaming",'12345678932','2018-12-12','香港迪士尼','2','NULL'),
(NULL,"huahua",'13505464215','2018-12-25','西双版纳','2','吃好喝好');
/*****公司新闻,媒体报道,行业动态 ++++首页新闻部分的跳转*******/
INSERT INTO news VALUES(NULL,'阿联酋，沙丘里的绿色之旅','阿联酋有着世界上较大的沙漠群，被称为“空白之地”(the Empty Quarte)，在古老的年代里，人们只有依靠骆驼才能穿过这片茫茫的大漠。','img/news6.jpeg','2014-10-27','news.html?xid=1','news.html'),
(NULL,'寻找避暑好清凉去处 度过这个酷热的夏日','“宁静的夏天，天空中繁星点点……知了也睡了，安静的睡了”。在白天酷热的人们，三三两两的从家里走出来，感受夏天的黄昏，感受酷夏傍晚的清凉。','img/news1.jpg','2014-10-1','news.html?xid=2','news.html'),
(NULL,'在欧盟诞生地马斯特里赫特 寻古觅幽','1992年马斯特里赫特条约签订，欧盟诞生，使荷兰较南部的小城马斯特里赫特一时间名声大振。','img/news2.jpg','2015-10-5','news.html?xid=3','news.html'),
(NULL,'旅游媒体人较爱的夏季目的地','海滩，丛林，都市，乡村。夏天一到，可选择的旅行目的地让人眼花缭乱，而夏季通常也是旅行旺季。','img/news4.jpg','2018-08-11','news.html?xid=4','news.html'),
(NULL,'美国馆取名“鹰巢” 使用寿命1000年','美国馆占地面积约6000平方米，是中国2010年上海世界博览会较大的国家展馆之一，总预算为6100万美元。','img/news6.jpeg','2017-1-25','news.html?xid=5','news.html'),
(NULL,'从尘世到佛国 感受缅甸的静谧时光','缅甸是世俗生活上演的尘世，更是遍布寺庙与千年塔林的佛国。时光在这里停下匆忙的脚步，徘徊在混合了浓郁东方色彩的缅甸大屋与殖民时代旧欧式建筑之间。','img/news1.jpg','2018-03-25','news.html?xid=6','news.html'),
(NULL,'五天四夜热吻蓝色土耳其','拥有双重性格的土耳其一向是人们心中介于中东和东欧之间的模糊而神秘的地域。令人惊奇的是土耳其不仅拥有地跨欧亚两大洲的独特地理位置，而且它还分别沿爱琴海、地中海和黑海构造出了整个疆域轮廓。','img/news2.jpg','2018-06-07','news.html?xid=7','news.html'),
(NULL,'徒步墨尔本 低碳自然生态行','对于习惯了循规蹈矩的旅行方式的你，一定希望得到除了上车睡觉、下车拍照之外的观光新体验。当人们都在大讲自己在某一方面又回收了多少碳排放量的时候，“低碳”就已经渗透到了生活得各个方面，甚至成为时尚，那么绿色出游，就是今年较重要的旅游关键词。','img/news4.jpg','2018-07-15','news.html?xid=8','news.html'),
(NULL,'夏季出游需预防中暑','生活在城市，遇上中暑并非奇事。对于那些利用假期出游在外，动辄远足、爬山，却又不注意防暑散热的游客来说，中暑还是经常发生的。','img/news6.jpeg','2014-10-27','news.html?xid=9','news.html'),
(NULL,'四川千里自驾 黯然掠过北川灾后的余伤','“ 从成都出发，中午时分就到了北川，我们预计从北川穿过再继续往北，可是快到北川县城的时候就 看见路边停满了车，一位个子高高的小警察满头大汗地指挥交通，告诉我们车不能再往前开了。','img/news1.jpg','2014-10-1','news.html?xid=10','news.html'),
(NULL,'2010国内旅交会专访','云南遭遇了百年一遇的大旱，干旱以后云南的旅游品质能否得到保障？由于干旱以后，云南的旅游景区景点、宾馆饭店目前运营是否正常？','img/news2.jpg','2015-10-5','news.html?xid=11','news.html'),
(NULL,'泰国局势恢复正常 泰国游昨重启','昨天，即将前往泰国旅游的25名广东游客，与从泰国远道而来的泰国旅游局东亚处处长蓬阿南齐聚广州大厦饮早茶，每位游客都收到了一封幸运“利市”。','img/news4.jpg','2018-08-11','news.html?xid=12','news.html'),
(NULL,'突尼斯国家旅游局驻华代表处隆重揭幕','6月1日下午，为了配合突尼斯国家馆在上海世博会举办的相关活动，由突尼斯国家旅游局及突尼斯驻华大使馆共同举办的“突尼斯国家旅游局驻华代表处揭幕仪式” 在突尼斯国家旅游局驻华代表处位于朝阳区LG双子座大厦的办公室举行。','img/news6.jpeg','2017-1-25','news.html?xid=13','news.html'),
(NULL,'南湖国旅·马尔代夫航班杯首届华南校际创意大赛落幕','1000万人民币的市场营销计划，预计收到10万马尔代夫及其他海岛游客源，占领广东超过五成的海岛游市场，其中一部分营销创意方式，很可能出学生哥之手！','img/news1.jpg','2018-03-25','news.html?xid=14','news.html'),
(NULL,'泰国海岛游恢复出团 部分包机线报价走低','昨日从各大旅行社了解到，今年新一轮的包机海岛游，随着暑期出游热潮的到来即将全面启动。','img/news2.jpg','2018-06-07','news.html?xid=15','news.html'),
(NULL,'美国有望进一步放宽国内赴美旅游签证','美国有望进一步放宽国内赴美旅游签证的审批，并扩大签证范围。','img/news4.jpg','2018-07-15','news.html?xid=16','news.html'),
(NULL,'巴以冲突游让游客们趋之若鹜 游客数猛增','自2005年第二次巴勒斯坦人民大起义结束后，巴以地区的安全形势逐年好转。以色列旅游部的较新数据显示，今年1-4月份，以色列共接待了106万游客，创下历史新高。','img/news6.jpeg','2014-10-27','news.html?xid=17','news.html'),
(NULL,'出境提示：旅游局提示暂缓赴牙买加旅游','从国家旅游局网站获悉，牙买加首都金斯敦发生骚乱，国家旅游局发出紧急出行提示，请中国游客暂缓赴牙买加旅游。','img/news1.jpg','2014-10-1','news.html?xid=18','news.html'),
(NULL,'以色列入境旅游增速显著 2012欲达全球400万游客','记者从以色列旅游局北京办事处获悉，今年4月份共有31.7 万旅游者到访了以色列，比2009年同期增长了26%，而与历史较高纪录的2008年相比也增加了9%。','img/news2.jpg','2015-10-5','news.html?xid=19','news.html'),
(NULL,'美联航客机遇乱流下坠 致至少6名乘客受伤','据香港“星岛日报网”报道，周二(25日)，一架美国联合航空公司(United Airlines)由伦敦飞往洛杉矶的班机途中遇到气流，紧急降落。导致至少6乘客受伤。','img/news4.jpg','2018-08-11','news.html?xid=20','news.html'),
(NULL,'个人赴日游门槛降低 持信用卡金卡可申请签证','近日，日本外务省正式宣布，从今年7月1日起，全面扩大中国公民赴日个人旅游签证申请范围，主要包括扩大了受理地域范围、扩大了送签代理范围和扩大了申请人群的范围。','img/news6.jpeg','2017-1-25','news.html?xid=21','news.html'),
(NULL,'赴美旅游新玩法“世界马都”主题游将推出','日前，由美国肯塔基州驻中国代表处组织的中国出境游同业考察团首次前往“世界马都”美国肯 塔基州考察旅游市场。','img/news5.jpg','2018-03-25','news.html?xid=22','news.html'),
(NULL,'借世博会催热旅游业 澳掷800万吸揽中国客','据澳大利亚《星岛日报》报道，维省借助上海世博会宣传旅游业，将投入800万元吸揽中国游客。','img/news1.jpg','2018-06-07','news.html?xid=23','news.html'),
(NULL,'日本降低个人游签证门槛 价格有望下降三成','早前有媒体报道，从7月1日起将放宽中国个人旅行签证标准，从现在的申请者需达到年收入人民币25万元降至3万~5万元。','img/news4.jpg','2018-07-15','news.html?xid=24','news.html');
/************路线景点************/
INSERT INTO place_pic VALUES
(NULL,'img/router1.jpg','成都自由行','成都自由行','999.00','router.html'),
(NULL,'img/router2.jpg','厦门自由行','厦门自由行','2500.00','router.html'),
(NULL,'img/router3.jpg','丽江自由行','丽江自由行','1600.00','router.html'),
(NULL,'img/router4.jpg','自由行大连','自由行大连','2600.00','router.html'),
(NULL,'img/router5.jpg','威海自由行','威海自由行','4200.00','router.html'),
(NULL,'img/router6.jpg','马尔代夫','马尔代夫','25999.00','router.html'),
(NULL,'img/router7.jpg','夏威夷','夏威夷','40999.00','router.html'),
(NULL,'img/router8.jpg','威海自由行','威海自由行','25999.00','router.html'),
(NULL,'img/router9.jpg','马尼拉长滩岛','威马尼拉长滩岛','44999.00','router.html'),
(NULL,'img/router10.jpg','东京北海道','东京北海道','20999.00','router.html'),
(NULL,'img/router11.jpg','欧洲浪漫之旅','欧洲浪漫之旅','49999.00','router.html'),
(NULL,'img/router12.jpg','青岛自由行','欧青岛自由行','6000.00','router.html'),
(NULL,'img/mark_ot89hs07_ho5i.jpg','西双版纳','西双版纳','4299.00','router.html'),
(NULL,'img/mark_bmvolxcs_lipb.jpg','蜈支洲岛','蜈支洲岛','2699.00','router.html'),
(NULL,'img/mark_pzthu0cp_vwle.jpg','阳朔','阳朔','1099.00','router.html'),
(NULL,'img/mark_i2bv7wym_ih3n.jpg','香格里拉','香格里拉','1099.00','router.html'),
(NULL,'img/mark_ybcwnarm_0jg3.jpg','成都--乐山--峨眉山--青山城--都江堰','成都--乐山--峨眉山--青山城--都江堰','1099.00','router.html'),
(NULL,'img/mark_obhl64oj_gxjf.jpg','成都--九寨','成都--九寨','899.00','router.html'),
(NULL,'img/mark_0ewieeot_9kmh.jpg','桂林-漓江-阳朔','桂林-漓江-阳朔','2000.00','router.html'),
(NULL,'img/mark_dyb8rkdu_0069.jpg','北京-野三坡','北京-野三坡','1099.00','router.html'),
(NULL,'img/router13.jpg','瑶里古镇','瑶里古镇','2200.00','router.html'),
(NULL,'img/router14.jpg','张家界','瑶张家界','12300.00','router.html'),
(NULL,'img/router15.jpg','贵州黄果树','贵州黄果树','1500.00','router.html'),
(NULL,'img/router16.jpg','胡里山炮台','胡里山炮台','2600.00','router.html'),
(NULL,'img/router17.jpg','丽江','丽江','200.00','router.html'),
(NULL,'img/router18.jpg','三亚','三亚','2999.00','router.html'),
(NULL,'img/router19.jpg','云台山','云台山','1090.00','router.html'),
(NULL,'img/router20.jpg','井冈山','井冈山','150.00','router.html'),
(NULL,'img/router21.jpg','马尔代夫','马尔代夫','25999.00','router.html'),
(NULL,'img/router22.jpg','夏威夷','夏威夷','40999.00','router.html'),
(NULL,'img/router23.jpg','香港迪士尼','香港迪士尼','4699.00','router.html'),
(NULL,'img/router24.jpg','马尼拉长滩岛','马尔尼拉长滩岛','44999.00','router.html'),
(NULL,'img/router25.jpg','东京北海道','东京北海道','20999.00','router.html'),
(NULL,'img/router26.jpg','欧洲浪漫之旅','欧洲浪漫之旅','49999.00','router.html'),
(NULL,'img/router27.jpg','毛里求斯','毛里求斯','45999.00','router.html'),
(NULL,'img/router28.jpg','台湾西线','台湾西线','5999.00','router.html'),
(NULL,'img/router1.jpg','成都自由行','成都自由行','999.00','router.html'),
(NULL,'img/router2.jpg','厦门自由行','厦门自由行','2500.00','router.html'),
(NULL,'img/router3.jpg','丽江自由行','丽江自由行','1600.00','router.html'),
(NULL,'img/router4.jpg','自由行大连','自由行大连','2600.00','router.html'),
(NULL,'img/router5.jpg','威海自由行','威海自由行','4200.00','router.html'),
(NULL,'img/router29.jpg','裴济自由行','裴济自由行','4200.00','router.html'),
(NULL,'img/router30.jpg','马尔代夫自由行','马尔代夫自由行','25999.00','router.html');
/************首页--推荐路线****************/
INSERT INTO index_pic VALUES
(NULL,'img/1.jpg','推荐路线','Recommended route'),
(NULL,'img/2.jpg','较热路线','Latest route'),
(NULL,'img/3.jpg','国内路线','Domestic route'),
(NULL,'img/4.jpg','国外路线','Foreign route'),
(NULL,'img/2.jpg','自由行','Independent route');
/**********首页新闻部分的轮播************/
INSERT INTO news_pic VALUES
(NULL,'img/about_md.jpg'),
(NULL,'img/lunbo2_md.jpg'),
(NULL,'img/lunbo3_md.jpg'),
(NULL,'img/about_about_md.jpg');
/**********首页+每页上部的轮播效果************/
INSERT INTO index_lunbo VALUES
(NULL,'router.html','img/lunbo_lg_1.jpg'),
(NULL,'router.html','img/lunbo_lg2.jpg'),
(NULL,'router.html','img/lunbo_lg_3.jpg'),
(NULL,'router.html','img/lunbo_lg_4.jpg');

