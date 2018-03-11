const Koa = require('koa');
const bodyPaeser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next()
})

app.use(bodyPaeser());
app.use(controller())

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');