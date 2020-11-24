// compontents/contentRow/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label:{
      type:String,
      value:''
    },
    value:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    slideButtons: [{
      text: '普通',
      src: '/page/weui/cell/icon_love.svg', // icon的路径
    },{
      text: '普通',
      extClass: 'test',
      src: '/page/weui/cell/icon_star.svg', // icon的路径
    },{
      type: 'warn',
      text: '警示',
      extClass: 'test',
        src: '/page/weui/cell/icon_del.svg', // icon的路径
    }],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRowLeftTap(e){
      // this.triggerEvent('rowTap')
      console.log('onRowLeftTap', e.detail)
    },
    onDelTap(e) {
      console.log('onDelTap', e.detail)
  }
  }
})
