//切换
~ function() {
    //选择切换
    var tag = true;
    var bannerRightLogin = utils.getClass('banner-right-login')[0];
    var signBtn = utils.getClass('sign-btn', bannerRightLogin)[0];
    var box3 = utils.getClass('box3', bannerRightLogin)[0];
    var flag = true;

    //选择切换
    box3.onclick = function() {
        if (tag) {
            this.style.backgroundPosition = '0px -66px';
            tag = !tag;
        } else {
            this.style.backgroundPosition = '-20px -66px'
            tag = !tag
        }
    }
}();

//表单验证
~ function() {
   
    var bannerRightLogin = utils.getClass('banner-right-login')[0];
    var btnLogin = utils.getClass('btn-login', bannerRightLogin)[0]
    var loginInps = bannerRightLogin.getElementsByTagName('input');
    var tips = utils.getClass('tips')[0];

    btnLogin.onclick = function() {
        var user = utils.getCookie('userName');
        var pass = utils.getCookie('passWord');
        if (user.length != 0 && pass.length != 0) {
            if (loginInps[0].value == user && loginInps[1].value == pass) {
                if (window.history.length == 1) {
                    window.open('administrator-management.html', "_self")
                } else {
                    window.history.go(-1);
                }
            } else {
                error4.style.display = 'block';
                setTimeout(function() {
                    error4.style.display = 'none';
                }, 2000)
            }
        } else {
            error4.style.display = 'block';
            setTimeout(function() {
                error4.style.display = 'none';
            }, 2000)
        }
    }
}();