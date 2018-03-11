const Koa = require('koa');

const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
// ctx是由koa传入的封装了response和request的变量
// next是koa传入的将要处理的下一个异步函数
app.use(async (ctx, next) => {
    await next()
    // 设置response的Content-Type:
    ctx.response.type = 'text/html';
    // 设置response的内容:
    ctx.response.body = '<h1>Hello, koa2!</h1>';
})

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');