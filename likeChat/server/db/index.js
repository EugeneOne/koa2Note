const mysql = require('mysql')
const dbConfig = require('../config.js').db
//连接池
const pool = mysql.createPool({
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host
})

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err)
      } else {
          connection.query(sql, values, (err, rows) => {
              if(err) {
                  reject(err)
              } else {
                  resolve(rows)
              }
              connection.release()
          })
      }
    })
  })
}

module.exports = {
    query
}