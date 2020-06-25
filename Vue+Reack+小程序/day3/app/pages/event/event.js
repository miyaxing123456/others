// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num:100,
      name:"张三丰"
  },
  // 自定义函数--  不需要使用methods 
  fun:function(){
    console.log('fun传统形式',this.data.num)
  },
  // fun1:function(){
  //   console.log('fun1')
  // }
  fun1:()=>{
    // 事件函数可以使用箭头函数，但是要注意 this的使用
    console.log('fun1箭头函数',this)
  },
  fun2(){
    console.log('fun2简写形式',this.data.num)
  },

  // 参数
  fun3(e){
    console.log(e)
    // let  id = e.target.id;
    // let  ids = e.currentTarget.id;
    // console.log(id,'---',ids)
    // let  {age,name} = e.target.dataset;
    let  {age,name}  =e.currentTarget.dataset;
    console.log(age,name)


  },
  parent(e){
      console.log(e,'parent')
  },
  child(e){
     console.log(e,'child')
  }
})