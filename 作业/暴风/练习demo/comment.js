/*

分页的接口：获取评论的数据
    method:get
    url:/getData
    参数：?n=1   n的值表示从获取器获取第几页的数据
    返回一个对象：{total:页数,data:数组(存储的是当前这一页获取到的数据)}

*/

~ function () {
    //获取要操作的元素
    var comment = document.getElementById("comment"),
        commentList = document.getElementById("comment_list"),
        count = document.getElementById("count"),
        totalPage = document.getElementById("totalPage");

    //n:给服务器传递的参数默认值是1  默认获取的是第一页的数据
    var n = 1;
    var total = null;
    var url = "http://127.0.0.1:8080";
    //获取数据
    Ajax({
        url: url+"/getData?n=" + n,
        dataType: "json",
        success: function (jsonData) {
            total = jsonData["total"];
            //给总页进行赋值
            totalPage.innerText = total;
            //绑定数据(获取到是当前这一页的数据每页5条)
            bindData(jsonData["data"]);

            //切换功能
            //因为我们的下一页和上一页及确定要绑定同一个事件,使用事件委托
            comment.onclick = function (ev) {
                //事件对象的兼容处理
                ev = ev || window.event;
                //事件源的兼容处理
                var target = ev.target || ev.srcElement;
                //拿到事件源（当前事件具体触发的元素）对应的内容
                var tarInner = target.innerHTML;
                //点击上一页或下一页或确定都是操作n的值  
                //点击的是上一页
                if (tarInner === "上一页") {
                    if (n === 1) return;
                    n--;
                    //给输入框进行赋值
                    count.value = n;
                }

                //点击下一页
                if (tarInner === "下一页") {
                    if (n === total) return;
                    n++;
                    //给输入框进行赋值
                    count.value = n;
                }

                //确定
                if (tarInner === "确定") {
                    if (isNaN(count.value)) return;
                    // 输入框的值
                    n = parseInt(count.value);
                }


                //重新发送Ajax请求并且绑定数据
                Ajax({
                    url: url+"/getData?n=" + n,
                    dataType: "json",
                    success: function (jsonData) {
                        bindData(jsonData["data"]);
                    }
                });
            }

            //在输入框输入具体的页数进行切换
            count.onkeyup = function (ev) {
                ev = ev || window.event;

                //判断是否回车了
                if (ev.keyCode === 13) {
                    n = parseInt(count.value);
                    //重新发送Ajax请求 从新绑定数据
                    Ajax({
                        url: url+"/getData?n=" + n,
                        dataType: "json",
                        success: function (jsonData) {
                            bindData(jsonData["data"]);
                        }
                    });
                }

            }

        }
    });

    //绑定数据实现
    function bindData(data) {
        console.log(data);
        var str = '';
        // 循环遍历做字符串的拼接
        for (var i = 0; i < data.length; i++) {
            var curData = data[i];
            // ES6模板字符串  ``要加变量直接${变量}     `<li>${变量}</li>`;
            str += `<li class="cliearfix">
            <div class="comment_user cliearfix">
                <img  class="fl" src="${curData.imgIco}" alt="">
                <div class="fl">
                    <p class="name">${curData.userId}</p>
                    <p class="time">${curData.date} ${curData.time}</p>
                </div>
            </div>
            <p class="comment_content">
                ${curData.content}
            </p>
            <p class="dian fr">
                <a href="#" class="dian_j">举报</a>
                <a href="#" class="dian_icon"></a>
                <span class="dian_count">${curData.count}</span>
            </p>
        </li>`;
        }

        //将拼接好的字符串插入到页面
        commentList.innerHTML = str;
    }
}();