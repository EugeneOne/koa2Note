const router = require('koa-router')(),
    login = require('../controllers/test')

router.prefix('/api/v1')
router.get('/login',login)

module.exports = router