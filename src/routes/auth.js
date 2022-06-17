const express = require('express')

const { register, login, logout, getMe, forgotPassword, resetPassword, updateDetails, updatePassword } = require('../controllers/auth')
const { auth } = require('../middleware/auth')

const router = express.Router()

router
    .post('/register', register)

router
    .post('/login', login)

router
    .get('/logout', logout)

router
    .get('/me',auth, getMe)

router
    .post('/forgotpassword',forgotPassword)

router
    .patch('/resetpassword/:resettoken', resetPassword)

router
    .patch('/updatedetails',auth,updateDetails)
    
router
    .patch('/updatepassword',auth,updatePassword)  

module.exports = router