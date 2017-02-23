// pages/main/main.js
Page({
  data:{
    shuju: [{"text": "朕的赞"},{"text": "朕的赏"}],
    operate: [{"image":"../../images/发现.png", "num":"7288"},
      {"image":"../../images/评论.png", "num":"1288"},
      {"image":"../../images/赞.png", "num":"3288"}
    ],
    neirong: '挣得钱三分之二花在买衣服鞋子包包化妆品，三分之一平常吃喝玩，女生不都是这样吗？',
    zan_images: [{"imagePath":"../../images/头像0.png"},
      {"imagePath":"../../images/头像1.png"},
      {"imagePath":"../../images/头像2.png"},
      {"imagePath":"../../images/头像3.png"},
      {"imagePath":"../../images/头像4.png"},
      {"imagePath":"../../images/头像5.png"},
      {"imagePath":"../../images/头像6.png"},
      {"imagePath":"../../images/头像7.png"},
      {"imagePath":"../../images/头像8.png"},
      {"imagePath":"../../images/头像9.png"},
      {"imagePath":"../../images/省略.png"},
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _that = this;
    _that.toMe();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  toMe:function(){
  }
})