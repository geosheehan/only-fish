// bring in variables inlcuding express, router, and the homeController
const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

// get request to the root 
// runs getIndex method with is within the homeController
router.get('/', homeController.getIndex)
<<<<<<< HEAD
router.get('/lake', homeController.getLake)
router.get('/pond/:id', /* ensureAuth, */ homeController.getPond)
router.post('/lake', homeController.postLake)
=======
router.get('/lake/:id', homeController.getLake)
router.get('/pond/:id', /* ensureAuth, */ homeController.getPond)
router.get('/signup', authController.getSignup)
//router.post('/signup', authController.postSignup)
router.get('logout', authController.getLogout)
>>>>>>> c102a5f5cc704a5cd525a81b43d567af7c38cebd

// exporting the router variable so anyone using this module can use the router that we've created
module.exports = router