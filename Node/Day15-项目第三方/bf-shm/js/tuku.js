~ function() {
    var vipFilms = utils.getClass('vip-films')[0];
    var filmPictures = utils.getClass('film-pictures', vipFilms)[0];
    var imgs = filmPictures.getElementsByTagName('img');
     //最近更新
    ajax({
        url: 'data2/update.json',
        dataType: 'JSON',
        success: function(jsonData) {
            goLoad(jsonData);
            saveLocalstorage(imgs);
        }
    })

    function goLoad(data) {
        var frg = document.createDocumentFragment();
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            var curData = data[i];
            var vipText = '';
            switch (curData.vip) {
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
            switch (curData.definition) {
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
            grade = curData.score.indexOf('.') > 0 ? curData.score : curData.score + '.0';
            li.innerHTML = `<a href="./play.html">
            <div class="film-type ${vipText}"></div>
            <div class="film-quality-txt">${text}</div>
            <img src="" trueSrc="${curData.img}" videoSrc="${curData.videoSrc}" kind="${curData.kind}" number="${curData.number}" actor="${curData.actor}" content="${curData.content}" title="${curData.title}">
        </a>
        <div class="film-text">
            <h3><a href="">${curData.title}</a></h3>
            <h4>${curData.detail}</h4>
            <div class="film-score">
                <span class="num">${grade}</span> 
            </div>
        </div>
            `
            frg.appendChild(li);
        }
        filmPictures.appendChild(frg); 
        frg = null;

        showImg();
    }
//传递cookie
//  function saveCookie(imgs){
//     for(var i = 0;i<imgs.length;i++){
//         imgs[i].onclick = function(){
//             document.cookie = "videoSrc="+this.getAttribute("videoSrc");
//         }
//     }
//  }
 //传递localstorage
 function  saveLocalstorage(imgs){
    for(var i = 0;i<imgs.length;i++){
        imgs[i].onclick = function(){
            var obj={videoSrc:this.getAttribute("videoSrc"),kind:this.getAttribute("kind"),number:this.getAttribute("number"),actor:this.getAttribute("actor"),content:this.getAttribute("content"),title:this.getAttribute("title")}
            localStorage.setItem("news",JSON.stringify(obj));
        }
 }
 }
    window.onscroll = function() {
        showImg()
    }

    function showImg() {
        for (var i = 0; i < imgs.length; i++) {
            var curImg = imgs[i];
            if (!curImg.isLoad) {
                var imgY = utils.offset(curImg.parentNode).top + curImg.parentNode.offsetHeight/2;
                var imgH = utils.win('clientHeight') + utils.win('scrollTop');
                if (imgY <= imgH) {
                    lazyFirstImg(curImg);
                }
            }
        }
    }

    function lazyFirstImg(curImg) {
        var oImg = new Image();

        oImg.src = curImg.getAttribute('trueSrc');
        oImg.onload = function() {
            curImg.src = oImg.src;
            oImg = null;
            curImg.style.display = "block"
            utils.fadeIn(curImg)
            curImg.isLoad = true;
        }

    }
}()


//登录成功后
~ function() {
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
}();

//最受欢迎图片绑定
(function() {
    var vipFilmClassify = utils.getClass('vip-film-classify')[0];
    var lis = vipFilmClassify.getElementsByTagName('li');
    var vipFilmss = utils.getClass('vip-filmss')[0];
    var vipFilms = utils.getClass('vip-films')[0];
    var filmPictures = utils.getClass('film-pictures', vipFilmss)[0]
    var imgs = vipFilmss.getElementsByTagName('img');
    lis[1].onclick = function() {
        vipFilms.style.display = 'none';
        vipFilmss.style.display = 'block';
        lis[1].className = 'current';
        lis[0].className = '';
        ajax({
            url: 'data2/favorite.json',
            dataType: 'JSON',
            success: function(jsonData) {
                getData(jsonData.favorite)
                lazyImg();
                saveCookie(imgs);
                saveLocalstorage(imgs);
            }
        })
    }
    lis[0].onclick = function() {
        vipFilmss.style.display = 'none';
        vipFilms.style.display = 'block';
        lis[0].className = 'current';
        lis[1].className = '';
    }

    $(window).on('scroll', function() {
        lazyImg()

    })

    // window.onscroll = function() {
    //     lazyImg()
    // }

    function lazyImg() {
        for (var i = 0; i < imgs.length; i++) {
            var curImg = imgs[i];
            var eleTop = curImg.parentNode.parentNode.offsetHeight/2 + utils.offset(curImg.parentNode.parentNode).top;
            var seeTop = utils.win('scrollTop') + utils.win('clientHeight');

            if (seeTop >= eleTop) {
                lazyGo(curImg);

            }

        }
    }

    function lazyGo(curImg) {
        var oImg = new Image();
        oImg.src = curImg.getAttribute('trueSrc');
        oImg.onload = function() {
            curImg.src = oImg.src;
            curImg.style.display = 'block';
            oImg = null;
            utils.fadeIn(curImg);
        }

    }
 //传递cookie
//  function saveCookie(imgs){
//     for(var i = 0;i<imgs.length;i++){
//         imgs[i].onclick = function(){
//             document.cookie = "videoSrc="+this.getAttribute("videoSrc");
//         }
//     }
//  }
  //传递localstorage
  function  saveLocalstorage(imgs){
    for(var i = 0;i<imgs.length;i++){
        imgs[i].onclick = function(){
            var obj={videoSrc:this.getAttribute("videoSrc"),kind:this.getAttribute("kind"),number:this.getAttribute("number"),actor:this.getAttribute("actor"),content:this.getAttribute("content"),title:this.getAttribute("title")}
            localStorage.setItem("news",JSON.stringify(obj));
        }
 }
 }
    function getData(data) {
        var frg = document.createDocumentFragment();
        for (var i = 0; i < data.length; i++) {
            var curData = data[i];
            var li = document.createElement('li');

            var vipText = '';
            switch (curData.vip) {
                case 'vip不免费':
                    vipText = 'for-vip-only';
                    break;
                case 'VIP免费':
                    vipText = 'for-vip-free';
                    break;
                case 3:
                    vipText = 'for-vip-zhekou';
                    break;
            }
            var text = '';
            switch (curData.definition) {
                case '标清':
                    text = '标清';
                    break;
                case '高清':
                    text = '高清';
                    break;
                case '超清':
                    text = '超清';
                    break;
            }
            var grade = '';
            grade = curData.score.indexOf('.') > 0 ? curData.score : curData.score + '.0';
            li.innerHTML = `<a href="./play.html">
            <div class="film-type ${vipText}"></div>
            <div class="film-quality-txt">${text}</div>
            <img src="" trueSrc="${curData.img}" videoSrc="${curData.video}" kind="${curData.kind}" number="${curData.number}" actor="${curData.actor}" content="${curData.content}" title="${curData.title}">
        </a>
        <div class="film-text">
            <h3><a href="">${curData.title}</a></h3>
            <h4>${curData.detail}</h4>
            <div class="film-score">
                <span class="num">${grade}</span> 
            </div>
        </div>
            `
            frg.appendChild(li);
        }
        filmPictures.appendChild(frg);
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