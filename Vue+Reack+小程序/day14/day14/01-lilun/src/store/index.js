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
    num: 0,
    song: []
}
//定规则----actions
// a 交作业
// b 练习
// c 放假

// 第二天 
//c  派发了一个任务
//修改状态 :直接修改。不能做异步，只做同步
const mutations = {
    changeName1(state) {
        state.name = "王昭君"
    },
    changeName(state, name) {
        state.name = name;
    },
    changeAge1(state) {
        state.age = 40;
    },
    changeSong(state, arr) {
        state.song = arr;
    }
}
//动作 用来组件派发任务。 可以做异步操作。
const actions = {
    changeWang(context) {
        context.commit("changeName1")
    },
    changeAge1(context) {
        context.commit("changeAge1")
    },
    changeName(context, name) {
        context.commit("changeName", name)
    },
    // requestSong(context){
    //     request().then(res=>{
    //         context.commit("changeSong",res.data)
    //     })
    // }
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



  

