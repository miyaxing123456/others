~ function () {
    //获取要操作的元素
    var filmPicture = getClass("film-pictures"),
        allImgs = filmPicture[0].getElementsByTagName("img"),
        allImgs1=filmPicture[1].getElementsByTagName("img");

    //获取数据
    Ajax({
        method: "get",
        url: "./data/library.json",
        dataType: "json",
        success: function (jsonData) {
           filmPicture[0].appendChild( bindData(jsonData["recommend"]));
           filmPicture[1].appendChild( bindData(jsonData["favourite"]));
        }
    });


    //数据拼接 返回值是拼接好的字符串
    function bindData(dataArray) {

        //className:不同的类名值   
        //text:不同文本 显示  标准  清晰 高
        var className = null,
            text = null;

        //创建一个临时的文档碎片
        var frg = document.createDocumentFragment();
        //做字符串拼接
        for (var i = 0; i < dataArray.length; i++) {
            var li = document.createElement("li");
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

            li.innerHTML = '<a href="#"><div class="film-type ' + className + '"></div><div class="film-quality-txt">' + text + '</div><img src="" trueSrc="' + curData.image + '"></a><div class="film-text"><h3><a href="">' + curData.title + '</a></h3><h4>' + curData.detail + '</h4> <div class="film-score"><span class="num">' + curData.grade + '</span> </div></div>';

            //直接把创建好的li添加到ul会引起DOM回流  性能够优化
            frg.appendChild(li);
        }

        //将文档碎片添加到
        //filmPicture.appendChild(frg);

        //将临时的文档碎片销毁  手动释放
        //frg=null;


        //实现懒加载
        //页面加载完毕 1秒后显示图片
        window.setTimeout(allLazyImgs, 1000);
        //滚动条滚动的时候复合条件显示对应的图片
        window.onscroll = allLazyImgs;
        return frg;
    }

    //实现所有图片的懒加载
    function allLazyImgs() {
        //获取首屏的高度
        var winH = win("clientHeight");
        var scrollT = win("scrollTop");


        for (var i = 0; i < allImgs.length; i++) {
            //获取每一张图片
            var curImg = allImgs[i];
            //图片展示的条件判断   首屏的高度 + 滚动条卷去的高度 > 图片底部到body的距离
            //默认图片隐藏没法法获取偏移的
            if ((winH + scrollT) > (offset(curImg.parentNode).top + curImg.parentNode.offsetHeight / 2)) {
                lazyImg(curImg);
            }
        }
        for(var i=0;i<allImgs1.length;i++){
            var curImg1=allImgs1[i];
            if((winH+scrollT)>(offset(curImg1.parentNode).top+curImg1.parentNode.offsetHeight/2)){
                lazyImg(curImg1);
            }
        }
    }
/*
    //实现单张图片的懒加载
    function lazyImg(curImg) {
        //临时图片
        var oImg = new Image;
        oImg.src = curImg.getAttribute("trueSrc");
        //onload资源加完毕
        oImg.onload = function () {
            //真实的图片地址赋值我们当前处理的图片
            curImg.src = this.src;
            curImg.style.display = "block";
            oImg = null;
        }
    }
*/
}();
~function(){
    var vipFilmClassify=getClass("vip-film-classify")[0],
        titles=vipFilmClassify.getElementsByTagName("li"),
        contents=getClass("film-pictures");
    for(var i=0;i<titles.length;i++){
        titles[i].index=i;
        titles[i].onclick=function(){
            tabChange(this.index);
        }
    }
    function tabChange(curIndex){
        for(var i=0;i<titles.length;i++){
            titles[i].className='';
            contents[i].style.display="none";
        }
        titles[curIndex].className="current";
        contents[curIndex].style.display="block";
    }
}();