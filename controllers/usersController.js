const User = require("../models/user")

exports.showSignup = (req, res) =>{
    res.render("signup")
}

exports.showLogin = (req, res) =>{
    res.render("login")
}

exports.loginUser = (req, res)=>{
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user && user.password === req.body.password){
            console.log("Logged in successfully!");
            res.render("index");
        }
        else{
            console.log("Email or password is incorrect");
            res.render("login");
        }
    })
    .catch(error => {
        console.log("Error logging in user");
        next(error);
    });
}