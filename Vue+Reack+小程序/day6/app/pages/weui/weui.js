Page({
  data: {
    slideButtons: [{
      type: 'warn',
      text: '删除',
    }],
    list: [{
        "text": "对话",
        dot: true
      },
      {
        "text": "设置",
        badge: 'New'
      }
    ]
  },

  slideButtonTap() {
    console.log(123)
  }
})