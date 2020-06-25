react(组件) ———》react-redux《----- redux(状态层)—————》redux-thunk《----------  服务端(数据)

### 1.使用redux流程

#### 1.创建一个仓库

```js
import { createStore } from "redux"

//1.初始状态
const initState = {

}

//2.reducer
const reducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

//3.创建仓库
const store = createStore(reducer);

//4.导出仓库
export default store;
```

#### 2.使用react-redux的Provider组件注入store

```jsx
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```

#### 3.定义一个状态

```js
//初始值
const initState = {
    name: "妲己"// 5.定义一个状态
}

//6.修改状态的action {} action creator
export const changeNameAction = name => ({
    type: "changeName",
    name
})


//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        //7.处理修改状态的action,最后修改state
        case "changeName":
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}


//8.导出状态 reselector
export const getName = state => state.name;
```

#### 4.从状态层取数据和方法的组件，需要定义为容器型组件

```jsx
import React, { Component } from 'react';
import { connect } from "react-redux"
class A extends Component {
    render() {
        return (
            <div className="box">
                <h1>this is A</h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A);

```

#### 5.从状态层取数据和方法，到props，调用

```jsx

import { getName, changeNameAction } from "../store"
class A extends Component {
    render() {
        const { name, changeName } = this.props
        return (
            <div className="box">
                <h1>this is A</h1>
                <p>name:{name}</p>
                <button onClick={() => changeName('王昭君')}>王昭君</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: getName(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeName: (name) => dispatch(changeNameAction(name))
    }
}

```

#### 6.redux-thunk 

1.安装

```
cnpm i redux-thunk --save
```

2.引入

```js
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
const store = createStore(reducer, applyMiddleware(thunk));
```

3.使用

```js
export const requestListAction = () => {
    return (dispatch, getState) => {
        //getState()是整体的状态，取值 getState().模块名称.状态名
        const { list } = getState().list;
        if (list.length > 0) {
            return;
        }
        requestList().then(res => {
            dispatch(changeListAction(res.data.data))
        })
    }
}
```

#### 7.拆分redux

```js
import { createStore, applyMiddleware，combineReducers } from "redux"
import thunk from "redux-thunk"


import list from "./modules/list.js"
const reducer = combineReducers({
  //key 模块名，value模块对应的reducer
  list:list
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store;
```

