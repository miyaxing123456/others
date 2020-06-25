//退出登录
overLogin();
function overLogin(){
    var headLayer = utils.getClass('head-layer')[0];
    var userInformation = utils.getClass('userInformation', headLayer)[0];
    var myUl=document.getElementById("myUl");
    userInformation.oncontextmenu=function(ev){
        ev.preventDefault ?ev.preventDefault():ev.returnValue = false;
        myUl.style.display="block";
    }
   document.onclick=function(){
    myUl.style.display="none";
   }
}
//退出当前账号
var overCurrentLogin=document.getElementsByClassName("over-current-login")[0];
overCurrentLogin.onclick=function(){
    var headLayer = utils.getClass('head-layer')[0]
    var logins = utils.getClass('login', headLayer);
    var userInformation = utils.getClass('userInformation', headLayer)[0];

    userInformation.style.display="none";
    logins[0].style.display = 'block';
    logins[1].style.display = 'block';
}
