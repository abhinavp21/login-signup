const authController = require("../controllers/authController")
const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middleware/authMiddleware');

router.get("/", requireAuth, (req, res) => {
    res.render("home")
})
router.get('/signup', authController.signup_get)
router.post('/signup', authController.signup_post)

router.get('/login', authController.login_get)
router.post('/login', authController.login_post)

router.get('/logout', authController.logout_get)

router.get('/forgot', authController.forgot_password)

module.exports = router