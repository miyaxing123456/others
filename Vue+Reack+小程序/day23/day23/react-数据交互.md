### 1.数据交互-axios

#### 1.安装

```
cnpm i axios --save
```

#### 2.配置代理

package.json 

```js
{
	"proxy":"http://localhost:4000"
}
```



#### 3.语法

```js
import axios from "axios"
axios({
	url:"",
	method:"get",
	params:{
	}
})
```

```js
import axios from "axios"
import qs from "qs" //cnpm i qs --save
axios({
	url:"",
	method:"post",
	data:qs.stringify({
	
	})
})
```

```js
//请求拦截
axios.interceptors.request.use(config=>{
  //逻辑
  return config
})

//响应拦截
axios.interceptors.response.use(res=>{
  //逻辑
  return res
})
```

#### 4.util/requet.js 

```js
export const getList=()=>{
  return axios({
    url:"",
    method:"get",
    params:{
    }
  })
}

export const getDetail=()=>{
  return axios({
    url:"",
    method:"get",
    params:{
    }
  })
}
export const getMovie=()=>{
  return axios({
    url:"",
    method:"get",
    params:{
    }
  })
}
```



### 2.ref

​	Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。
​    我们可以为元素添加 ref 属性然后在回调函数中接受该元素在 DOM 树中的句柄，
​    该值会作为回调函数的第一个参数返回。 
​    用于对 render() 返回的特定元素或组件的引用。
​    当需要进行 DOM 测量或向组件添加方法时，它们会派上用场。

#### 场景： 案例在meituan/order

```
1.DOM元素的属性 ：offsetLeft scrollLeft clientHeight ....
2.媒体元素方法：audio video ...
3.父组件调用子组件的方法。
```

#### 使用：

1.字符串方式：

```jsx
<div ref="box"></div>
```

```js
this.refs.box.offsetWidth
```

2.React.createRef()  推荐

```js
constructor(){
	super()
	this.box=React.createRef()
}
```

```jsx
<div ref={this.box}></div>
```

```
this.box.current.offsetLeft 
```

##### 注意：

1.使用ref一定要等到节点存在才可以使用。

2.知乎详情的案例在ref_zhihu/app.js

### 3.ant design PC端

公司：蚂蚁金服

官网：https://ant.design/index-cn

安装：

```
cnpm i antd --save
```

入口文件引入：

```js
import 'antd/dist/antd.css';
```

使用：

```jsx
import {DatePicker} from "antd"

<DatePicker></DatePicker>
```

### 4.ant design mobile

公司：蚂蚁金服

官网：https://mobile.ant.design/index-cn

安装：

```
cnpm i antd-mobile --save
```

index.html 

```html
<!DOCTYPE html>
<html>
<head>
  <!-- set `maximum-scale` for some compatibility issues -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
  </script>
</head>
<body></body>
</html>
```

入口文件引入：

```js
import 'antd-mobile/dist/antd-mobile.css'
```

使用：

```jsx
import { Button } from 'antd-mobile';
<Button></Button>
```

#### 注意：

1.[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL> 

```css
img{
	touch-action:none;
}
```

2.使用抽屉会使页面没有高度，页面不会滚动

3.如果想要修改组件的样式，选中类名，修改，不起作用，加！important 

4.如果想要自己写动画，那么就使用css书写，但是一定要保证节点存在。