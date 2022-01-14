const Subscription = require('egg').Subscription;

class GetTime extends Subscription {
  static get schedule() {
    //这里面设置的是定时器的时间 页即多少秒执行一次
    return {
      //   interval: '3s',
      //这里cron定义的字符串是六个*  ****** 从左到右依次是秒 分 时 日 月 周
      //可以单独定义任意一个
      //那么下面这样定义的话就相当于每3秒钟执行一次
      cron: '*/3 * * * * *',
      type: 'worker'
    };
  }

  //这里定义的是每次执行的时候要做什么事
  async subscribe() {
    // console.log(Date.now());
  }
}

module.exports = GetTime;
