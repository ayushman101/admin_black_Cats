const express= require('express')
const router= express.Router();
const register= require('../controllers/register')
const login= require('../controllers/login')


router.route('/register/v1').post(register)

router.route('/login').post(login)

module.exports=router;
