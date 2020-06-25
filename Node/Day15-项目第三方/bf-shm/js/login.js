//切换
~ function () {
    var bannerRightSign = utils.getClass('banner-right-sign')[0]
    var loginBtn = utils.getClass('login-btn', bannerRightSign)[0];
    var box5 = utils.getClass('box5', bannerRightSign)[0];
    var verification = utils.getClass('verification', bannerRightSign)[0];
    var reset = utils.getClass('reset', bannerRightSign)[0];

    //选择切换
    var tag = true;
    box5.onclick = function () {
        if (tag) {
            this.style.backgroundPosition = '0px -66px';
            tag = !tag;
        } else {
            this.style.backgroundPosition = '-20px -66px'
            tag = !tag
        }
    }


    var bannerRightLogin = utils.getClass('banner-right-login')[0];
    var signBtn = utils.getClass('sign-btn', bannerRightLogin)[0];
    var box3 = utils.getClass('box3', bannerRightLogin)[0];
    var flag = true;

    //选择切换
    box3.onclick = function () {
        if (tag) {
            this.style.backgroundPosition = '0px -66px';
            tag = !tag;
        } else {
            this.style.backgroundPosition = '-20px -66px'
            tag = !tag
        }
    }

    //登录注册页面切换
    loginBtn.onclick = function () {
        bannerRightSign.style.display = 'none';
        bannerRightLogin.style.display = 'block';
    }
    signBtn.onclick = function () {
        bannerRightLogin.style.display = 'none';
        bannerRightSign.style.display = 'block';
    }

    var strRandom = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    verification.innerHTML = getRandomStr(strRandom);
    reset.onclick = function () {
        verification.innerHTML = getRandomStr(strRandom);
    }

    function getRandomStr(str) {
        var str1 = str[Math.round(Math.random() * 61)]
        var str2 = str[Math.round(Math.random() * 61)]
        var str3 = str[Math.round(Math.random() * 61)]
        var str4 = str[Math.round(Math.random() * 61)]
        return str1 + str2 + str3 + str4
    }

}();

//表单验证
~ function () {
    var bannerRightSign = utils.getClass('banner-right-sign')[0];
    var inps = bannerRightSign.getElementsByTagName('input');
    var boxs = utils.getClass('box', bannerRightSign);
    var btnSign = utils.getClass('btn-sign', bannerRightSign)[0];
    var error1 = utils.getClass('error1')[0];
    var error2 = utils.getClass('error2')[0];
    var error4 = utils.getClass('error4')[0];
    var verification = utils.getClass('verification', bannerRightSign)[0];

    var bannerRightLogin = utils.getClass('banner-right-login')[0];
    var btnLogin = utils.getClass('btn-login', bannerRightLogin)[0]
    var loginInps = bannerRightLogin.getElementsByTagName('input');
    var tips = utils.getClass('tips')[0];
    inps[0].onchange = function () {
        var val = this.value;
        var res = /^1[3456789]\d{9}$/;
        if (res.test(val)) {
            error1.style.display = 'none';
        } else {
            error1.style.display = 'block';
        }
    }

    inps[1].oninput = function () {
        var val = this.value;
        var res1 = /^(\d+|[a-zA-Z]+)$/;
        var res2 = /\d/;
        var res3 = /[a-zA-Z]/;
        var res4 = /\W/;
        if (val.length < 6) {
            boxs[6].style.backgroundPosition = '-40px -70px';
        }
        if (val.length >= 6 && res1.test(val)) {
            boxs[6].style.backgroundPosition = '-70px -70px';
        }
        if (val.length >= 6 && res2.test(val) && res3.test(val)) {
            boxs[6].style.backgroundPosition = '-100px -70px';
        }
        if (val.length >= 6 && res4.test(val)) {
            boxs[6].style.backgroundPosition = '-130px -70px';
        }
    }

    //获取验证码
    var free = utils.getClass('free', bannerRightSign)[0];
    free.onclick = function () {
        if (free.innerHTML == '点击获取验证码') {
            var n = 60;
            var timer = null;
            timer = setInterval(function () {
                n--;
                if (n == 0) {
                    n = 0;
                    clearInterval(timer);
                    free.innerHTML = '点击获取验证码';
                    return;
                }
                free.innerHTML = n + '秒';
            }, 1000)
        }
    }

    //注册

    btnSign.onclick = function () {
        // if (error1.style.display == 'none' && boxs[6].style.backgroundPosition != '-40px -70px' && inps[2].value.toUpperCase() == verification.innerHTML.toUpperCase()) {
        if (true) {
            // utils.setCookie('userName', inps[0].value);
            // utils.setCookie('passWord', inps[1].value);
            var obj={
                code:1,
                message:"123"
            }
            $.ajax({
                url: `http://localhost:3000/users/register?tel=${inps[0].value}&pwd=${inps[1].value}&token=${JSON.stringify(obj)}`,
                type: "get",
                datatype: "json"
            })
                .then((data) => {
                    console.log("注册成功");
                    
                }).catch((err) => {
                    console.log("注册失败")
                })
            bannerRightLogin.style.display = 'block';
            bannerRightSign.style.display = 'none';
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 2000)
        } else {
            error2.style.display = 'block';
            setTimeout(function () {
                error2.style.display = 'none';
            }, 2000)
        }


    }


    btnLogin.onclick = function () {
        //var user = utils.getCookie('userName');
        //var pass = utils.getCookie('passWord');
        //if (user.length != 0 && pass.length != 0) {
            //if (loginInps[0].value == user && loginInps[1].value == pass) {
            $.ajax({
                url: "http://localhost:3000/users/login",
                type: "post",
                datatype: "json",
                data: {
                    tel: loginInps[0].value,
                    pwd: loginInps[1].value
                }
            })
                .then((data) => {
                    if (data.code == 0) {
                        //success
                        utils.setCookie('token', data.token);
                        if (window.history.length == 1) {
                            window.open('index.html', "_self")
                        } else {
                            window.history.go(-1);
                        }
                    } else {
                        error4.style.display = 'block';
                        setTimeout(function () {
                            error4.style.display = 'none';
                        }, 2000)
                    }
                }).catch(() => {
                    error4.style.display = 'block';
                    setTimeout(function () {
                        error4.style.display = 'none';
                    }, 2000)
                })
        // } else {
        //     error4.style.display = 'block';
        //     setTimeout(function () {
        //         error4.style.display = 'none';
        //     }, 2000)
        // }
    }
}();