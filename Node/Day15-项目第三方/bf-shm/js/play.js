//搜索栏
~ function() {
    var headerMiddle = utils.getClass('header-middle')[0];
    var input = headerMiddle.getElementsByTagName('input')[0];
    var headerMiddleBox = utils.getClass('header-middle-box', headerMiddle)[0];
    var lis = headerMiddleBox.getElementsByTagName('li')
    var val = input.value;
    input.onfocus = function() {
        if (input.value == val) {
            input.value = '';
        }
        headerMiddleBox.style.display = 'block'
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function() {
                input.value = this.innerHTML
            }
        }
    }
    input.onblur = function() {
        headerMiddleBox.style.display = 'none'

    }
}();

//滚动栏
// ~ function() {
//     var bannerNav = utils.getClass("banner-nav-inner-right")[0];
//     var bannerScroll = utils.getClass("banner-nav-inner-right-scroll")[0];
//     var bannerNavWrap = utils.getClass("banner-nav-inner")[0];
//     var myUl = bannerNavWrap.getElementsByTagName('ul')[0];

//     var scrollTop = 0;
//     bannerScroll.onmousedown = function(ev) {
//         ev = ev || window.event;
//         var y = ev.clientY - this.offsetTop;
//         document.onmousemove = function(ev) {
//             ev = ev || window.event;
//             scrollTop = ev.clientY - y;
//             if (scrollTop <= 0) {
//                 scrollTop = 0;
//             } else if (scrollTop >= bannerNav.offsetHeight - bannerScroll.offsetHeight) {
//                 scrollTop = bannerNav.offsetHeight - bannerScroll.offsetHeight
//             }
//             bannerScroll.style.top = scrollTop + 'px';
//             myUl.style.top = (myUl.offsetHeight - bannerNav.offsetHeight) / (bannerNavWrap.offsetHeight - bannerScroll.offsetHeight) * (-scrollTop) + 'px';
//         }
//         document.onmouseup = function() {
//             document.onmousemove = document.onmouseup = null;
//         }
//     }

//     bannerNavWrap.onmousewheel = function(ev) {
//         ev = ev || event;
//         scrollMove(ev);
//     }

//     bannerNavWrap.addEventListener('DOMMouseScroll', function(ev) {
//         ev == ev || event;
//         scrollMove(ev);
//     })

//     function scrollMove(ev) {
//         // ev.preventDefault ? ev.preventDefault() : retrunValue = false;
//         ev.preventDefault ? ev.preventDefault() : returnValue = false;
//         if (wheelEvent(ev) > 0) {
//             scrollTop -= 15;
//         } else {
//             scrollTop += 15;
//         }

//         if (scrollTop <= 0) {
//             scrollTop = 0;
//         } else if (scrollTop >= bannerNav.offsetHeight - bannerScroll.offsetHeight) {
//             scrollTop = bannerNav.offsetHeight - bannerScroll.offsetHeight
//         }
//         bannerScroll.style.top = scrollTop + 'px';
//         myUl.style.top = (myUl.offsetHeight - bannerNav.offsetHeight) / (bannerNavWrap.offsetHeight - bannerScroll.offsetHeight) * (-scrollTop) + 'px';
//     }


//     function wheelEvent(ev) {
//         if (ev.wheelDelta) {
//             return ev.wheelDelta;
//         } else {
//             return ev.detail * (-40)
//         }
//     }
// }()

// 猜你喜欢数据绑定
// ~ function() {
//     var contentInner = utils.getClass('content-inner')[0];
//     var contentLike = utils.getClass('content-like', contentInner)[0];
//     var myUl = contentLike.getElementsByTagName('ul')[0];
//     var imgs = myUl.getElementsByTagName('img');
//     ajax({
//         url: "data/data1.json",
//         dataType: "JSON",
//         success: function(jsonData) {
//             getGuess(jsonData.guess)
//         }
//     })

//     function getGuess(jsonData) {
//         var str = '';
//         for (var i = 0; i < jsonData.length; i++) {
//             var data = jsonData[i];
//             str += '<li><div class="img"><img src="" trueSrc="' + data.img + '" ></div><div>' + data.title + ' <span>' + data.score + '</span></div><p>' + data.details + '</p></li>'
//         }
//         myUl.innerHTML = str;
    // }

    // window.onscroll = function(ev) {
    //     ev = ev || this.event;
    //     for (var i = 0; i < imgs.length; i++) {
    //         var curImg = imgs[i];
    //         lazyImg(curImg)
    //         console.log(1)
    //     }
    // }
//     window.addEventListener('scroll', function(ev) {
//         ev = ev || this.event;
//         for (var i = 0; i < imgs.length; i++) {
//             var curImg = imgs[i];
//             lazyImg(curImg)
//         }
//     })


// }();

function lazyImg(curImg) {
    var y = utils.offset(curImg.parentNode).top + curImg.parentNode.offsetHeight;
    var scrTop = document.documentElement.scrollTop + document.documentElement.clientHeight;
    if (scrTop >= y) {
        var oImg = new Image();
        oImg.src = curImg.getAttribute('trueSrc');
        oImg.onload = function() {
            curImg.src = oImg.src;
            curImg.style.display = 'block';
            utils.fadeIn(curImg);
            oImg = null;
        }
    }
}
//热门数据绑定
// ~ function() {
//     var contentBottom = utils.getClass('content-bottom')[0];
//     var contentHot = utils.getClass('content-hot', contentBottom)[0];
//     var myUl = contentHot.getElementsByTagName('ul')[0];
//     var imgs = myUl.getElementsByTagName('img');

//     ajax({
//         url: "data/data1.json",
//         dataType: "JSON",
//         success: function(jsonData) {
//             getGuess(jsonData.hot_recommend)

//         }
//     })

//     function getGuess(jsonData) {
//         var str = '';
//         for (var i = 0; i < jsonData.length; i++) {
//             var data = jsonData[i];
//             str += '<li><div class="img1"><img src="" trueSrc="' + data.img + '" ></div><p>' + data.title + '</p></li>'
//         }
//         myUl.innerHTML = str;
//     }

//     window.onscroll = function(ev) {
//         ev = ev || this.event;
//         for (var i = 0; i < imgs.length; i++) {
//             var curImg = imgs[i];
//             lazyImg(curImg)
//         }
//     }

    // function lazyImg(curImg) {
    //     var y = utils.offset(curImg.parentNode).top + curImg.parentNode.offsetHeight;
    //     var scrTop = document.documentElement.scrollTop + document.documentElement.clientHeight;
    //     if (scrTop >= y) {
    //         var oImg = new Image();
    //         oImg.src = curImg.getAttribute('trueSrc');
    //         oImg.onload = function() {
    //             curImg.src = oImg.src;
    //             curImg.style.display = 'block';
    //             utils.fadeIn(curImg);
    //             oImg = null;
    //         }
    //     }
    // }

// }();

//电影榜交互
// ~ function() {
//     var contentFlm = utils.getClass('content-film')[0];
//     var lis = contentFlm.getElementsByTagName('li');

//     for (var i = 0; i < lis.length; i++) {
//         lis[i].onmouseover = function() {
//             for (var j = 0; j < lis.length; j++) {
//                 lis[j].className = '';
//             }
//             this.className = 'box';
//         }
//     }
// }();


//评论区域数据绑定
// ~ function() {
//     var comment = document.getElementById('comment');
//     var myUl = comment.getElementsByTagName('ul')[0];
//     var count = document.getElementById('count');
//     var totalPage = document.getElementById('totalPage');

//     var n = 1,
//         page = 0;
//     ajax({
//         method: 'get',
//         url: 'http://127.0.0.1:100/getData?n=' + n,
//         dataType: 'JSON',
//         success: function(jsonData) {
//             var data = jsonData.data;
//             page = jsonData.total
//             totalPage.innerHTML = page;
//             bindData(data);

//             comment.onclick = function(ev) {
//                 ev = ev || event;
//                 var target = ev.target || window.srcElement;
//                 var tarInner = target.innerHTML;
//                 if (target.tagName.toUpperCase() === 'SPAN') {
//                     if (tarInner === '上一页') {
//                         if (n === 1) return;
//                         n--;
//                         count.value = n;
//                     }

//                     if (tarInner === '下一页') {
//                         if (n === page) return;
//                         n++;
//                         count.value = n;
//                     }

//                     if (tarInner === '确定') {
//                         if (isNaN(parseInt(count.value))) return;
//                         n = parseInt(count.value);

//                     }
//                     ajax({
//                         method: 'get',
//                         url: 'http://127.0.0.1:100/getData?n=' + n,
//                         dataType: 'JSON',
//                         success: function(jsonData) {
//                             var data = jsonData.data;
//                             bindData(data);
//                         }
//                     })
//                 }
//             }
//             count.onkeyup = function(ev) {
//                 ev = ev || event;
//                 if (ev.keyCode === 13) {
//                     n = parseInt(this.value);
//                     ajax({
//                         method: 'get',
//                         url: 'http://127.0.0.1:100/getData?n=' + n,
//                         dataType: 'JSON',
//                         success: function(jsonData) {
//                             var data = jsonData.data;
//                             bindData(data);
//                         }
//                     })
//                 }

//             }
//         }

//     })



    // function bindData(data) {
    //     var str = '';
    //     for (var i = 0; i < data.length; i++) {
    //         var curData = data[i];
    //         str += '<li class="cliearfix">' +
    //             '<div class="comment_user cliearfix">' +
    //             '<img class="fl" src="' + curData.imgIco + '">' +
    //             '<div class="fl">' +
    //             '<p class="name">' + curData.userId + '</p>' +
    //             '<p class="time">' + curData.date + ' ' + curData.time + '</p>' +
    //             '</div>' +
    //             '</div>' +
    //             '<p class="comment_content">' + curData.content +
    //             '</p>' +
    //             '<p class="dian fr">' +
    //             '<a href="#" class="dian_j">举报</a>' +
    //             '<a href="#" class="dian_icon"></a>' +
    //             '<span class="dian_count">' + curData.count + '</span>' +
    //             '</p>' +
    //             '</li>'
    //     }
    //     myUl.innerHTML = str;
    // }
// }()


//用户登录后
;
(function() {
    var headerRight = utils.getClass('header-right')[0];
    var login = utils.getClass('login', headerRight)[0];
    var userInformation = utils.getClass('userInformation', headerRight)[0];

    var user = utils.getCookie('userName');
    var pass = utils.getCookie('passWord');
    if (user || pass) {
        login.style.display = 'none';
        userInformation.style.display = 'block';
        userInformation.innerHTML = '<span></span><i><a href="#">' + user + '</a></i>';
    }
}())

//评论区域
var bannerNavHeader=document.getElementsByClassName("banner-nav-header")[0];
var divs=bannerNavHeader.getElementsByTagName("div");
var coments=document.getElementsByClassName("coments")[0];
var troduction=document.getElementsByClassName("banner-nav-troduction")[0];
 divs[0].onclick=function(){
     this.id="active";
     divs[1].id="";
     troduction .style.display="block";
     coments.style.display="none";
 }
 divs[1].onclick=function(){
    this.id="active";
    divs[0].id="";
   coments.style.display="block";
   troduction.style.display="none";
}

var text=coments.getElementsByTagName("input")[0];
var button=coments.getElementsByTagName("button")[0];
var comentUl=document.getElementById("comentUl");

button.onclick=function(){
    var newLi=document.createElement("li");
    var liText=document.createTextNode((comentUl.getElementsByTagName("li").length+1)+"楼："+text.value);
    newLi.appendChild(liText);
    var newBtn=document.createElement("button");
    newBtn.innerHTML="删除";
    newLi.appendChild(newBtn);
    newBtn.onclick=function(){
        this.parentNode.remove();
    }
    comentUl.insertBefore(newLi,comentUl.firstElementChild);
    console.log(newLi);
    text.value="";
}
//banner-footer 赞、不喜欢、收藏
var banner_footer_left=document.getElementsByClassName("banner-footer-nav-left")[0];
var lis=banner_footer_left.getElementsByTagName("li");
var flag=false;
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        if(this.index==2){
            if(flag==false){
                this.firstElementChild.style.color="red";
                flag=true;
            }else{
                this.firstElementChild.style.color="#e0e0e0";
                flag=false;
            }
        }else if(this.index==1){
            var myValue=parseInt(this.innerHTML.slice(38,42))+1;
            this.innerHTML='<span class="iconfont number">&#xe6cb;</span> '+myValue;
        }else{
            var myValue=parseInt(this.innerHTML.slice(39,43))+1;
            this.innerHTML='<span class="iconfont number">&#xe645;</span> '+myValue;
        }
    }
}

//获取播放器视频地址(cookie)
// var videoSrc=document.cookie.substring(48);
// var video=utils.getClass("video")[0];
// video.src=videoSrc; 

//获取演员表、影片简介、集数（localstorage）
var news=JSON.parse(localStorage.getItem("news"));
console.log(news);
//取视频地址(localstorage)
$(".video").attr("src",news.videoSrc);
//演员列表
if(news.kind==1 || news.kind==2 || news.kind==3){
    $(".actor").next().html(news.actor);
}else{
    $(".actor").css("display","none").next().css("display","none");
}
//剧情
if(news.kind){
    $(".content").next().html(news.content);
}else{
    $(".content").css("display","none").next().css("display","none");
}
//选集
if(news.kind !=2&& news.kind!=3){
    var str='';
    for(var i=0;i<news.number;i++){
        str+='  <a href="javascript:;">'+(i+1)+'</a>  ';
    }
    $(".banner-nav-troduction .number").next().html(str);
}else{
    $(".banner-nav-troduction .number").css("display","none").next().css("display","none");
}
//电影标题
$(".banner-header .title").html(news.title);
var kindText = '';
if(news.kind==1){
    kindText = "电视剧";
}else if(news.kind==2){
    kindText = '综艺';
}else if(news.kind==3){
    kindText= '电影';
}else if(news.kind==4){
    kindText = '动漫';
}else if(news.kind==5){
    kindText= "儿童";
}else{
    kindText = '纪录片';
}
$(".banner-header .menubar .kind").html(kindText);
$(".banner-header .menubar .name").html(news.title);


//弹幕
//准备随机的颜色
var colors = ["red", "green", "blue", "yellow", "gray", "hotpink", "pink", "saddlebrown"];

//绑定事件点击发射
$(".banner-footer-nav-middle #btn").click(function () {
  //随机的颜色值  获取随机整数（索引）
  var color = colors[Math.round(Math.random() * colors.length-1)];
  //随机的高度
  var top = Math.round(Math.random() * 200);

  //动态的创建标签加入到大的盒子中
  //将输入框的值设置到span中并且初始化样式
  $("<span></span>").text($(".banner-footer-nav-middle #text").val()).css({
    "left": 1000, 
    "color": color,
    "top": top,
  }).animate({
    left:0
  }, 7000, function () {
    //动画完成移除当前这个span   如果span不移除性能够不好
    $(this).remove();
  }).appendTo(".banner-play");

  //清空输入框的内容
  $(".banner-footer-nav-middle #text").val("");
});

//点击回车然后发射
$(".banner-footer-nav-middle #text").keyup(function (ev) {
  //ev:jQuery的事件对象   是全兼容的不用兼容处理  并且方法基本都可以原生JS的事件对象是一样的。
  if (ev.keyCode === 13) { //当前回键抬起
    //让btn的事件再次执行  jQuery对象.事件();
    $(".banner-footer-nav-middle #btn").click();
  }
});


   
//导航
(function(){
    $(".menu").mouseenter(function(){
        $(".child-menu").css("display","block");
    }).mouseleave(function(){
        $(".child-menu").css("display","none");
    });
    })();

//收藏

    


