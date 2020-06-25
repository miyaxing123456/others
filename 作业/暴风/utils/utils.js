 var flag = "getComputedStyle" in window; //判断是否属于IE6~8   标准浏览器下就是true


 //类数组转数组
 //likeAry:类数组集合
 function likeArray(likeAry) {
     if (flag) { //标准浏览器
         return Array.prototype.slice.call(likeAry);
     } else {
         var arr = [];
         for (var i = 0; i < likeAry.length; i++) {
             arr[arr.length] = likeAry[i];
         }
         return arr;
     }
 }

 //获取距离body顶部的距离
 function offset(eleObj) {
    // 存储总的偏移量  par:已经定位的父集元素
    var totalLeft = null,
        totalTop = null,
        par = eleObj.offsetParent;
    //先加上自身的偏移
    totalLeft += eleObj.offsetLeft;
    totalTop += eleObj.offsetTop;

    //累加
    while (par) {
        //累加上父集边框的高度
        totalLeft += par.clientLeft;
        totalTop += par.clientTop;

        //类加父集元素的偏移
        totalLeft += par.offsetLeft;
        totalTop += par.offsetTop;

        par = par.offsetParent;
    }

    return {
        left: totalLeft,
        top: totalTop
    };
}

 /*
     获取经过浏览器渲染的样式
         eleObj:元素对象
         attr:样式属性
 */
 function getStyle(eleObj, attr) {
     //eleObj.currentStyle成立时IE6~8    否则使我们的标准浏览器  谷歌 火狐  IE9+  
     return eleObj.currentStyle ? eleObj.currentStyle[attr] : getComputedStyle(eleObj)[attr];
 }


 /*
     getClass通过类名获取要操作的元素
         参数： 类名值
               限定范围
         返回值：数组      
 */
 //我们自己进行了封装又转为了数组 已经不是动态获取了
 function getClass(className, context) {
     // 限定范围不传递参数就是document传递了是谁就是谁
     context = context || document;
     if (flag) {
         return likeArray(context.getElementsByClassName(className));
     } else {
         for (var i = 0; i < collections.length; i++) {
             // 用来存储获取到元素的空数组
             var arr = [];
             // 获取当前这个范围下所有内容(标签)
             var collections = context.getElementsByTagName("*");
             if ([i].className === className) {
                 arr.push(collections[i]);
             }
         }
         return arr;
     }
 }



 /*
  匀速运动函数
          eleObj:元素对象
          attr:属性
          target:目标值
          inerval:时间
          step:步长  每次运动的距离

      */
 function move(eleObj, attr, step, target, inerval) {
     //防止用户多次点击，先清除定时器
     window.clearInterval(eleObj.timer);
     //给step赋值正数或负数  (初始值是否小于目标值小于就是正数大于就是负数)
     step = parseInt(getStyle(eleObj, attr)) < target ? step : -step;
     //设置定时器
     eleObj.timer = window.setInterval(function() {
         //设置speed  每次定时器执行赋值给当前这元素的值  在原来的基础上加10
         var speed = parseInt(getStyle(eleObj, attr)) + step;
         //目标值判断
         if ((step > 0 && speed >= target) || (step < 0 && speed <= target)) {
             speed = target;
             window.clearInterval(eleObj.timer);
         }
         //设置值
         eleObj.style[attr] = speed + 'px';
     }, inerval);
 }


 // 获取某个范围内容随机整数
 function getRandom(n, m) {
     if (n > m) { //如果n的值大于m就进行交换
         var temp;
         temp = n;
         n = m;
         m = temp;
     }
     return Math.round(Math.random() * (m - n) + n);
 }

 //格式化时间,可以传入字符串,否则默认输出汉字
 function formatTime(Str) {
     //对于小于10座补零操作
     function zeroValue(value) {
         return value < 10 ? "0" + value : value;
     }

     //创建时间对象
     var date = new Date();

     //获取   年   月   日  星期
     var year = date.getFullYear();
     //   计算是0-11   我们自己+1  
     var mounth = date.getMonth() + 1;
     var day = date.getDate();
     var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
     var week = weeks[date.getDay()];

     //时  分  秒  毫秒
     var hour = date.getHours();
     var minutes = date.getMinutes();
     var seconds = date.getSeconds();
     var millSeconds = date.getMilliseconds();
     if (Str === undefined) {
         return year + "年 " + zeroValue(mounth) + "月 " + zeroValue(day) + "日 " + week + " " + zeroValue(hour) + "时 " + zeroValue(minutes) + "分  " + zeroValue(seconds) + "秒";
     } else {
         return year + Str + zeroValue(mounth) + Str + zeroValue(day) + Str + week + " " + zeroValue(hour) + Str + zeroValue(minutes) + Str + zeroValue(seconds);
     }

 }
 //获取xxxx-xx-x式的时间
 function formatDate(dt) {
     if (!dt) {
         dt = new Date();
     }
     var year = dt.getFullYear();
     var month = dt.getMonth() + 1;
     var date = dt.getDate();
     if (month < 10) {
         month = "0" + month;
     }
     if (date < 10) {
         date = "0" + date;
     }
     return year + "-" + month + "-" + date;
 }


 //数组去重  利用对象键值对的方式进行数组去重
 function arrayDedup(arr) {
     var obj = {};
     for (var i = 0; i < arr.length; i++) {
         var curArr = arr[i];
         //每次在存储之前判断对象中有否已经有这项了 
         if (obj[curArr] === curArr) { //已经重复了
             // 将数组中当前这项删除
             arr.splice(i, 1);
             // 因为数组塌陷问题  我们需要再去检查一次当前删除的这一项这个索引
             i--;
             //跳出的循环，已经存过了就不再存了
             continue;
         }

         //让数组中的每一项及当做属性名又当做属性值
         obj[curArr] = curArr;
     }
     return arr;
 }


 //冒泡排序 升序
 function ascending(arr) {
     for (var i = 0; i < arr.length - 1; i++) {
         for (var j = 0; j < arr.length - 1 - i; j++) {
             if (arr[j] > arr[j + 1]) { //交换位置
                 var temp;
                 temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;
             }
         }
     }
     return arr;
 }

 //冒泡排序 降序
 function descending(arr) {
     for (var i = 0; i < arr.length - 1; i++) {
         for (var j = 0; j < arr.length - 1 - i; j++) {
             if (arr[j] > arr[j + 1]) { //交换位置
                 var temp;
                 temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;
             }
         }
     }
     return arr;
 }


 //可以获取所有直接子元素 并且是全兼容的  返回一个数组
 /*
     eleObj:限定范围  父集元素
     tagName:过滤  获取具体哪个 标签名
     tagName不传就是全部  传了就进行过滤
 */
 function myChildren(eleObj, tagName) {
     var nodes = eleObj.childNodes, //获取所有直接子节点
         arr = []; //空数组用来存放元素节点
     for (var i = 0; i < nodes.length; i++) {
         if (nodes[i].nodeType === 1) { //节点类型为1  元素节点
             if (typeof tagName === "undefined") { //如果tagName没传递就获取所有直接子元素
                 arr.push(nodes[i])
             } else { //传递了tagName要进行过滤
                 if (nodes[i].nodeName.toUpperCase() === tagName.toUpperCase()) {
                     arr.push(nodes[i]);
                 }
             }
         }
     }
     return arr;
 }


 //绑定事件
 function addEvent(eleObj, type, fn) {
     if (eleObj.addEventListener) { //在标准浏览器下有这个属性对一个的是一个函数
         eleObj.addEventListener(type, fn);
     } else { //IE6~8
         eleObj.attachEvent("on" + type, fn);
     }
 }

 //移除事件
 function removeEvent(eleObj, type, fn) {
     if (eleObj.removeEventListener) { //在标准浏览器下有这个属性对一个的是一个函数
         eleObj.removeEventListener(type, fn);
     } else { //IE6~8
         eleObj.detachEvent("on" + type, fn);
     }
 }
 //可以遍历对象和数组的forEach函数
 function forEach(obj, fn) {
     var key;
     if (obj instanceof Array) {
         obj.forEach(function(item, index) {
             fn(index, item)
         })
     } else {
         for (key in obj) {
             fn(key, obj[key])
         }
     }
 }

 //绑定事件代理函数
 function bindEvent(elem, type, selector, fn) {
     if (fn == null) {
         fn = selector
         selector = null
     }
     elem.addEventListener(type, function(e) {
         var target
         if (selector) {
             target = e.target
             if (target.matches(selector)) {
                 fn.call(target, e)
             }
         } else {
             fn(e)
         }
     })
 }

 /*
 //一个原型链的例子
 function Elem(id){
 	this.elem=document.getElementById(id)
 }
 Elem.prototype.html=function(val){
 	var elem=this.elem
 	if(val){
 		elem.innerHTML=val
 		return this
 	}else{
 		return elem.innerHTML
 	}
 }
 Elem.prototype.on=function(type,fn){
 	var elem=this.elem
 	elem.addEventListener(type,fn)
 	return this
 }
 */

 //可以用以下方法检测属性是在实例中还是在原型中
 function hasPrototypeProperty(object, name) {
     return !object.hasOwnPrototype(name) && (name in object);
 }
 //由于in操作符只要通过对象能够访问到属性就返回true，hasOwnProyotype()只在属性存在于实例中时才返回true，
 //因此只要in操作符返回true而hasOwnPrototype()返回false，就可以确定属性是原型中的属性

 /*
 //一个Ajax的例子
 var xhr=new XMLHttpRequest()
 xhr.open("GET","/api",false)
 xhr.onreadystatechange=function(){
 	if(xhr.readyState==4){
 		if(xhr.status==200){
 			alert(xhr.responseText)
 		}
 	}
 }
 xhr.send(null)
 */

 //实现懒加载的核心代码
 function lazyImg(img) {
     //首先我们自己去创建一张临时图片
     // var img = document.createElement("img");
     var oImg = new Image();
     //获取真实图片地址赋值给临给时图片
     oImg.src = img.getAttribute("trueSrc");
     //判断图片的资源是否正确可以加载
     oImg.onload = function() { //保证图片资源一定能够加载成功如果进到这个方法中
         //让页面图片显示   
         //将加载成功的图片资源地址赋值给我们页面这张图片
         // this：触发的那个元素  
         img.src = this.src;
         img.style.display = "block";
         //将临时图片释放
         oImg = null;
     }
 }

 //win方法    操作浏览器的盒子模型
 /*
     attr：属性  （三个系列的13属性）
     value：设置对应的值 （scrollLeft/scrollTop）其它的都是获取

     给值就是设置不给值就是获取
 */
 function win(attr, value) {
     if (typeof value === "undefined") { //获取
         return document.documentElement[attr] || document.body[attr];
     } else { //设置
         document.documentElement[attr] = document.body[attr] = value;
     }
 }

 //滚轮滚动方向返回值的兼容处理
 function wheelEvent(ev) {
     if (ev.wheelDelta) { //存在就是IE或谷歌
         return ev.wheelDelta;
     } else { //火狐
         return ev.detail * -40; // -3 * -40 == 120  （前）   3 * -40 == -120
     }
 }

 /*
     获取上一个兄弟元素节点
         curEle:当前元素
 		return 元素对象    
 */
 function prev(curEle) {
     //获取上一个节点
     var pre = curEle.previousSibling;
     // 上一个节点存在  且  节点两类型不等于1
     while (pre && pre.nodeType !== 1) {
         pre = pre.previousSibling;
     }
     return pre;
 }

 /*
     获取所有的上一个兄弟元素节点
         curEle:当前元素
 		return 元素对象    
 */
 function prevAll(curEle) {
     var arr = [],
         pre = prev(curEle);
     while (pre) {
         // 在数组开头进行添加
         arr.unshift(pre);
         pre = prev(pre);
     }
     return arr;
 }

 /*
     获取下面的兄弟元素节点
         curEle:当前元素
 		return 元素对象    
 */
 function next(curEle) {
     //获取上一个节点
     var nex = curEle.nextSibling;
     // 上一个节点存在  且  节点两类型不等于1
     while (nex && nex.nodeType !== 1) {
         nex = nex.nextSibling;
     }
     return nex;
 }

 /*
     获取所有的下面的兄弟元素节点
         curEle:当前元素
 		return 元素对象    
 */
 function nextAll(curEle) {
     var arr = [],
         nex = next(curEle);
     while (nex) {
         // 在数组末尾进行添加
         arr.push(nex);
         nex = next(nex);
     }
     return arr;
 }

 /*
     获取所有的相邻元素节点
     参数：curEle
     return arr;
 */

 function siblings(curEle) {
     // 数组的拼接
     return prevAll(curEle).concat(nextAll(curEle));
 }

 /*
 	缓冲运动的方法
     eleObj:元素对象
     attr:属性
     target:目标值
 */
 function bufferMove(eleObj, attr, target) {
     //清除定时器防止定时器叠加
     window.clearInterval(eleObj.timer);
     // 设置定时器
     eleObj.timer = window.setInterval(function() {
         //获取元素对象的当前值
         var cur = parseFloat(getStyle(eleObj, attr));
         // 每次定时器执行 走的步长
         var speed = (target - cur) / 10;
         //处理精度问题（小数问题）
         speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
         //清除定时器  当前值等于目标值
         if (cur == target) window.clearInterval(eleObj.timer);
         //设置值
         eleObj.style[attr] = (cur + speed) + 'px';
     }, 30);
 }


 /*
    eleObj：元素对象
    styleObj：样式对象  {left:1000,opacity:1}  属性直接写  值就是目标值  数值
 */

 // 实现多属性运动但是某一个属性到达目标值定时器就清除了  就停止了导致其它属性还没有到达目标值
 function bufferMove(eleObj, styleObj) {
     //清除定时器防止定时器叠加
     window.clearInterval(eleObj.timer);
     // 设置定时器
     eleObj.timer = window.setInterval(function() {
         //每次执行我们定时器的方法我们都重新顶一个标识flag  默认值是true(都到达目标值了)
         var flag = true;
         //循环遍历拿到对应的属性和目标值
         for (var attr in styleObj) {
             //获取元素对象的当前值
             var cur = attr === "opacity" ? parseFloat(getStyle(eleObj, attr) * 100) : parseFloat(getStyle(eleObj, attr));
             // 每次定时器执行 走的步长
             var speed = (styleObj[attr] - cur) / 10;
             //处理精度问题（小数问题）
             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
             //只要由一个属性没有到达目标值就将flag赋值为false
             if (cur !== styleObj[attr]) {
                 flag = false;
             }
             //设置值
             if (attr === "opacity") {
                 // 在获取的时候扩大了100倍设置的时候缩小100倍
                 eleObj.style[attr] = (cur + speed) / 100;
                 // 兼容设置
                 eleObj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
             } else {
                 eleObj.style[attr] = (cur + speed) + 'px';
             }
         }
         //经过以上forin循环如果没有将flag赋值为false  依然是true就证明都已经到达目标值了
         if (flag) {
             //清除定时器
             window.clearInterval(eleObj.timer);
         }
     }, 30);
 }

 //一个error例子
 function myFunction() {
     var message, x;
     message = document.getElementById("p01");
     message.innerHTML = "";
     x = document.getElementById("demo").value;
     try {
         if (x == "") throw "值是空的";
         if (isNaN(x)) throw "值不是一个数字";
         x = Number(x);
         if (x > 10) throw "太大";
         if (x < 5) throw "太小";
     } catch (err) {
         message.innerHTML = "错误: " + err + ".";
     } finally {
         document.getElementById("demo").value = "";
     }
 }

 //DOM树完成后执行函数
 function myReady(fn) {

     //对于现代浏览器，对DOMContentLoaded事件的处理采用标准的事件绑定方式
     if (document.addEventListener) {
         document.addEventListener("DOMContentLoaded", fn, false);
     } else {
         IEContentLoaded(fn);
     }

     //IE模拟DOMContentLoaded
     function IEContentLoaded(fn) {
         var d = window.document;
         var done = false;

         //只执行一次用户的回调函数init()
         var init = function() {
             if (!done) {
                 done = true;
                 fn();
             }
         };

         (function() {
             try {
                 // DOM树未创建完之前调用doScroll会抛出错误
                 d.documentElement.doScroll('left');
             } catch (e) {
                 //延迟再试一次~
                 setTimeout(arguments.callee, 50);
                 return;
             }
             // 没有错误就表示DOM树创建完毕，然后立马执行用户回调
             init();
         })();

         //监听document的加载状态
         d.onreadystatechange = function() {
             // 如果用户是在domReady之后绑定的函数，就立马执行
             if (d.readyState == 'complete') {
                 d.onreadystatechange = null;
                 init();
             }
         }
     }
 }

 //判断文档是不是XMl
 function isXML(doc) {
     return doc.createElement("p").nodeNmae !== doc.createElement("P").nodeName;
 }

 //创建一个DOM树
 function domTree() {
     var s = "";

     function travel(space, node) {
         if (node.tagName) {
             s += space + node.tagName + "<br/>";
         }
         var l = node.childNodes.length;
         for (var i = 0; i < l; i++) {
             travel(space + "|-", node.childNodes[i]);
         }
     }
     travel("", document);
     return s;
 }

 //遍历两个对象是否相等
 function equalObj(a, b) {
     for (var p in a) {
         if (a[p] !== b[p]) {
             return false;
         }
     }
     return true;
 }

 //复制对象
 function copyObj(obj) {
     var newObj = {};
     for (var p in obj) {
         newObj[p] = obj[p];
     }
     return newObj;
 }

 //封装通用的xhr,兼容各个版本
 function createXHR() {
     //判断浏览器是否将XMLHttpRequest作为本地对象实现，针对IE7，Firefox，Opera等浏览器
     if (typeof XMLHttpRequest != "undefined") {
         return new XMLHttpRequest();
     } else if (typeof ActiveXObject != "undefined") {
         //将所有可能出现的ActiveXObject版本放在一个数组中
         var xhrArr = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
         //遍历创建XMLHttpRequest对象
         var len = xhrArr.length;
         for (var i = 0; i < len; i++) {
             try {
                 //创建XMLHttpRequest对象
                 xhr = new ActiveXObject(xhrArr[i]);
                 //如果创建XMLHttpRequest对象成功，则跳出循环
                 break;
             } catch (ex) {}
         }
     } else {
         throw new Error("No XHR object available.");
     }
 }


 //设置cookie
 function setCookie(key, value, day) {
     var date = new Date();
     day = day || 7; //day不传默认7天后过期
     date.setDate(date.getDate() + day);
     document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
 }


 //获取cookie
 function getCooke() {
     var cookieStr = document.cookie;
     if (cookieStr) {
         var obj = {};
         var cookieArr = cookieStr.split("; ");
         for (var i = 0; i < cookieArr.length; i++) {
             obj[cookieArr[i].split("=")[0]] = cookieArr[i].split("=")[1];
         }
         return obj;
     } else { //获取到的cookie空字符串
         return "";
     }
 }


 //删除cookie
 function removeCookie(key) {
     setCookie(key, "", -1)
 }