### 1.项目问题

#### 1.图片防盗链

```html
<meta name="referrer" content="never">
```

#### 2.react中使用stylus 

1.安装

```
npm stylus stylus-loader --save
```

2.在你的电脑上安装一个git.

3.在你的桌面，右键—》git bash here 

```
git config --global user.name "kzj"
git config --global user.email "11@qq.com" 
```

执行完上面这两两句话，关掉黑框。

4.在你的项目目录demo—》右键 选择 git bash here

```
git add . 
git commit -m "xxx"
```

5.打开终端在demo

```
cnpm run eject
```

6.在wenpack.config.js文件，module.export->module->oneOf添加一下代码

```js
{
    test: /\.styl$/,
    use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('stylus-loader')
    ]
},
```

7.组件的样式文件，比如Movie.styl 

```stylus
@import "./stylus/index.styl";
h1 
  color $ng1
```

在组件引入样式movie.js

```js
import "./movie.styl"
```



#### 3.使用字体图标

1.去网上下载下来

2.放到静态资源

3.在入口文件引入

4.调用

```jsx
<span className="iconfont icon-caidan"></span>
```



#### 4.到底判断 时间计算

```ts
 componentDidMount() {
    //到底判断
    window.onscroll = () => {
      //窗口的高度
      var wh = document.documentElement.clientHeight;

      //文档的高度 
      var dh = document.documentElement.offsetHeight

      //上卷的距离 
      var st = document.documentElement.scrollTop || document.body.scrollTop;

      if (wh + st + 50 >= dh) {

        this.n++;
        var times = this.getTime(this.n)

        //发起请求 
        setTimeout(() => {
          var l = this.state.arr.length
          var arr2 = [l + 1, l + 2, l + 3, l + 4, l + 5]
          this.setState({
            arr: [...this.state.arr, ...arr2]
          })
        }, 1000)
      }
    }
  }
  getTime(n) {
    /*
    6.5
    前几天  请求时间    展示
    前1天 20200605(0)     6.4(1)
    2      6.4(1)          6.3(2)
    3      6.3(2)         6.2(3)

    n       (n-1)         (n)
    */

    var showDate = new Date(new Date().getTime() - n * 24 * 60 * 60 * 1000);//展示的时间对象
    var paramsDate = new Date(new Date().getTime() - (n - 1) * 24 * 60 * 60 * 1000);//发起请求的参数时间对象
    var showM = (showDate.getMonth() + 1 + "").padStart(2, '0')
    var showD = (showDate.getDate() + "").padStart(2, '0')
    var showTime = showM + "月" + showD + "日";

    var paramsY = paramsDate.getFullYear()
    var paramsM = (paramsDate.getMonth() + 1 + "").padStart(2, '0')
    var paramsD = (paramsDate.getDate() + "").padStart(2, '0')
    var paramsTime = paramsY + paramsM + paramsD

    return {
      show: showTime,
      params: paramsTime
    }
  }
```

#### 5.数据结构

```js
		this.state={
      d:[
        {
          time:"今日新闻",
          data:[{},{},{}]
        },
        {
          time:"6月4号",
          data:[{},{},{},{}]
        },
        {
          time:"6月3号",
          data:[{},{}]
        }

      ]
    }
```

### 2.flux 了解

安装：

```
cnpm i flux --save
```

Store  

```js
import {Dispatcher} from "flux"
//状态
const state={
  name:"妲己",
  age:20
}

//实例化派发器
const dispatcher=new Dispatcher()

//注册任务
dispatcher.register((action)=>{
  switch(action.type){
    case "changeName":
      //action ={type:"changeName",name:'xx'}
      state.name=action.name;
      break;
    case "changeAge":
      //action={type:"changeAge",age:30}
      state.age=action.age;
      break;
    default:
      return;
  }
})

export default {
  state,
  dispatcher
}
```

组件 取数据：

```js
import store from "./flux/index.js"
```

```jsx
<p>{store.state.name}</p>
```

修改数据：

```jsx
changename(name){
  store.dispatcher.dispatch({
    type:"changeName",
    name:'张三'
  })
}

changeage(age){
  store.dispatcher.dispatch({
    type:"changeAge",
    age:100
  })
}
```

想要自动渲染，借助事件触发器events模块 

```js
import EventEmiter from "events"
class State extends EventEmiter{
    constructor(){
        super()
        this.name="妲己"
        this.age=20
    }
}
//初始状态 state上面有name age属性，还有emit() on()方法
const state = new State();
```

在组件上绑定了自定义事件

```js
  componentDidMount(){
        store.state.on("stateChange",()=>{
            this.setState({})
        })
    }
```

```js
dispatcher.register((action) => {
    //action 任务 {type:"任务名称",payload:"参数"}
    switch (action.type) {
        case "changeWang":
            // {type:"changeWang"}
            state.name = '王昭君';
            state.emit("stateChange")
            break;
        case "changeName":
            //{type:"changeName",name:'xx'}
            state.name = action.name;
            state.emit("stateChange")
            break;
        case "changeAge":
            //{type:"changeAge",age:100}
            state.age=action.age
            state.emit("stateChange")
            break
        default:
            return;
    }

})
```



### 3.redux

#### 三大原则：

1.单一数据源

2.状态只是可读的

组件不能修改状态，只能取

3.必须使用纯函数修饰状态

#### 流程：

state—>组件— dispatch(action)—>reducer(函数) —修改—>state(要引起state的改变)—》重新渲染页面—组件



#### 基础使用：

组件(react) ——》react-redux 《---- 状态层(redux) —》redux-thunk(可以处理异步的action)《------  服务端





#### 1.安装依赖的模块：

```
cnpm redux react-redux --save
```

#### 2.初始化仓库 store/index.js

```js
import {createStore} from "redux"

//初始状态
const initState={
  
}

//修改状态的纯函数
const reducer=(state=initState,action)=>{
  switch(action.type){
    default:
      return state;
  }
}

//仓库
const store=createStore(reducer);
export default store
```

#### 3.通过react-redux 连接react和redux 

入口文件

```jsx
//1.引入Provider，包裹App,注入store
import { Provider } from "react-redux"
import store from "./store"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

#### 4.定义name状态

```js
//1.初始状态
const initState = {
    name: "妲己",
}

//4.action creator 
// 页面要dispatch({type:"changeName",name:'wzj'})来修改name
export const changeNameAction = name => ({
    type: "changeName",
    name
})
//2.纯函数
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeName":
            return {
                ...state,
                name: action.name
            }
       
        default:
            return state;
    }
}

//5.导出name
export const getName = (state) => state.name;
```

#### 5.将状态放入A组件，那么需要将A组件定义为类定义组件，然后将该组件转化为容器型组件。容器型组件会包含很多展示型组件(函数定义)

容器型组件：状态和方法从redux中来

展示型组件：状态和方法从父组件(容器型组件)中来

```jsx
import React, { Component } from 'react';
import { connect } from "react-redux"
import { getName, changeNameAction, getAge, changeAgeAction } from "../store"
class A extends Component {

    render() {
        const { name, changeName, age, changeAge } = this.props;
        return (
            <div className="box">
                <h1>this is A component</h1>
                <p>a:{this.props.a}</p>
                <p>name:{name}</p>
                <button onClick={() => changeName('肖战')}>点击修改名字为：肖战</button>
                <p>age:{age}</p>
                <button onClick={() => changeAge(1000)}>1000</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //state 就是store.getState()
    return {
        a: 10,
        name: getName(state),
        age: getAge(state)
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => dispatch(changeNameAction(name)),
        changeAge: age => dispatch(changeAgeAction(age))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A)

```

