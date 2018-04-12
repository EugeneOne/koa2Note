const router = require('koa-router')(),
  login = require('../controllers/login'),
  register = require('../controllers/register'),
  user_info = require('../controllers/user_info')

router.prefix('/api/v1')
router.post('/login', login)
  .post('/register', register)
  .get('/get_user_info', user_info.get_user_info)

module.exports = router
