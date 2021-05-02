// bring in variables inlcuding express, router, and the homeController
const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

// get request to the root 
// runs getIndex method with is within the homeController
router.get('/', homeController.getIndex)
router.get('/lake', homeController.getLake)
router.get('/pond/:id', /* ensureAuth, */ homeController.getPond)
router.get('/signup', authController.getSignup)
//router.post('/signup', authController.postSignup)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.getLogout)


// exporting the router variable so anyone using this module can use the router that we've created
module.exports = router