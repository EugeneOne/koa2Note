const {
  query
} = require('../db');

// 查询用户
let findDataByName = function (name) {
  let _sql = 'SELECT * FROM user_info WHERE name= ? '
  return query(_sql, name)
}
// 注册新用户
let registerUser = function (value) {
  let _sql = "insert into user_info(name,password,create_time) values(?,?,?);"
  query(_sql, value).then(result => {
    // 创建该用户详情
    let use_id = result.insertId;
    let _sql = "insert into user_detail(user_id,name) values(?,?);"
    query(_sql, [use_id, value[0]])
  })
  //return query(_sql, value)
}


// 添加

// 获取用户详细信息
let getUserInfoById = function (id) {
  let _sql = "SELECT * FROM user_info WHERE user_id= ? "
  return query(_sql, id)
}

module.exports = {
  findDataByName,
  registerUser,
  getUserInfoById
}
