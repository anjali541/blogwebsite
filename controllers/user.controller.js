
const passport = require("passport");
const LocalStategy = require("passport-local");


const UserCollection = require("../models/user.schema");

passport.use(new LocalStategy(UserCollection.authenticate()));

exports.homepage = function (req, res, next) {
    res.render('index')
}
exports.signuppage = (req, res, next) => {
    const newuser = new UserCollection({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    UserCollection.register(newUser,req.body.password).then((u)=>{
        passport.authenticate("local")(req,res, ()=>{
        res.redirect("/login")
        })
    })
}

exports.signuppage =passport.authenticate("local",{

            successRedirect: "/user/profile",
            failureRedirect: "/login",
})
exports.logout = (req,res,next)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
      });
    }