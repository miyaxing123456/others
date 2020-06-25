// 用来封装请求api的
const urlApi = (url,data={},method="get") => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: {
        "content-type": "application/json"
      },
      method,
      success: (res) => {
        resolve(res,'请求成功')
      },
      fail: (err) => {
        reject(err,'请求失败')
      }
    })
  })
}
export  default   urlApi;

