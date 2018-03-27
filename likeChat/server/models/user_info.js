const {
	query
} = require('../db');

// 查询用户
let findDataByName = function(name) {
    let _sql = 'SELECT * FROM user_infor WHERE name= ? '
    return query(_sql, name)
}

module.exports = {
	findDataByName
}