'use strict';

const Controller = require('egg').Controller;

class CoderController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I AM CODER</h1>';
  }
}
module.exports = CoderController;
