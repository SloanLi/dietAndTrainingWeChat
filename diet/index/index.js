// diet/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalCalories:400,
    budgetCalories:2100,
    // 早餐
    breakfast:{
      list:[{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'}],
      min:500,
      max:800,
      calories:800,
    },
    // 上午加餐
    morning:{
         list:[{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'}],
      min:500,
      max:800,
      calories:500,
    },
    // 午餐
    lunch:{
         list:[{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'}],
      min:500,
      max:800,
      calories:500,
    },
    // 下午加餐
    afternoon:{
         list:[{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'}],
      min:500,
      max:800,
      calories:500,
    },
    // 晚餐
    dinner:{
         list:[{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'}],
      min:500,
      max:800,
      calories:500
    },
    // 晚上加餐
    evening:{
         list:[{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'},{name:"牛奶",calories:"148",count:'100ml'}],
      min:500,
      max:800.,
      calories:500
    },
    actionSheetShow: false,
    actionSheetGroups: [
        { text: '上午加餐', value: 4 },
        { text: '下午加餐', value: 5 },
        { text: '晚上加餐',  value: 6 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  getAddFoodType(e){
  this.toAddFood(e.target.dataset.type)

  },
  getActionSheedType(e){
  this.toAddFood(e.detail.value)
  },
  toAddFood(type){
    wx.navigateTo({
      url: '../addfood/addfood?type='+type,
    })
  },
  showActionSheet(){
    this.setData({
      actionSheetShow:true
    })
  },
  toAnalysis(){
    wx.navigateTo({
      url: '../analysis/analysis',
    })
  }
})