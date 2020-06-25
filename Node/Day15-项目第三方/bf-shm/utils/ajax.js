~ function(window) {

    function creatXHR() {
        if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHttp")
        } else {
            return new XMLHttpRequest();
        }
    }

    function ajax(options) {
        var _default = {
            method: "get",
            url: null,
            async: true,
            data: null,
            dataType: null,
            getHead: null,
            success: null
        }


        for (var attr in options) {
            if (options.hasOwnProperty(attr)) {
                _default[attr] = options[attr]
            }
        }

        if (_default.method.toLowerCase() === "get") {
            _default.url += _default.url.indexOf("?") >= 0 ? "&_=" + Math.random() : "?_=" + Math.random();
        }

        var ajax = creatXHR();

        ajax.open(_default.method, _default.url, _default.async)

        ajax.onreadystatechange = function() {
            if (/^2\d{2}$/.test(ajax.status)) {
                if (ajax.readyState === 2) {
                    _default.getHead && _default.getHead.call(ajax)
                }
                if (ajax.readyState === 4) {
                    var resText = ajax.responseText;
                    if (_default.dataType === "JSON") {
                        resText = "JSON" in window ? JSON.parse(resText) : eval("(" + resText + ")")
                    }
                    _default.success && _default.success.call(ajax, resText)
                }
            }
        }
        ajax.send(_default.data);

    }
    window.ajax = ajax;
}(window)