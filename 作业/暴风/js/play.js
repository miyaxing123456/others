//使用jQuery完成搜索框功能，接入iqiyi数据
(function($){
	var $search=$(".search"),
		$input = $search.find('.input'),
        $btn = $search.find('.btn'),
        $layer = $search.find('.search-layer');
    //点击btn按钮时
    $btn.on("click",function(){
    	if($.trim($input.val())===""){
    		return false;
    	}
    	window.open("https://so.iqiyi.com/so/q_"+$input.val());
    });
    //按下Enter键
    $input.on("keyup",function(ev){
    	if($.trim($input.val())!==""&&ev.key==="Enter"){
    		window.open("https://so.iqiyi.com/so/q_"+$input.val());
    	}else{
    		return false;
    	}	
    });
    //input搜索框显示下拉层
    $input.on("input",function(){
    	var url='https://suggest.video.iqiyi.com/?key='+ encodeURIComponent($.trim($input.val()))+'&platform=11&ppuid=&rltnum=10&uid=9fe321ab0f255439a350922bc2f1d976&cb=cb';
    	$.ajax({
    		url:url,
    		dataType:null
    	}).done(function(data){
    		//返回的是字符串
    		var str=data.slice(9);
    		var obj=JSON.parse(str);
    		var html="",
    			dataNum=obj.data.length,
    			maxNum=10;
    		if(dataNum===0){
    			$layer.hide().html("");
    			return;
    		}
    		for(var i=0;i<dataNum;i++){
    			if(i>=maxNum) break;
    			html +='<li class="item">' + obj.data[i].name + '</li>';
    		}
    		$layer.html(html).show();
    	}).fail(function(){
    		$layer.hide().html("");
    	});
    });
    //点击下拉层
    $layer.on("click",".item",function(){
    	console.log(1);
    	$input.val(removeHtmlTags($(this).html()));
    	window.open("https://so.iqiyi.com/so/q_"+$input.val());
    });
    //$layer.on("click",function(){
    	//console.log(1);
    //});
    //搜索框失焦的时候
    $input.on('focus', function() {
        $layer.html()===""?$layer.hide():$layer.show();
    }).on('blur', function(e) {
        return false;
    });
    //消除掉返回字符串中的html标签
    function removeHtmlTags(str) {
        return str.replace(/<(?:[^>'"]|"[^"]*"|'[^']*')*>/g, '');
    }
})(jQuery);

//选项卡切换
(function($){
	var $tabFirst=$("#tab-first"),
		$tabSecond=$("#tab-second"),
		$contentFirst=$("#content-first"),
		$contentSecond=$("#content-second");
	$tabFirst.on("click",function(){
		$(this).addClass("active");
		$contentFirst.addClass("active");
		$tabSecond.removeClass("active");
		$contentSecond.removeClass("active");
	});
	$tabSecond.on("click",function() {
		$(this).addClass("active");
		$contentSecond.addClass("active");
		$tabFirst.removeClass("active");
		$contentFirst.removeClass("active");
	})
})(jQuery);

//滑块滑动
(function($){
	var $scrollContent=$(".scroll-content"),
		$scrollBox=$(".scroll-box"),
		$aspan=$scrollBox.find("span");
	var sapnTop=null;
	$aspan.on("mousedown",function(ev){
		var y=ev.clientY - $(this).outerHeight();
		console.log(ev);
		document.onmousemove=function(ev){
			console.log(ev.clientY);
			sapnTop=ev.clientY-y;
			console.log(ev.clientY,y);
			var minTop=0,
				maxTop=$scrollBox.outerHeight()-$aspan.outerHeight();
			if(sapnTop<=minTop){
				sapnTop=minTop;
			}else if(sapnTop>maxTop){
				sapnTop=maxTop;
			}
			$aspan.css("top",sapnTop+"px");
			$scrollContent.css("top",-sapnTop*(($scrollContent.outerHeight()-584)/($scrollBox.outerHeight()-$aspan.outerHeight()))+"px");
		}
		document.onmouseup = function () {
        		document.onmousemove = document.onmouseup = null;
    	}
    });
    var scrollContent=$scrollContent.get(0);
    scrollContent.onmousewheel = function (ev) {
    ev = ev || window.event;
    myScroll(ev);
	}
	function myScroll(ev) {
		ev.preventDefault();
		if(wheelEvent(ev)>0){
			sapnTop-=5;
		}else {
			sapnTop+=5;
		}
		var minTop=0,
			maxTop=$scrollBox.outerHeight()-$aspan.outerHeight();
		if(sapnTop<=minTop){
			sapnTop=minTop;
		}else if(sapnTop>maxTop){
			sapnTop=maxTop;
		}
		$aspan.css("top",sapnTop+"px");
		$scrollContent.css("top",-sapnTop*(($scrollContent.outerHeight()-584)/($scrollBox.outerHeight()-$aspan.outerHeight())
			)+"px");
	}
	function wheelEvent(ev) {
    if (ev.wheelDelta) {
        return ev.wheelDelta;
    } else {
        return ev.detail * -40; //-3  3
    }
}
})(jQuery);

//电影榜
var board=document.getElementsByClassName('board')[0],
	list=board.getElementsByTagName("ul")[0],
	item=list.getElementsByTagName("li");
list.onmouseover=function(ev){
	for(let i=0;i<item.length;i++){
		item[i].removeAttribute("class");
	}
	console.log(ev.target);
	ev.target.parentNode.parentNode.setAttribute("class","active");
}


//评论区
var comment=document.getElementsByClassName("comment")[0],
	textarea=comment.getElementsByTagName("textarea")[0],
	number=document.getElementById("number");
textarea.oninput=function(){
	number.innerHTML=140-textarea.value.length;
}
//点赞系统
var zanList=document.getElementsByClassName("dianzan");
for(var i=0;i<zanList.length;i++){
	zanList[i].setAttribute("data-flag","false");
	zanList[i].onclick=zan();
}
function zan(){
	return function(){
		if(this.getAttribute("data-flag")==="false"){
			this.getElementsByTagName("span")[0].innerHTML=Number(this.getElementsByTagName("span")[0].innerHTML)+1;
			this.setAttribute("data-flag","true");
		}else{
			this.getElementsByTagName("span")[0].innerHTML=Number(this.getElementsByTagName("span")[0].innerHTML)-1;
			this.setAttribute("data-flag","false");
		}
	}
}