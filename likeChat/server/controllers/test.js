 
const user_info = require('../models/user_info')

module.exports = async (ctx, next) => {
    // let name = ctx
	// if (name === "" || password === "") {
	// 	ctx.body = {
	// 		success: false,
	// 		message: "用户名或密码不能为空"
	// 	};
	// 	return;
    // } else {
    //     console.log(ctx.request)
    // }
    const RowDataPacket = await user_info.findDataByName(ctx.request.query.name)
    console.log(RowDataPacket[0],RowDataPacket[0].user_id)
};