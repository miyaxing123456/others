(function () {
  var openVip = $(".right-main-right .p2 span");
  var pay = $(".pay");
  var cover = $(".cover");
  var close = $(".pay .head a");
  var openVip2 = $(".head-layer .open-vip");
  var loginTips = $(".login-tips");
  var user = utils.getCookie('userName');
  var pass = utils.getClass('passWord');

  //VIP续费出现 
  //导航栏上的开通VIP
  openVip2.click(function () {
    //判断有没有登录，未登录则先登录
    if (user && pass) {
      cover.css("display", "block");
      pay.css({ "display": "block", "top": "64px", "left": "308px", "z-index": "3" });
    } else {
      cover.css("display", "block");
      loginTips.css("display", "block");
    }
  });
  //页面中的开通VIP
  openVip.click(function () {
    //判断有没有登录，未登录则先登录
    if (user && pass) {
      cover.css("display", "block");
      pay.css({ "display": "block", "top": "64px", "left": "308px", "z-index": "3" });
    } else {
      cover.css("display", "block");
      loginTips.css("display", "block");
    }
  });
  //VIP续费关闭
  close.click(function () {
    cover.css("display", "none");
    pay.css("display", "none");
    //显示会员身份
    var vipUser = $(".right-main-right .p2");
    vipUser.html(`用户类型：VIP用户 <span><a href="javascript:;" class="span">立即开通自动续费</a></span>`);
  });
  //选择购买标准
  var chooses = $(".choose .ch");
  for (var i = 0; i < chooses.length; i++) {
    chooses[i].onclick = function () {
      this.className = "active ch";
      var brother = utils.siblingAll(this);
      for (var j = 0; j < brother.length; j++) {
        brother[j].className = "ch";
      }
    }
  }
  //优惠价格
  var year = $(".choose .choose-one");
  var month = $(".choose .choose-two");
  var day = $(".choose .choose-three");
  var total = $(".r-main .total");
  year.click(function () {
    total.html(`￥178.00<span>已优惠20.00元</span>`);
  });
  month.click(function () {
    total.html(`￥45.00<span>已优惠13.00元</span>`);
  });
  day.click(function () {
    total.html(`￥15.00<span>已优惠4.80元</span>`);
  });
})();

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

//更换头像
(function () {
  $('.ImageInput').on('change', function () {
    var file = this.files[0]; //获取File对象
    if (!/image\/\w+/.test(file.type)) {
      return false;
    }
    if (typeof FileReader != 'undefined') {
      //创建读取文件的对象
      var reader = new FileReader();
      //创建文件读取相关的变量
      var imgFile;
      //正式读取文件
      reader.readAsDataURL(file);
      //为文件读取成功设置事件
      var str = '';
      reader.onload = function (e) {
        imgFile = e.target.result;
        $('.img img').attr('src', imgFile);
        $('.pay img').attr('src', imgFile);
      };
    } else {
      var URL = window.URL || window.webkitURL;
      var imageURL = URL.createObjectURL(file);

      $('.img img').attr('src', imageURL);
      $('.pay img').attr('src', imgFile);
    }

  });
})();

//修改昵称
(function () {
  var str = '';
  $(".right-main-right .p1 span a").click(function () {
    $(".right-main-right .p1").css("display", "none");
    $(".right-main-right .p11").css("display", "block");
  });
  $(".right-main-right .p11 .save").click(function () {
    //获取用户输入的用户名
    str = $(".right-main-right .p11 input").val();
    //将用户名嵌入p1里面
    $(".right-main-right .p1 i").html(str);
    //将修改嵌入p1里面
    $(".right-main-right .p1 span a").html("修改");
    $(".right-main-right .p1").css("display", "block");
    $(".right-main-right .p11").css("display", "none");
  });
})();

//详细信息修改
(function () {
  var rightFoot = utils.getClass("right-foot")[0];
  var bodys = utils.getClass("body", rightFoot);
  var footers = utils.getClass("footer", rightFoot);

  //设置信息
  for (var i = 0; i < footers.length; i++) {
    footers[i].onclick = function () {
      this.style.display = "none";
      $(this).prev().html("<input type='text'>");
      $(this).next().css("display", "block");
      //修改信息
      $(this).next().click(function () {
        $(this).prev().prev().html($(this).prev().prev().find("input").val());
        $(this).css("display", "none").prev().find("a").html("修改");
        $(this).css("display", "none").prev().css("display", "block");
      });
    }
  }
})();

