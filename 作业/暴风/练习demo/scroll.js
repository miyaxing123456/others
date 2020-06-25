//获取要操作的元素
var scroll = document.getElementById("scroll"),
    scrollContent = utils.getClass("scroll-content", scroll)[0],
    scrollBox = utils.getClass("scroll-box", scroll)[0];
var aSpan = scrollBox.getElementsByTagName("span")[0];


//存储当前自定义滚动条（span）的top值
var spanTop = null;

//滚动条拖拽
//鼠标按下
aSpan.onmousedown = function (ev) {
    //事件对象的兼容处理
    ev = ev || window.event;
    //获取鼠标按下这一刻距离当前这个拖拽元素Y值
    var y = ev.clientY - this.offsetTop;
    //鼠标移动
    document.onmousemove = function (ev) {
        ev = ev || window.event;
        //确定span的top值
        spanTop = ev.clientY - y;

        //边界判断
        var minTop = 0,
            maxTop = scrollBox.offsetHeight - aSpan.offsetHeight;
        if (spanTop <= minTop) {
            spanTop = minTop
        } else if (spanTop >= maxTop) {
            spanTop = maxTop;
        }

        //设置
        //设置span的top值
        aSpan.style.top = spanTop + 'px';

        //当前span滚动的时候  确定内容top值
        //spanTop是已经确定   -spanTop *  （scrollContent内容的高度 - scroll的高度 ）/ (scrollBox的高度 - span的高度)
        scrollContent.style.top = -spanTop * ((scrollContent.offsetHeight - scroll.offsetHeight) / (scrollBox.offsetHeight - aSpan.offsetHeight)) + 'px';

    }

    //鼠标抬起
    document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
    }

}


//滚动条滚动(滚动滚轮去滚动的)   
///滚轮滚动默认是滚动天生自带的滚动条的（默认行为）
//滚轮事件不兼容  IE  chrome onmousewheel  
scroll.onmousewheel = function (ev) {
    ev = ev || window.event;
    myScroll(ev);
}

// FirFox:DOMMouseScroll
scroll.addEventListener("DOMMouseScroll", function (ev) {
    ev = ev || window.event;
    myScroll(ev);
});

function myScroll(ev) {
    // 阻止默认行为 (滚轮滚动 滚动条的滚动行为)
    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
    //滚轮方向确认
    if (wheelEvent(ev) > 0) { //滚轮向上的 
        //设置spanTop的值
        spanTop -= 5;
    } else { //滚轮向下的
        spanTop += 5;
    }


    //边界判断
    var minTop = 0,
        maxTop = scrollBox.offsetHeight - aSpan.offsetHeight;
    if (spanTop <= minTop) {
        spanTop = minTop
    } else if (spanTop >= maxTop) {
        spanTop = maxTop;
    }


    //设置
    //设置span的top值
    aSpan.style.top = spanTop + 'px';

    //当前span滚动的时候  确定内容top值
    //spanTop是已经确定   -spanTop *  （scrollContent内容的高度 - scroll的高度 ）/ (scrollBox的高度 - span的高度)
    scrollContent.style.top = -spanTop * ((scrollContent.offsetHeight - scroll.offsetHeight) / (scrollBox.offsetHeight - aSpan.offsetHeight)) + 'px';

}


// 滚动方向的处理
function wheelEvent(ev) {
    // IE或谷歌
    if (ev.wheelDelta) {
        return ev.wheelDelta;
    } else {
        return ev.detail * -40; //-3  3
    }
}