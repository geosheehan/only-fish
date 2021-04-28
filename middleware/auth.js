module.exports = {
    //if logged in then can go and do next function on this request, if not logged in then must go to home page (to log in)
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },
    //if not logged in (guest) then need to go and do next function on this request, if logged in then can go to dashboard
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect('/dashboard');
      }
    },
  }
  