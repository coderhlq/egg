'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const username = ctx.session.username;
    const counter = ctx.session.counter;
    console.log(counter);
    await ctx.render('coderhlq.html', {
      nowTime: app.timeProp,
      id: 2021,
      name: '小红',
      age: 18,
      skill: '台实按摩',
      skills: ['泰式按摩', 'xxxx', 'xvvv']
    });
  }
  async testGetGirl() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.coderhlq.getGirl(id);
    ctx.body = res;
  }
  async add() {
    const { ctx } = this;
    ctx.cookies.set('user', '技术胖', {
      maxAge: 1000 * 60, //1分钟失效
      httpOnly: true,
      encrypt: true //默认这里set方法第二个参数是不可以传递中文的 否则浏览器会报错  这里设置一下
      //encrypt为true  就可以传中文了   但是注意 这里设置为true的话 同时查看cookie 也即get cookie的时候也要设置这个值为true
    });
    ctx.session.username = 'japanhg';
    ctx.body = {
      status: 200,
      data: 'cook 增加成功！'
    };
  }
  async del() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.body = {
      status: 200,
      data: 'cook 删除成功'
    };
  }
  async edit() {
    const { ctx } = this;
    ctx.cookies.set('user', 'bilibili');
    ctx.body = {
      status: 200,
      data: 'cook 删除成功'
    };
  }
  async show() {
    const { ctx } = this;
    const user = ctx.cookies.get('user', {
      encrypt: true //如果设置cookie的时候设置这个值为true的话 那么支里也要设置一下  相当于加密解密
    });
    console.log(user);
    ctx.body = {
      status: 200,
      data: 'cook 查看成功'
    };
  }
  async newContext() {
    const { ctx } = this;
    // const params = ctx.params('username');
    // const params = ctx.params('');
    const params = ctx.params();
    console.log(params);
    ctx.body = 'newContext';
  }
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = {
      status: 200,
      body: token
    };
  }
  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'jspang.com';
    const testBase64 = ctx.helper.base64Encode('jspang.com');
    ctx.body = testBase64;
  }
}

module.exports = HomeController;
