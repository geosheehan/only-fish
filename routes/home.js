// bring in variables inlcuding express, router, and the homeController
const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

// get request to the root 
// runs getIndex method with is within the homeController
router.get('/', homeController.getIndex)
<<<<<<< HEAD
// router.get('/lake', )
=======
router.get('/lake/:id', homeController.getLake)
>>>>>>> 55034f77cf45de5d5d9fd9cf6c39880b93cb0646
router.get('/pond/:id', /* ensureAuth, */ homeController.getPond)
router.get('/signup', authController.getSignup)
//router.post('/signup', authController.postSignup)
router.get('logout', authController.getLogout)

// exporting the router variable so anyone using this module can use the router that we've created
module.exports = router