//index.js
//获取应用实例
const app = getApp()
const dietTips=['盲目的减少热量以及主食的摄入，往往会适得其反！','合理的饮食结构，才是关键！','多吃粗粮以及低GI的食物！','清淡饮食不是不吃肉！']
const  trainTips=['训练要循序渐进，不要盲目的追求重量，质量更重要！','合理的训练计划，效果会更好！','训练后及时补充碳水和蛋白质有助于肌肉的恢复与生长！','三分练，七分吃，合理的饮食才是关键！']
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    activeTab:'diet',
    bodyInfo:{
      phase:'0',
      weight:'73',
      height:'173',
      bmi:'24' //公式：体重（kg）÷身高（m）的平方
    },
    currentDietTips:'',
    currentTrainTips:'',
    phaseDict:{
      0:"保持",
      1:'塑性',
      2:'增肌'
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      // wx.redirectTo({
      //   url: '/pages/home/home',
      // })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // wx.redirectTo({
        //   url: '/pages/home/home',
        // })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          // wx.redirectTo({
          //   url: '/pages/home/home',
          // })
        }
      })
    }
    this.setData({
      currentDietTips:this.getCurrentTips(dietTips),
      currentTrainTips:this.getCurrentTips(trainTips)
    })
    setInterval(()=>{
      this.setData({
        currentDietTips:this.getCurrentTips(dietTips),
        currentTrainTips:this.getCurrentTips(trainTips)
      })
    },5000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
    // wx.redirectTo({
    //   url: '/pages/home/home',
    // })
  },
  getActiveTab(e){
    console.log(e)
    this.setData({
      activeTab:e.target.dataset.value
    })
  },
  toMine(){
  wx.navigateTo({
    url: '/pages/mine/mine',
  })
  },
  toDiet(){
    wx.navigateTo({
      url: '/diet/index/index',
    })
  },
  toTrain(){
    wx.navigateTo({
      url: '/train/index/index',
    })
  },
  getCurrentTips(data){
    return data[parseInt(Math.random()*4)]
  },
})
