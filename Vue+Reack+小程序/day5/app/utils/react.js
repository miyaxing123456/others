
function  React(){
  console.log('react')
}

React.Component = function(){
  console.log('component')
}

var  Component = React.Component;
/*
  import  React,{Component}  from  "react"
  class  App  extends  React.Component {

  }

*/

// es6   对外暴露

//   第一种
export  {
  Component
}
// 第二种
export  default  React;