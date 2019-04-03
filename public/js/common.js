/***********下拉菜单*************/
	$("[data-trigger=dropdown]").parent().mouseover(function(){
		//查找父元素下孩子中最后一个孩子,让其显示
		$(this).children().last().show();
	})
	//鼠标移出按钮的父元素div时,菜单隐藏
	.mouseout(function(){
		$(this).children().last().hide();
	})
	//顶部轮播
var timer = null,
    index = 0,
    pics = document.getElementsByClassName("banner-slide"),
    lis = document.getElementsByTagName("li");
//顶部轮播
var timer = null,
    index = 0,
    pics = document.getElementsByClassName("banner-slide");
//封装一个代替getElementById()的方法
function byId(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}
function slideImg() {
    var main = byId("main");
    var banner = byId("banner");
    main.onmouseout = function(){
        startAutoPlay();
    }
    main.onmouseout();
}
//开始播放轮播图
function startAutoPlay(){
    timer = setInterval(function(){
        index++;
        if(index>3){
            index = 0;
        }
        changeImg();
    },4000);
}
function changeImg(){
    for(var i=0;i<pics.length;i++){
        pics[i].style.display = "none";
    }
    pics[index].style.display = "block";
}
slideImg();

