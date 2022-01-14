module.exports = {
  //  方法扩展
  currentTime() {
    const current = getTime();
    return current;
  },
  //属性扩展
  //加入get关键字 就会默认是一个属性了  在使用的时候可以直接以app对象.的方式获取到
  get timeProp() {
    return getTime();
  }
};

function getTime() {
  let now = new Date();
  let year = now.getFullYear(); //得到年份
  let month = now.getMonth() + 1; //得到月份
  let date = now.getDate(); //得到日期
  const hour = now.getHours(); //得到小时数
  const minute = now.getMinutes(); //得到分钟数
  const second = now.getSeconds(); //得到秒数
  const nowTime =
    year +
    '年' +
    month +
    '月' +
    date +
    '日 ' +
    hour +
    ':' +
    minute +
    ':' +
    second;
  return nowTime;
}
