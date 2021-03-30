const User = require("../models/user")

exports.showSignup = (req, res) => {
    res.render("signup")
};

exports.showLogin = (req, res) => {
    res.render("login")
};

exports.loginUser = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user && user.password === req.body.password) {
                console.log("Logged in successfully!");
                res.render("index");
            }
            else {
                console.log("Email or password is incorrect");
                res.render("login");
            }
        })
        .catch(error => {
            console.log("Error logging in user");
            next(error);
        });
};

exports.signingUp = (req, res) => {
    let dob = req.body.dob_month + "/" + req.body.dob_day + "/" + req.body.dob_year;
    let newUser = new User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        dateOfBirth: dob,
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password,
        securityQuestion: req.body.security_question,
        securityAnswer: req.body.security_answer,
        gender: req.body.gender,
        location: req.body.location,
        description: req.body.bio
    });
    if (req.body.fname == undefined) {
        res.render("signup");
    }
    else if (req.body.lname == undefined) {
        res.render("signup");
    }
    else if (dob == undefined) {
        res.render("signup");
    }
    else if (req.body.username == undefined) {
        res.render("signup");
    }
    else if (req.body.email == undefined) {
        res.render("signup");
    }
    else if (req.body.password == undefined) {
        res.render("signup");
    }
    else if (req.body.conf_password == undefined) {
        res.render("signup");
    }
    else if (req.body.security_question == undefined) {
        res.render("signup");
    }
    else if (req.body.security_answer == undefined) {
        res.render("signup");
    }
    else {
        newUser.save()
            .then(() => {
                res.render("thanks");
            })
            .catch(error => { res.send(error) });
    }

}