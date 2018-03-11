// 获取用户
exports.getUser = async (ctx, user) => {
    ctx.body = {
        username: 'eugene',
        age: 25
    }
}

// 用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}
