const api = {
    Login: '/api/v1/login',
    Register: '/api/v1/register',
    GetUserInfo: '/api/v1/get_user_info',
}

export default {
    install: (Vue, Option) => {
        Object.defineProperty(Vue.prototype, '$api',{
            value: api
        })
    }
}
