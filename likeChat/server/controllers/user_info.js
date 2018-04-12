const user_info = require('../models/user_info')
let ctxModel = require('./ctxModel')

let get_user_info = async (ctx, next) => {
  let user_id = ctx.request.query.id

  const RowDataPacket = await user_info.getUserInfoById(user_id)
  console.log(RowDataPacket)
  ctxModel.data = RowDataPacket
  ctx.body = ctxModel
};

module.exports = {
    get_user_info
}
