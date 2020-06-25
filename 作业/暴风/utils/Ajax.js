//给了一个私有作用域
(function (window) {

    //ajax是不兼容的   ActiveXObject  IE低版本下兼容
    // 创建Ajax实例  并且做了兼容处理
    function createXHR() {
        //这个属性存在就是IE低版本
        if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHttp");
        } else {
            return new XMLHttpRequest;
        }
    }

    function Ajax(options) { //options:对象
        //用户再去使用的时候不传递参数有默认值，传递了就使用用户传递进来的值，本质就是将用户传递进来实参将原来的这个对象进行覆盖
        var _default = {
            method: "get", //请求方式
            url: null, //请求的url地址
            async: true, //请求的同步还是异步
            dataType: null, //设置请求回来的数据类型
            data: null, //放到请求主体中的内容
            success: null //请求成功的回调
        };

        //循环遍历传递进来的实参（对象类型） 将默认的这个对象属性对应的值进行覆盖
        for (var attr in options) {
            // 设置属性对应的值
            _default[attr] = options[attr]
        }

        //处理GET的缓存问题
        //"./test.json"    用户可能传递了参数可能没有传递
        //没有传参："./test.json    ?_="+Math.random();
        //传递了参数 "./test.json?name=haha     &_="+Math.random();  
        //判断是不是get请求  不管用户传递进来是大写还是小写都转为小写
        if (_default.method.toLowerCase() === "get") {
            _default.url += _default.url.indexOf("?") > 0 ? "&_=" + Math.random() : "?_=" + Math.random();
        }


        //创建Ajax的实例
        var xhr = createXHR();

        //配置请求参数
        xhr.open(_default.method, _default.url, _default.async);

        //监听请求状态
        xhr.onreadystatechange = function () {

            if (/^2\d{2}$/.test(xhr.status) && xhr.readyState === 4) {
                var resText = xhr.responseText;
                // 判断是否需要将获取到的JSO格式字符串转为JSON格式对象
                if (_default.dataType === "json") {
                    resText = JSON.parse(xhr.responseText);
                }
                // success存在 并且将success方法执行，将其中的this变为xhr
                _default.success && _default.success.call(xhr, resText);
            }
        }

        //发送请求
        xhr.send(_default.data);
    }


    //相当于我直接给window增加了一个自定义属性Ajax值是一个函数
    window.Ajax = Ajax;
})(window);