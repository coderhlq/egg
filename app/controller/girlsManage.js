'use strict';

const Controller = require('egg').Controller;

class GirlManager extends Controller {
  async addGirl() {
    const { ctx } = this;
    const params = {
      id: 2,
      name: '小白',
      age: 19,
      skill: '投料'
    };
    const res = await ctx.service.testtodo.addGirl(params);
    if (res) {
      ctx.body = '添加女孩--成功';
    } else {
      ctx.body = '添加女孩--失败';
    }
  }
  async delGirl() {
    const { ctx } = this;
    const id = { id: 2 };
    const res = await ctx.service.testtodo.delGirl(id);
    if (res) {
      ctx.body = '删除女孩--成功';
    } else {
      ctx.body = '删除女孩--失败';
    }
  }
  async updateGirl() {
    const { ctx } = this;
    const params = {
      id: 2,
      name: '小白',
      age: 20,
      skill: '头疗 足疗'
    };
    const res = await ctx.service.testtodo.updateGirl(params);
    if (res) {
      ctx.body = '修改成功-成功';
    } else {
      ctx.body = '修改女孩-失败';
    }
  }
  async getGirls() {
    const { ctx } = this;
    const res = await ctx.service.testtodo.getGirls();
    ctx.body = '查询女孩' + JSON.stringify(res);
  }
}

module.exports = GirlManager;
