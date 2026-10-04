const express = require('express');
const userController = require('../controllers/userController');
const router = new express.Router();

router.post('/register',userController.userRegister);
router.post('/login',userController.userLogin);
router.get('/profile-edit',userController.profileEdit);





module.exports = router;