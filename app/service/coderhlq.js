'use strict';

const Service = require('egg').Service;
class CoderService extends Service {
  //  因为Service层中都是跟数据库打交道的 所以是异步操作
  async getGirl(id) {
    return {
      id,
      name: '小红',
      age: 19
    };
  }
}

module.exports = CoderService;
