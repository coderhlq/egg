'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const counter = app.middleware.counter();
  //在这里用的话 只有把counter当作第二个参数传进去了哪个路由  哪个路由访问的时候菜会被中间件拦截到
  const { router, controller } = app;
  router.get('/', counter, controller.home.index);
  router.get('/coder', counter, controller.coderhlq.index);
  router.get('/girl', controller.coderhlq.getGirls);
  router.get('/getgirl', controller.coderhlq.getGirl);
  router.get('/girl2/:name/:age', controller.coderhlq.getGirl2);
  router.get('/testGetGirl', controller.home.testGetGirl);
  // router.get('/newContext', controller.home.newContext);
  router.get('/addGirl', controller.girlsManage.addGirl);
  router.get('/delGirl', controller.girlsManage.delGirl);
  router.get('/updateGirl', controller.girlsManage.updateGirl);
  router.get('/getGirls', controller.girlsManage.getGirls);

  router.post('/add', controller.home.add);
  router.post('/del', controller.home.del);
  router.post('/edit', controller.home.edit);
  router.post('/show', controller.home.show);
  router.post('/newContext', controller.home.newContext);
  router.post('/newRequest', controller.home.newRequest);
  router.get('/newResponse', controller.home.newResponse);
};
