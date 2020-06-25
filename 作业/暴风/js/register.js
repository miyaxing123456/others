~function () {
    var remember = getClass('remember')[0];
    var box = remember.getElementsByTagName("img")[0];
    //点击同意协议
    var flags = [false, false, false, false];
    box.onclick = function () {
        // console.log("哈哈哈");
        if (flags[0] === false) {
            this.src = "./img/login/box2.jpg";
            flags[0] = true;
            myPs[5].style.display="none";
        } else {
            this.src = "./img/login/box1.jpg";
            flags[0] = false;
            myPs[5].style.display="block";
        }
    }
    //获取表单,验证手机号
    var form = document.getElementsByTagName('form')[0];
    var phoneNumber = form.phoneNumber;
    var reg0 = /^(1[358][0-9]{9})$/;
    var passwords = form.password;
    var myPs = form.getElementsByTagName('p');
    //console.log(myPs[0],myPs[1],myPs[2],myPs);
    //console.log(passwords[0]);
    phoneNumber.onfocus = function () {
        myPs[0].innerHTML = "";
    }
    phoneNumber.onblur = function () {
        if (reg0.test(phoneNumber.value) === true) {
            flags[1] = true;
        } else {
            myPs[0].innerHTML = "手机号码输入不合法";
            flags[1] = false;
        }
    }
    //校验密码：只能输入6-20个字符
    // var reg1=/^(w){6,20}$/; 
    passwords[0].onfocus = function () {
        myPs[1].innerHTML = "";
    }
    passwords[0].onblur = function () {
        if (passwords[0].value.length >= 6 && passwords[0].value.length <= 20) {
            flags[2] = true;
        } else {
            myPs[1].innerHTML = "只能输入6-20个字符";
            flags[2] = false;
        }
    }
    //点击注册
    var btn = getClass('btn')[0];

    btn.onclick = function () {
        //遍历数组flags
        for (var i = 0; i < flags.length; i++) {
            if (flags[i] === false) {
                alert('注册失败，请输入正确的信息');
                if(flags[0]===false){
                   myPs[5].style.display="block";
                }
                return;
            } else if (i === flags.length - 1) {
                alert('注册成功');
                btn.href = "./login.html";
                //把用户名和密码存到cookie里
                document.cookie="phoneNumber="+phoneNumber.value;
                document.cookie="password="+passwords[0].value;
                phoneNumber.value = "";
                passwords[0].value = '';
                passwords[1].value = '';
                passwords[2].value = '';
            }
        }
    }
    //获取随机验证码
    var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var refresh = form.refresh;
    var yanZhengma = getClass('yanzhengma')[0];
    var myNumber = getClass('number', yanZhengma)[0];

    //获取验证码的方法
    function getcodeStr() {
        var str = '';
        // 验证码有几位就循环几次
        for (var i = 0; i < 4; i++) {
            var random = getRandom(0, codeStr.length - 1);
            str += codeStr[random];
        }
        myNumber.innerHTML = str;
    }
    getcodeStr();//调用函数，页面刷新也会刷新验证码
    refresh.onclick = function () {
        getcodeStr();
    }
    passwords[1].onfocus=function(){
        myPs[2].innerText="";
    }
    passwords[1].onblur=function(){
        if(passwords[1].value.toLowerCase()===myNumber.innerHTML.toLowerCase()){
            flags[3]=true;
           // console.log(flags);
        }else{
            flags[3]=false;
            myPs[2].innerText="验证码不正确";
        }
    }

}();

