~function(){
      var remember=getClass('remember')[0];
      var box=remember.getElementsByTagName("img")[0];
      //点击记住密码
      var flag=true;
      box.onclick=function(){
        if(flag){
            this.src="./img/login/box2.jpg";
            flag=false;
        }else{
            this.src="./img/login/box1.jpg";
            flag=true;
        }
      }

    //获取表单
    var form=document.getElementsByTagName('form')[0];
    var myUsername=form.username;
    var myPassword=form.password;
    var btn=getClass("btn")[0];
    //console.log(myUsername,myPassword);
    //console.log(document.cookie);
    //把cookie键值对放在一个对象里
    var arr=document.cookie.split('; ');
    var obj={};
    for(var i=0;i<arr.length;i++){
      obj[arr[i].split('=')[0]]=arr[i].split("=")[1];
    }
    /*  console.log(obj);
     console.log(obj["password"]); */

    btn.onclick=function(){
      if(myUsername.value===obj.phoneNumber&&myPassword.value===obj.password){
         alert("登录成功");
         btn.href = "./wait.html";
         myUsername.value="";
         myPassword.value="";
      }else{
        if(myUsername.value===""||myPassword.value===""){
          alert("用户名或密码不能为空");
        }else{
          alert("用户名或密码错误");
        }  
      }
    }
}();