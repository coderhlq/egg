'use strict';

const Controller = require('egg').Controller;

class CoderController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I AM CODER</h1>';
  }
  async getGirls() {
    const { ctx } = this;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve((ctx.body = '<h1>小红,正向你走来</h1>'));
      }, 2000);
    });
  }
  // 自由传参模式 也即不限制参数个书
  async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.coderhlq.getGirl('1919');
    ctx.body = res;
    // ctx.body = ctx.query;
    // 默认访问这个路由的时候返回一个空对象 也即 不传query的时候
    // 如果传递有query(?name=age&age=18)这样的话 那么返回的就是一个json格式的对象{"name":"age","age":"18"}
  }
  // 严格传参模式
  async getGirl2() {
    const { ctx } = this;
    const { name, age } = ctx.params;
    ctx.body = 'get girl2' + name + '今年' + age + '岁了 ';
  }
  //  POST请求
  // async add() {
  //   const { ctx } = this;
  //   ctx.body = 'add page';
  // }
}
module.exports = CoderController;
