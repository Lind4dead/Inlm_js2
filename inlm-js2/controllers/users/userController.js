const router = require('express').Router();
const userModel = require('../../models/users/userModel')


// POST för att registera användare
router.post('/register', userModel.userRegistration)

// POST för att logga in användare
router.post('/login', userModel.loginUser)







module.exports = router;