const express = require('express')
const userController = require('../controllers/userController')


const router = new express.Router()
router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/profile',userController.profileEdits)











module.exports=router
