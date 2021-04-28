// bring in variables inlcuding express, router, and the homeController
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// get request to the root 
// runs getIndex method with is within the homeController
router.get('/', homeController.getIndex) 

// exporting the router variable so anyone using this module can use the router that we've created
module.exports = router