const Koa = require("koa");
// 用于请求数据解析
const bodyParser = require("koa-bodyparser");
// 用于cors跨域
const cors = require("koa2-cors");
const router = require("./routes/index")
const moment = require("moment")
const { query } = require("./db/index");


// 创建一个koa对象
const app = new Koa();

/* 
 *app.listen(...) 方法只是以下方法的语法糖:
    const http = require('http');
    const Koa = require('koa');
    const app = new Koa();
    http.createServer(app.callback()).listen(...);
 */
const server = require("http").createServer(app.callback());


server.listen(3000)

//app.use(function): 将给定的中间件方法添加到此应用程序
app.use(cors())

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())

global.query = query;
global.moment = moment;

console.log("服务器已启动,端口3000");
