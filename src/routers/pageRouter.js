const router = require('express').Router();
const  { pageController } = require('../controllers')
router.get('/',pageController.Home )
module.exports = router