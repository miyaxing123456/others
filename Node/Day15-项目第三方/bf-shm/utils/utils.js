var utils = (function() {
    var flag = "getComputedStyle" in window;

    //类数组转为数组
    //likeData:类数组
    function likeArray(likeData) {
        if (flag) {
            return Array.prototype.slice.call(likeData, 0);
        } else {
            var arr = [];
            for (var i = 0; i < likeData.length; i++) {
                arr[i] = likeData[i];
            }
            return arr;
        }
    }

    //获取元素样式
    function getStyle(ele, attr) {
        return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele)[attr];
    }

    //物体移动
    function move(ele, attr, step, target, time) {
        clearInterval(ele.timer)
        step = parseInt(getStyle(ele, attr)) < target ? step : -step;
        ele.timer = setInterval(function() {
            var speed = parseInt(getStyle(ele, attr)) + step;
            if ((speed >= target && step > 0) || (speed <= target && step < 0)) {
                clearInterval(ele.timer)
                speed = target
            }
            ele.style[attr] = speed + 'px';
        }, time)
    }

    //小于10即前面加个0
    function zero(v) {
        return v < 10 ? '0' + v : v;
    }

    //数组去重
    function arrNoRepeat(array) {
        var arr = [];
        for (var i = 0; i < array.length; i++) {
            arr[i] = array[i]
        }
        var obj = {};
        for (var j = 0; j < arr.length; j++) {
            var x = arr[j];
            if (obj[x] === x) {
                arr[j] = arr[arr.length - 1];
                arr.length--;
                j--;
                continue;
            }
            obj[x] = x;
        }
        return arr;

    }

    //数组冒泡排序
    function bubbleSort(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
            }
        }
        return arr;
    }

    //获取n到m之间的随机数
    function getRandom(n, m) {
        if (isNaN(Number(n)) || isNaN(Number(m))) {
            throw new Error('数据传入错误');
        }
        if (n > m) {
            var x = n;
            n = m;
            m = x;
        }
        return Math.round(Math.random() * (m - n) + n);
    }

    //获取objEle下的所有tagName元素
    function getChildren(objEle, tagName) {
        var nodes = objEle.childNodes;
        var arr = [];
        for (var i = 0; i < nodes.length; i++) {
            var curNode = nodes[i];
            if (typeof tagName !== undefined) {
                if (curNode.nodeName.toUpperCase() == tagName.toUpperCase()) {
                    arr.push(curNode);
                }
            }
        }
        return arr;
    }

    //获取上一个兄弟
    function prev(objEle) {
        var pre = objEle.previousSibling;
        while (pre && pre.nodeType !== 1) {
            pre = pre.previousSibling;
        }
        return pre;
    }

    //获取下一个兄弟
    function next(objEle) {
        var nex = objEle.nextSibling;
        while (nex && nex.nodeType !== 1) {
            nex = nex.nextSibling;
        }
        return nex;
    }

    //获取上所有兄弟
    function prevAll(objEle) {
        var pre = prev(objEle);
        var arr = [];
        while (pre) {
            arr.unshift(pre);
            pre = prev(pre);
        }
        return arr;
    }

    //获取下所有兄弟
    function nextAll(objEle) {
        var nex = next(objEle);
        var arr = [];
        while (nex) {
            arr.push(nex);
            nex = next(nex);
        }
        return arr;
    }

    //获取所有兄弟
    function siblingAll(objEle) {
        return prevAll(objEle).concat(nextAll(objEle))
    }

    //获取浏览器的屏幕盒子模型
    function win(attr, value) {
        if (typeof value === 'undefined') {
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = document.body[attr] = value;
    }

    //图片延迟加载
    function lazyImg(ele, eleAttr) {
        if (ele.isLoad) return;
        var oImg = new Image();
        oImg.src = ele.getAttribute(eleAttr);
        oImg.onload = function() {
            ele.src = this.src;
            ele.style.display = 'block';
            oImg = null;
            ele.isLoad = true;
        }
    }


    //淡入
    function fadeIn(ele) {
        var duration = 500,
            target = 1,
            interval = 50;
        var step = (target / duration) * interval;
        var timer = window.setInterval(function() {
            var opacity = parseFloat(getStyle(ele, 'opacity'));
            opacity += step;
            if (opacity >= 1) {
                opacity = 1;
                window.clearInterval(timer);
            }
            ele.style.opacity = opacity;

        }, interval)
    }

    //事件兼容绑定
    function eventBind(ele, type, fun, bool) {
        if (ele.addEventListener) {
            ele.addEventListener(type, fun, bool)
        } else {
            ele.attachEvent('on' + type, fun)
        }
    }

    //事件兼容绑定
    function uneventBind(ele, type, fun, bool) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, fun, bool)
        } else {
            ele.detachEvent('on' + type, fun)
        }
    }

    //做滚动事件方向兼容
    function wheelEvent(event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return event.detail * -40
        }
    }

    //获取元素到body的距离
    function offset(ele) {
        var par = ele.offsetParent,
            totalTop = null,
            totalLeft = null;


        totalTop = ele.offsetTop;
        totalLeft = ele.offsetLeft;
        while (par) {
            if (window.navigator.userAgent.indexOf("MSIE 8.0") == -1) {
                totalLeft += par.clientLeft;
                totalTop += par.clientTop;
            }
            totalTop += par.offsetTop;
            totalLeft += par.offsetLeft;
            par = par.offsetParent;
        }
        return { left: totalLeft, top: totalTop };
    }

    //多属性运动函数
    function eleMove(ele, styleAttr, interval, callBack) {
        clearInterval(ele.timer)
        ele.timer = setInterval(function() {
            var tag = true;
            for (var attr in styleAttr) {
                var cur = attr === 'opacity' ? utils.getStyle(ele, attr) * 100 : parseFloat(utils.getStyle(ele, attr));
                var speed = (styleAttr[attr] - cur) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur !== styleAttr[attr]) {
                    tag = false;
                }
                if (attr === 'opacity') {
                    ele.style[attr] = (cur + speed) / 100;
                } else {
                    ele.style[attr] = cur + speed + 'px';
                }
            }
            if (tag) {
                clearInterval(ele.timer)
                if (typeof callBack !== 'undefined' && typeof callBack == "function") {
                    callBack();
                }
            }
        }, interval)
    }


    //设置cookie
    function setCookie(key, value, day) {
        day = day ? day : 7;
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
    }

    //获取cookie
    function getCookie(key) {
        var cookie = document.cookie;
        if (cookie) {
            var obj = {};
            var resArr = cookie.split('; ');
            for (var i = 0; i < resArr.length; i++) {
                obj[resArr[i].split('=')[0]] = resArr[i].split('=')[1];
            }
            return obj[key];
        }
        return '';
    }

    //移除cookie
    function removeCookie(key) {
        setCookie(key, "", -1);
    }

    //身份证前17位回去最后一位
    function getLastNum(str) {
        var arr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        var arr1 = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var x = 0;
        for (var i = 0; i < arr.length; i++) {
            x += arr[i] * parseInt(str[i])
        }
        return str + arr1[x % 11];
    }

    //获取类名
    function getClass(className, context) {
        context = context || document;
        //
        var arr = [];
        if (flag) {
            var likeArrays = context.getElementsByClassName(className);
            return likeArray(likeArrays);
        } else {
            // 获取所有的HTML元素

            var curEles = document.getElementsByTagName("*");
            for (var i = 0; i < curEles.length; i++) {
                if (curEles[i].className === className) {
                    arr[arr.length] = curEles[i];
                }
            }
            return arr;
        }
    }

    return {
        getStyle: getStyle,
        move: move,
        zero: zero,
        arrNoRepeat: arrNoRepeat,
        bubbleSort: bubbleSort,
        getRandom: getRandom,
        getChildren: getChildren,
        prev: prev,
        next: next,
        prevAll: prevAll,
        nextAll: nextAll,
        siblingAll: siblingAll,
        win: win,
        lazyImg: lazyImg,
        fadeIn: fadeIn,
        eventBind: eventBind,
        uneventBind: uneventBind,
        wheelEvent: wheelEvent,
        offset: offset,
        eleMove: eleMove,
        setCookie: setCookie,
        getCookie: getCookie,
        removeCookie: removeCookie,
        getLastNum: getLastNum,
        getClass: getClass,
        likeArray: likeArray
    }
})()