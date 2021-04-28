// bringing in the variables needed including express, passport, config, and the router
const express = require('express')
const passport = require('passport')
const config = require('../config/config')
const router = express.Router()

//get request to router that runs get request on auth/login
router.get('/login',
  //function takes in req, res, and next callback that is called when we're finished so the next function can do what it needs to do
  function(req, res, next) {
    // run authenticate method on passport with configurations specified 
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      
        resourceURL: config.resourceURL,    
        customState: 'my_state',            
        failureRedirect: '/' 
      }
    )(req, res, next); // returns a function and calls it using these as args
  },
  function(req, res) {
    console.log('Login was called in the Sample'); 
    res.redirect('/todos'); // Going back to todos
});

// GET /auth/openid/return'
router.get('/openid/return',
  // Checking authentication through azure
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,    
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/todos');
  });

router.post('/openid/return',
  // Checking authentication through azure
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,    
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/todos');
  });

// destroys the session and requires user to login upon return
router.get('/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});

module.exports = router
