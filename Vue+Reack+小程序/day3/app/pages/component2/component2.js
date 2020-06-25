// pages/component2/component2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //   <div class="mydiv">我是div</div>
    nodesArray: [{
      type: "node",
      name: "div",
      attrs: {
        class: "mydiv"
      },
      children: [{
        type: "text",
        text: "我是div"
      }]
    }],
    /*
        <div class="div1">
            <div class="red">我是red</div>
            <div class="blue">我是blue</div>
        <div>
        <div class="green">我是green</div>
    */
    nodesBrray: [{
        type: "node",
        name: "div",
        attrs: {
          class: "div1"
        },
        children: [{
            type: "node",
            name: "div",
            attrs: {
              class: "red"
            },
            children: [{
              type: "text",
              text: "我是red"
            }]
          },
          {
            type: "node",
            name: "div",
            attrs: {
              class: "blue"
            },
            children: [{
              type: "text",
              text: "我是blue"
            }]
          }
        ]
      },
      {
        type: "node",
        name: "div",
        attrs: {
          class: "green"
        },
        children: [{
          type: "text",
          text: "我是green"
        }]
      }
    ]
  },


})