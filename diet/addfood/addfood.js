// diet/addfood/addfood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    
    typeEums:{
      1:'添加早餐',
      2:'添加午餐',
      3:'添加晚餐',
      4:'添加早上加餐',
      5:'添加下午加餐',
      6:'添加晚上加餐',
    },
    show:true,
    buttons: [
      {
          type: 'default',
          className: '',
          text: '辅助操作',
          value: 0
      },
      {
          type: 'primary',
          className: '',
          text: '主操作',
          value: 1
      }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    wx.setNavigationBarTitle({
        title: this.data.typeEums[options.type],
      })
    this.setData({
      type:options,
      search: this.search.bind(this),
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  search(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
},
  selectResult(e) {
      console.log('select result', e.detail)
  },
  open() {
    console.log('ad')
    this.setData({
        show:true
    })
  },
  buttontap(e) {
      console.log(e.detail)
  },
  goBack(){
    wx.navigateBack({
      delta:1,
    })
  }
})