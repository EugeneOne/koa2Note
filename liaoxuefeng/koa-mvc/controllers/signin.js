module.exports = {
    'POST /signin': async (ctx, next) => {
        var email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email == 'yqwan@example.com' && password == '123') {
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            })
        } else {
            // 登录失败:
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
}