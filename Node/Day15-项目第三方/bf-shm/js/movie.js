//首页加载以及轮播图
~ function () {
    var banner = utils.getClass("vip-content")[0],
        bannerWrap = utils.getClass("banner-wrap", banner)[0],
        bannerWrapDivs = bannerWrap.getElementsByTagName('div'),
        bannerWrapImgs = bannerWrap.getElementsByTagName('img'),
        focusList = utils.getClass("focus-list", banner)[0],
        focusListUl = utils.getClass("focus-list-ul", focusList)[0],
        focusLis = focusListUl.getElementsByTagName('li');

    var btns = banner.getElementsByClassName('btn');
    var autoTimer = null,
        step = 0;

    ajax({
        url: "data2/movie.json",
        dataType: "JSON",
        success: function (jsonData) {
            setData(jsonData.banner);
            bannerGo();
        }
    })


    setTimeout(function () {
        for (var i = 0; i < bannerWrapImgs.length; i++) {
            lazyImg(bannerWrapImgs[i]);
            focusLis[i].style.display = 'block'
        }
        utils.fadeIn(bannerWrapDivs[0])
    }, 500)

    function bannerGo() {
        autoTimer = setInterval(autoMove, 3000);

        banner.onmouseover = function () {
            clearInterval(autoTimer);
        }

        banner.onmouseout = function () {
            autoTimer = setInterval(autoMove, 3000);
        }

        btns[1].onclick = autoMove;

        btns[0].onclick = function () {
            if (step == 0) step = bannerWrapDivs.length;
            step--;
            goMove();
        }
        for (var i = 0; i < focusLis.length; i++) {
            focusLis[i].index = i;
            focusLis[i].onmouseover = function () {
                step = this.index;
                goMove();
            }
        }

        function autoMove() {
            if (step == bannerWrapDivs.length - 1) {
                step = -1;
            };
            step++;
            goMove();
        }

        function goMove() {
            for (var i = 0; i < bannerWrapDivs.length; i++) {
                if (i === step) {
                    bannerWrapDivs[step].style.zIndex = 1;
                    utils.fadeIn(bannerWrapDivs[step]);
                    focusLis[step].className = "current";
                    continue;
                }
                bannerWrapDivs[i].style.zIndex = 0;
                bannerWrapDivs[i].style.opacity = 0;
                focusLis[i].className = '';
            }
        }
        //传递cookie
        // for(var i = 0;i<bannerWrapImgs.length;i++){
        //     bannerWrapImgs[i].onclick = function(){
        //         document.cookie = "videoSrc="+this.getAttribute("videoSrc");
        //     }
        // }
          //传递localstorage
   for(var i = 0;i<bannerWrapImgs.length;i++){
    bannerWrapImgs[i].onclick = function(){
        var obj={videoSrc:this.getAttribute("videoSrc"),kind:this.getAttribute("kind"),number:this.getAttribute("number"),actor:this.getAttribute("actor"),content:this.getAttribute("content"),title:this.getAttribute("title")}
        localStorage.setItem("news",JSON.stringify(obj));
              }
            }
    }

    function setData(jsonData) {
        var str = '';
        for (var i = 0; i < jsonData.length; i++) {
            var curData = jsonData[i];
            str += '<div><a href="play.html"><img src="" trueSrc="' + curData.img + '" videoSrc="' + curData.videoSrc + '" kind="'+curData.kind+'" number="'+curData.number+'" actor="'+curData.actor+'" content="'+curData.content+'" title="'+curData.title+'"/></a></div>';
                 }
        bannerWrap.innerHTML = str;
    }

    function lazyImg(img) {
        var oImg = new Image();
        oImg.src = img.getAttribute('trueSrc');
        oImg.onload = function () {
            img.src = oImg.src;
            img.style.display = "block";
            oImg = null;
        }
    }
}();

//影片列表渲染
~ function () {
    var recommend = utils.getClass('recommend')[0];
    var recommendImgs = recommend.getElementsByTagName('img');
    var recommendFilmPictures = utils.getClass("film-pictures", recommend)[0];

    ajax({
        url: "data2/movie.json",
        dataType: "JSON",
        success: function (jsonData) {
            recommendFilmPictures.innerHTML = getAuto(jsonData.hot);
            // saveCookie(recommendImgs);
            saveLocalstorage(recommendImgs);
        }
    })

    document.onmousewheel = function () {
        for (var i = 0; i < recommendImgs.length; i++) {
            var curImg = recommendImgs[i];
            lazyImg(curImg);
        }

    }

    function getAuto(curData) {
        var str = '';
        for (var i = 0; i < curData.length; i++) {
            var vipText = '';
            switch (curData[i].vip) {
                case 1:
                    vipText = 'for-vip-only';
                    break;
                case 2:
                    vipText = 'for-vip-free';
                    break;
                case 3:
                    vipText = 'for-vip-zhekou';
                    break;
            }
            var text = '';
            switch (curData[i].definition) {
                case 1:
                    text = '标清';
                    break;
                case 2:
                    text = '高清';
                    break;
                case 3:
                    text = '超清';
                    break;
            }
            var grade = '';
            grade = curData[i].score.indexOf('.') > 0 ? curData[i].score : curData[i].score + '.0';
            str += '<li>' +
                '<a href="./play.html">' +
                '<div class="film-type ' + vipText + '"></div>' +
                '<div class="film-quality-txt">' + text+ '</div>' +
                '<img src="" trueSrc="http:' + curData[i].img + '" videoSrc="'+curData[i].videoSrc+'" kind="'+curData[i].kind+'" number="'+curData[i].number+'" actor="'+curData[i].actor+'" content="'+curData[i].content+'" title="'+curData[i].title+'">' +
                '</a>' +
                '<div class="film-text">' +
                '<h3><a href="">' + curData[i].title + '</a></h3>' +
                '<h4>' + curData[i].detail + '</h4>' +
                '<div class="film-score">' +
                '<span class="num">' + grade + '</span>' +
                '</div>' +
                '</div>' +
                '</li>'
        }

        return str;

    }
 //传递cookie
//   function saveCookie(imgs){
//     for(var i = 0;i<imgs.length;i++){
//         imgs[i].onclick = function(){
//             document.cookie = "videoSrc="+this.getAttribute("videoSrc");
//         }
//     }
//   }
   //传递localstorage
 function  saveLocalstorage(imgs){ 
    for(var i = 0;i<imgs.length;i++){
        imgs[i].onclick = function(){
            var obj={videoSrc:this.getAttribute("videoSrc"),kind:this.getAttribute("kind"),number:this.getAttribute("number"),actor:this.getAttribute("actor"),content:this.getAttribute("content"),title:this.getAttribute("title")}
            localStorage.setItem("news",JSON.stringify(obj));
        }
 }
 }
    function lazyImg(curImg) {
        var oImg = new Image();

        var y = utils.offset(curImg.parentNode).top + curImg.parentNode.offsetHeight / 2;
        var srcTop = document.documentElement.scrollTop + document.documentElement.clientHeight;
        if (srcTop >= y) {
            oImg.src = curImg.getAttribute('trueSrc');
            oImg.onload = function () {
                curImg.src = oImg.src;
                curImg.style.display = 'block';
                utils.fadeIn(curImg);
            }
        }
    }
}();


//登录成功后
(function () {
    var headLayer = utils.getClass('head-layer')[0]
    var logins = utils.getClass('login', headLayer);
    var userInformation = utils.getClass('userInformation', headLayer)[0];

    var user = utils.getCookie('userName');
    var pass = utils.getClass('passWord');
    if (user && pass) {
        logins[0].style.display = 'none';
        logins[1].style.display = 'none';
        userInformation.style.display = 'block';
        userInformation.innerHTML = '<a>' + user + '欢迎你!' + '</a>';
    }
}());

//搜索栏
~ function () {
    var headerMiddle = utils.getClass('header-middle')[0];
    var input = headerMiddle.getElementsByTagName('input')[0];
    var headerMiddleBox = utils.getClass('header-middle-box', headerMiddle)[0];
    var lis = headerMiddleBox.getElementsByTagName('li')
    var val = input.value;
    input.onfocus = function () {
        if (input.value == val) {
            input.value = '';
        }
        headerMiddleBox.style.display = 'block';
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                input.value = this.innerHTML;
            }

        }
    }
    input.onblur = function () {
        headerMiddleBox.style.display = 'none';
    }

}();

