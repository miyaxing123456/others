// 自执行函数   轮播图区域的
;
(function() {
    //1.获取要操作的元素
    //通过类名获取是不兼容的
    var bannerContent = getClass("vip-content")[0],
        bannerWrap = getClass("banner-wrap", bannerContent)[0],
        focusList = getClass("focus-list", bannerContent)[0];

    //JS中id querySlector  querySlectorAll  id静态获取
    //className  tagName  动态获取
    var oDivs = bannerWrap.getElementsByTagName("div"),
        oLis = focusList.getElementsByTagName("li");


    var oDivsImg = bannerWrap.getElementsByTagName("img"),
        oLisImg = focusList.getElementsByTagName("img");

    var btns = getClass("btn"),
        btnLeft = btns[0],
        btnRight = btns[1];

    //2.获取数据
    Ajax({
        method: "get", //请求方式
        url: "./data/banner.json", //请求的url地址
        async: true, //请求的同步还是异步
        dataType: "json", //设置请求回来的数据类型
        success: function(data) {
            //因为Ajax是异步的不能在全局拿到  我们绑定数据要在回调函数中
            bindData(data);
        }
    });


    //3.绑定数据
    function bindData(jsonDta) {
        //获取数据的数组
        var bannerArray = jsonDta["banner"];

        //字符串拼接初始值
        var bannerStr = '';
        var focusStr = '';

        //数据的拼接
        for (var i = 0; i < bannerArray.length; i++) {
            var curData = bannerArray[i];
            //字符串拼接
            //要做首屏的懒加载  把获取到的图片地址给到自定义属性
            i === 0 ? bannerStr += '<div  style="z-index:1;opacity:1;"><a href="javascript:;"><img src="" trueSrc="' + curData.src + '"/></a></div>' : bannerStr += '<div><a href="javascript:;"><img src="" trueSrc="' + curData.src + '"/></a></div>';

            //焦点区域的字符串拼接
            //默认第一个li是选中样式  
            if (i === 0) {
                focusStr += '<li class="current"><a href="javascript:;"><img src="" trueSrc="' + curData.src + '" ><i></i></a></li>';
            } else if (i < 9) {
                focusStr += '<li><a href="javascript:;"><img src="" trueSrc="' + curData.src + '"><i></i></a></li>';
            }
        }

        //将拼接好的数据插入到页面
        bannerWrap.innerHTML = bannerStr;
        focusList.innerHTML = '<ul>' + focusStr + '</ul>';

        //实现懒加载  页面加载完毕一秒钟之后展示图片
        window.setTimeout(function() {
            // 实现banner的
            allLazyImg(oDivsImg);
            //实现焦点
            allLazyImg(oLisImg);
        }, 1000);

        //实现banner的核心功能渐隐渐现的轮播图
        banner();
    }

    function banner() {
        bannerWrap.style.width = oDivs.length * 1100 + 'px';
        var n = 0;
        var timer = setInterval(autoPlay, 3000);
        //自动切换
        function autoPlay() {
            n++;
            if (n === oDivs.length) {
                bannerWrap.style.left = 0 + 'px';
                n = 1;
            }
            //平移函数
            move(bannerWrap, "left", 100, (-n * 1100), 30);
            //焦点切换
            for (var i = 0; i < oLis.length; i++) {
                oLis[i].className = "";
            }
            oLis[n === 9 ? 0 : n].className = "current";
        }
        //鼠标移入移出
        bannerContent.onmouseover = function() {
            clearInterval(timer);
        }
        bannerContent.onmouseout = function() {
            timer = setInterval(autoPlay, 3000);
        }
        //左右切换
        btnRight.onclick = autoPlay;
        btnLeft.onclick = function() {
            n--;
            if (n < 0) {
                bannerWrap.style.left = -(oDivs.length - 1) * 1100 + "px";
                n = 8;
            }
            move(bannerWrap, "left", 100, (-n * 1100), 30);
            for (var i = 0; i < oLis.length; i++) {
                oLis[i].className = "";
            }
            oLis[n].className = "current";
        }
        //焦点切换
        for (var i = 0; i < oLis.length; i++) {
            oLis[i].index = i;
            oLis[i].onclick = function() {
                if (n === oDivs.length - 1) {
                    bannerWrap.style.left = 0 + "px";
                }
                move(bannerWrap, "left", 600, (-this.index * 1100), 10);
                for (var i = 0; i < oLis.length; i++) {
                    oLis[i].className = "";
                }
                oLis[this.index].className = "current";
                n = this.index;
            }
        }
    }
    /*
        //banner的核心功能
        function banner() {
            //实现自动轮播
            var step = 0, //step表示当前展示第几张图片  默认值是0展示第一张
                autoTimer = null,
                interval = 2000;
            //设置定时器
            autoTimer = window.setInterval(autoPlay, interval);

            //自动播放
            function autoPlay() {
                step++;
                if (step == oDivs.length) step = 0;
                //切换的细节
                setBanner();
            }

            //banner切换核心代码
            function setBanner() {
                //先让当前要显示的这个DIV zIndex变为1
                for (var i = 0; i < oDivs.length; i++) {
                    if (i == step) {
                        oDivs[i].style.zIndex = 1;
                        //让当前这个透明度变为1并且其它所有的透明度都为0
                        bufferMove(oDivs[i], {
                            opacity: 100
                        }, function () {
                            // 获取所有相邻的DIV
                            var allSiblings = siblings(this);
                            for (var j = 0; j < allSiblings.length; j++) {
                                allSiblings[j].style.opacity = 0;
                            }
                        });
                        continue;
                    }
                    //让其它的DIV zIndex值为0
                    oDivs[i].style.zIndex = 0;
                }

                //焦点对齐
                for (i = 0; i < oLis.length; i++) {
                    i === step ? oLis[i].className = "current" : oLis[i].className = "";
                }
            }


            //鼠标移入暂停轮播  离开继续播放
            bannerContent.onmouseenter = function () {
                window.clearInterval(autoTimer);
            }

            bannerContent.onmouseleave = function () {
                autoTimer = window.setInterval(autoPlay, interval);
            }

            //焦点切换
            for (var i = 0; i < oLis.length; i++) {
                //自定义索引
                oLis[i].index = i;
                oLis[i].onclick = function (ev) {
                    //重新设置step值
                    step = this.index;
                    setBanner();
                }
            }

            //左右切换
            btnRight.onclick = autoPlay;
            btnLeft.onclick = function () {
                step--;
                if (step === -1) step = oDivs.length - 1;
                setBanner();
            }

        }
    */
    //全部图片
    function allLazyImg(allIms) {
        for (var i = 0; i < allIms.length; i++) {
            var curImg = allIms[i];
            lazyImg(curImg);
        }
    }
    /*
        //单张图片
        function lazyImg(curImg) {
            //创建一张临时图片
            var oImg = new Image();
            //给临时赋值真实的地址
            oImg.src = curImg.getAttribute("trueSrc");
            //确保图片资源加载成功
            oImg.onload = function () {
                // 图片一定能够加载成功将真实图片地址赋值给src
                curImg.src = this.src;
                curImg.style.display = "block";
            }
        }
    */

})();


//VIP滚动
~ function() {
    //获取元素
    var vipRoller = getClass("vip-roller")[0],
        rollerBox = getClass("roller-box", vipRoller)[0],
        rollerBoxWrap = getClass("roller-box-wrap", rollerBox)[0],
        rollLeft = getClass("roll-left", vipRoller)[0],
        rollRight = getClass("roll-right", vipRoller)[0];

    //自定义标识
    var flag = true; //默认向右
    rollRight.onclick = function() {
        if (flag) {
            bufferMove(rollerBoxWrap, {
                "left": -1075
            });
            flag = !flag;
        }
    }

    rollLeft.onclick = function() {
        if (!flag) {
            bufferMove(rollerBoxWrap, {
                "left": 0
            });
            flag = !flag;
        }
    }
}();

//影片列表的数据绑定
~ function() {
    //获取要操作的元素
    var recommend = getClass("recommend")[0],
        hot = getClass("hot")[0];

    var recommendFilmPictures = getClass("film-pictures", recommend)[0],
        hotFilmPictures = getClass("film-pictures", hot)[0];

    //获取数据
    Ajax({
        method: "get",
        url: "./data/movie.json",
        async: true,
        dataType: "json",
        success: function(jsonData) {
            //绑定数据  将bindData拼接好的字符串插入到页面
            recommendFilmPictures.innerHTML = bindData(jsonData["recommend"]);
            hotFilmPictures.innerHTML = bindData(jsonData["hot_showing"]);
        }
    });

    //数据拼接 返回值是拼接好的字符串
    function bindData(dataArray) {
        //str:字符串拼接
        //className:不同的类名值   
        //text:不同文本 显示  标准  清晰 高清
        var str = '',
            className = null,
            text = null;

        //做字符串拼接
        for (var i = 0; i < dataArray.length; i++) {
            // 获取数组中的每一项去做对应的处理
            var curData = dataArray[i];
            switch (curData.type) {
                case 1:
                    className = "for-vip-only";
                    break;
                case 2:
                    className = "for-vip-free";
                    break;
                case 3:
                    className = "for-vip-zhekou";
                    break;
            }

            switch (curData.definition) {
                case 1:
                    text = "标清";
                    break;
                case 2:
                    text = "清晰";
                    break;
                case 3:
                    text = "高清";
                    break;
            }

            //处理评分整数补0
            curData.grade = curData.grade.indexOf(".") > 0 ? curData.grade : curData.grade + ".0";
            console.log(curData.grade);

            str += '<li videosrc="blob:https://www.iqiyi.com/f8fa1cdf-f72c-4627-80f2-1135d8054d3f"><a href="play.html"><div class="film-type ' + className + '"></div><div class="film-quality-txt">' + text + '</div><img src="' + curData.image + '"></a><div class="film-text"><h3><a href="">' + curData.title + '</a></h3><h4>' + curData.detail + '</h4> <div class="film-score"><span class="num">' + curData.grade + '</span> </div></div></li>';
        }

        return str;

    }
    var lis = document.getElementsByClassName("focus-list").getElementsByTagName("li");
        for(var i = 0;i<lis.length;i++){
            lis[i].onclick = function(){
                document.cookie = "videosrc="+this.getAttribute("videosrc");
                console.log(1);
                console.log(document.cookie);
            }
        }
}();