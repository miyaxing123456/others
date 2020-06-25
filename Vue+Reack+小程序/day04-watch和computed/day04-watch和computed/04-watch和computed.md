

回顾：

1.渐进式 核心 优点 兼容 MVVM  

2.el data methods

3.{{}} v-html v-text v-model v-bind(:) v-if v-else v-show v-for v-on(@)

4.事件绑定

5.事件修饰符：.stop .prevent .once .self .enter .up .down .left .right .65

6.表单输入：v-model change   .lazy .trim .number

## 0.v-for

虚拟DOM可以作为js和html之间的一个缓存层。

## 1.watch

1.目的：监听数据的改变。

2.使用

```js
new Vue({
	el:"#app",
	watch:{
		name(newV,oldV){
			//做逻辑
      //newV-新值 oldV-旧值
		},
    json: {
       handler(newV, oldV) {
         console.log("json 变了");
       },
       deep: true, //深度监听
     },
	}
})
```

3.jsonp

```
使用条件：1.跨域 2.get 3.请求参数有一个参数是回调函数(cb callback)
原理：
	1.创建script 标签
		var os=document.createElement("script")
	2.给script标签的src赋值
		os.src="url";
	3.把script插入到页面
		document.body.appendChild(os)
	4.在回调函数处理数据
		function callback(d){
			//做逻辑
		}
```

4.深度监听

```js
new Vue({
	watch:{
	 json: {
     handler(newV, oldV) {
       console.log("json 变了");
     },
     deep: true, //深度监听
   },
	}
})
```

```html
<!-- 如果监听的数据是简单类型，或者是数组（数组的元素是简单类型），就直接监听即可 -->
<!-- 如果监听的数据是json，或者是数组（数组的元素是json），那么就必须是使用深度监听 -->
<!-- 深度监听会造成页面卡顿，建议尽量不要使用 -->
```



## 2.computed

计算属性：经过计算得到的属性

语法：

```js
new Vue({
	el:"#app",//挂载点
  data:{},//属性
  methods:{},//方法
  watch:{},//监听
  
   //1.已经声明过的属性就不能再次声明
  //2.data里面的属性是定义初始值，computed里面的属性是经过data|computed 属性计算得到属性
  //3.如果计算属性依赖的属性发生了改变，计算属性会重置计算。
  computed:{//计算属性
    	name(){
        //逻辑
        return 10;
      },
     man(){
       // return this.arr.filter(item=>{
       //     return item.sex=="男"
       // })
       return this.arr.filter(item=>item.sex=="男")
     }
  }
})
```





## 面试题：



    1.watch和computed的区别以及使用场景？
            区别：
                watch中的函数是不需要调用的
                computed内部的函数调用的时候不需要加()
    					
    					watch  属性监听  监听属性的变化
            	computed:计算属性  通过属性计算而得来的属性
    
            	watch需要在数据变化时执行异步或开销较大的操作时使用
            	computed 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。
            				主要当作属性来使用。
    
        使用场景：
            computed 　　　　
            　　　　当一个属性受多个属性影响的时候就需要用到computed
            　　　　最典型的例子： 购物车商品结算的时候
            watch
            　　　　当一条数据影响多条数据的时候就需要用watch
            　　　　搜索数据
    
    2.常用修饰符有哪些？
    
    
    5.vue中key 的作用。
            答案：当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。
            为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，
            你需要为每项提供一个唯一 key 属性。
            注意：不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
    6.arr :forEach map filter some every find findIndex reduce ...