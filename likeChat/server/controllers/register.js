 const user_info = require('../models/user_info')
 let md5 = require('md5')

 module.exports = async (ctx, next) => {
   let user = {
     name: ctx.request.body.name,
     password: ctx.request.body.password
   }

   const RowDataPacket = await user_info.findDataByName(user.name)
     .then(result => {
       if (result.length > 0) {
         ctx.body = {
           success: false,
           message: "用户名已存在"
         };
       } else {
           ctx.body = {
               success: true,
               message: "注册成功"
           }
           // 新建用户
           user_info.registerUser([user.name, md5(user.password), moment().format('YYYY-MM-DD h:mm:ss')])
       }
      console.log(result)
     })
     
 };
