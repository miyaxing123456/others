## Vuex 

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

单向数据流

State   —》getters《—-------组件—-------》dispatch《----------—actions-------------》commit《-------------mutations---------》修改《-------------state-----------》getters-《----------组件

### 1.安装：

```
cnpm i vuex --save
```

### 2.引入：

```js
import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)

new Vue({
  el: '#app',
 
  //3.创建一个仓库
  store: new vuex.Store({
    //4.状态
    state: {
      name: "妲己",
      age:30
    }
  }),
})
```

### 3.调用数据（组件）：

```vue
  <p>name:{{$store.state.name}}</p>
  <p>age:{{$store.state.age}}</p>
```

### 4.单独一个文件处理仓库

store/index.js

```js
//仓库
// 1.安装：cnpm i vuex --save 
// 2.引入
//需要创建一个仓库
import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)

export default new vuex.Store({
    //4.状态
    state: {
        name: "妲己",
        age: 30
    }
})
```

main.js

```js
//仓库
import store from "./store"
new Vue({
  el: '#app',
  
  //3.创建一个仓库
  store,
})
```

### 5.store 

state 状态 

mutations 修改状态:只能做同步操作

actions 动作 ，接收组件派发的任务，可以做异步

getters 把状态成批导出给组件

```js
//仓库
// 1.安装：cnpm i vuex --save 
// 2.引入
//需要创建一个仓库
import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)

//状态
const state = {
    name: "妲己",
    age: 30,
    num: 0
}
//修改状态
const mutations = {
    changeName1(state) {
        state.name = "王昭君"
    },
    changeName(state, name) {
        state.name = name;
    },
    changeAge1(state) {
        state.age = 40;
    }
}
//动作 用来组件派发任务
const actions = {
    changeWang(context) {
        context.commit("changeName1")
    },
    changeAge1(context) {
        context.commit("changeAge1")
    },
    changeName(context,name){
        context.commit("changeName",name)
    }
}


//计算属性
const getters = {
    getName(state) {
        return state.name;
    },
    getAge(state){
        return state.age;
    },
    getNum(state){
        return state.num
    }
}


export default new vuex.Store({
    //状态
    state,
    //修改状态
    mutations,
    //动作，用来组件派发任务
    actions,
   //计算属性：导出状态给组件使用
    getters
})
```

```vue
<p>name:{{$store.state.name}}</p> 		
<button @click="$store.dispatch('changeWang')">王昭君</button>
<button @click="$store.dispatch('changeName','大乔')">大乔</button>
<button @click="$store.dispatch('changeName','小乔')">小乔</button>
<p>age:{{$store.getters.getAge}}</p>
```

### 6.组件 关联的是getters actions 

getters --属性 —mapGetters—computed

actions—方法---mapActions—methods

##### mapGetters 成批导入getters到computed 

##### mapActions成批导入actions到methods

```vue
 <template>
	<div class="box">
      <h1>mapGetters mapActions</h1>
      <h4>name:{{getName}}</h4>
      <h4>age:{{getAge}}</h4>
      <h4>num:{{getNum}}</h4>
      <button @click="changeName('伽罗')">伽罗</button>
      <button @click="changeAge()">40</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {

  methods: {
    ...mapActions({
      "changeName":"changeName",
      "changeAge":"changeAge1"
    }),
   
  },
  computed:{
    ...mapGetters([
      "getName",
      "getAge",
      "getNum"
    ]),
    a(){
      return 10;
    }
  }
};
</script>
```



### 7.总结

1.state 状态 

2.mutations 修改状态

3.actions 通过mapActions对接到组件

4.getters 通过mapGetters对接到组件

5.组件 状态可以从getters取，方法可以从actions取。 那么我们就可以实现组件层和状态层解耦。



### 8.案例

#### 1.创建项目

#### 2.清空项目

#### 3.配置一级路由 index detail collection

```js
 routes: [
    {
      path:'/',
      component:index
    },
    {
      path:"/detail",
      component:detail
    },
    {
      path:"/collection",
      component:collection
    }
  ]
```

#### 4.请求数据准备工作

1.backStage  

```
cnpm i 
node app.js
```

2.配置代理

3.安装axios

4.uitl/request.js 

```js
import axios from "axios"

axios.interceptors.response.use(res => {
    console.log("这次请求的数据是：" + res.config.url)
    console.log(res)
    return res;
})

const baseUrl = "/api";
```

#### 5.vuex准备工作

1.安装

```
cnpm i vuex --save
```

2.store/index.js

```js
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

//状态
const state = {

}

//修改状态
const mutations = {

}

//actions 
const actions = {

}

//导出数据
const getters = {

}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store;
```

3.main.js

```js
import store from './store'

new Vue({
  el: '#app',
  store,
})
```

#### 6.index.vue

1.定义了一个状态 list(state)，如何修改list(mutations)，页面如何触发修改list(action),导出list(getters)

```js
//状态
const state = {
    //首页数据
    list: []
}

//修改状态
const mutations = {
    //修改list
    changeList(state, arr) {
        state.list = arr;
    }
}

//actions 
const actions = {
    //获取首页的数据
    requestListAction(context) {
        //发起请求
        requestList().then(res => {
            //修改数据
            context.commit("changeList", res.data.data)
        })
    }
}
//导出数据
const getters = {
    list(state) {
        return state.list
    }
}
```

2.index.vue

通过mapGetters和mapActions引入需要的数据和方法，画页面

```vue
<template>
  <div>
    <h1>首页</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link to="/detail">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  
  methods: {
    ...mapActions([
      "requestListAction"
    ])
  },
  mounted() {
    this.requestListAction()
  },
  computed: {
    ...mapGetters([
      "list"
    ])
  }
};
</script>
```

#### 7.详情页

1.定义详情页需要的状态 detail (state),修改detail (mutations), 接收修改detail的动作 (actions) ,导出detail (getters)

```js
//状态
const state = {
    //详情数据
    detail: {}
}

//修改状态
const mutations = {
    //修改详情
    changeDetail(state, detail) {
        state.detail = detail;
    }
}

//actions 
const actions = {
    //获取详情的数据的动作
    requestDetailAction(context,id){

        requestDetail(id).then(res=>{
            //修改detail
            context.commit("changeDetail",res.data.detail)
        })
    }
}

//导出数据
const getters = {
    //导出详情的数据
    detail(state){
        return state.detail
    }
}

```

2.detail.vue 

引入要用的detail的状态，派发任务的action  requestDetailAction ,

一进来页面就要派发 mounted 执行 requestDetailAction。

```vue
<template>
  <div>
    <h1>详情页</h1>
    <h2>题目：{{detail.title}}</h2>
    <p>内容:{{detail.con}}</p>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
  computed:{
    ...mapGetters([
      "detail",
    ])
  },

  methods: {
    ...mapActions([
      "requestDetailAction"
    ])
  },
  mounted(){
    var id=this.$route.query.id;
    this.requestDetailAction(id)
  }
};
</script>
```

#### 8.收藏功能

1.定义收藏的状态 (state) ,如何收藏(mutations) 如何取消(mutations)   ,页面如何触发 (actions), 导出数据

```js
//状态
const state = {
    //收藏数据
    collections: [
        // { id: "", title: "", con: "" },
        // { id: "", title: "", con: "" },
    ]
}

//修改状态
const mutations = {

    //收藏
    collect(state, detail) {
        state.collections.push(detail);
    },
    //取消
    cancel(state, id) {
        var index = state.collections.findIndex(item => item.id === id)
        state.collections.splice(index, 1);
    }
}

//actions 
const actions = {
    //页面触发收藏的动作
    collectAction(context, detail) {
        context.commit("collect", detail)
    },
    //页面触发取消收藏的动作
    cancelAction(context, id) {
        context.commit("cancel", id)
    }
}

//导出数据
const getters = {
    //导出collections 
    collections(state) {
        return state.collections
    }
}

```

2.detail.vue

触发 收藏 和 取消收藏

```js
methods: {
    ...mapActions([ "collectAction","cancelAction"])
  },
```

点击调用

```vue
 <button @click="collectAction(detail)">收藏</button>
 <button @click="cancelAction(detail.id)">取消收藏</button>
```

3.collection.vue

```vue
<template>
  <div>
    <h1>收藏页</h1>
    <ul>
      <li v-for="item in collections" :key="item.id">
         <router-link :to="'/detail?id='+item.id">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["collections"])
  }
};
</script>
<style  scoped>
</style>
```

4.在详情页，收藏 和取消收藏 两个按钮并不同时出现。收藏了就展示 "取消收藏",没有收藏就展示"收藏"

所以定义一个状态isCollect,由于isCollect是由collections和detail计算得到的，所以直接在getters计算

```js
//导出数据
const getters = {
   
    //是否收藏
    isCollect(state){
       return state.collections.some(item=>item.id===state.detail.id)
    }
}
```

Detail.vue

```vue
<template>
  <div>
    <h1>详情页</h1>

    <button v-if="isCollect" @click="cancelAction(detail.id)">取消收藏</button>
    <button v-else @click="collectAction(detail)">收藏</button>
    
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([ "isCollect"])
  },

};
</script>
<style scoped>
</style>
```

### 9.把状态层作为缓存层，减少请求次数，减小服务器压力

```js
 requestListAction(context) {
        //如果list有数据了，就不需要再次发起请求
        if (context.state.list.length > 0) {
            return;
        }

        //发起请求
        requestList().then(res => {
            //修改数据
            context.commit("changeList", res.data.data)
        })
    },
    //获取详情的数据的动作
    requestDetailAction(context, id) {
        //这次的要请求的id和上一次请求过得id是否一样
        //如果一样，就不发请求；如果不一样，就发
        if (id === context.state.detail.id) {
            return;
        }

        requestDetail(id).then(res => {
            //修改detail
            context.commit("changeDetail", res.data.detail)
        })
    },
```



### 面试题：

```
1.vuex是什么？怎么使用？哪种功能场景使用它？
    答案：vuex是vue的状态管理器。在main.js引入store，注入。只用来读取的状态集中放在store中； 改变状态的方式是提交mutations，这是个同步的； 异步逻辑应该封装在action中。
    场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车、搜索、弹框信息保存

2. vuex有哪几个模块？
    答案：state mutations actions getters modules
```

