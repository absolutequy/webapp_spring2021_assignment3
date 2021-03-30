const express = require("express"), app = express(),
homeController = require("./controllers/homeController"),
usersController = require("./controllers/usersController"),
errorController = require("./controllers/errorController"),
layouts = require("express-ejs-layouts"),
mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/twezzy",
    { useNewUrlParser: true }
);

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", homeController.showIndex);

app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/signup", usersController.showSignup);
app.post("/signingUp", usersController.signingUp);
app.get("/login", usersController.showLogin);
app.post("/loginuser", usersController.loginUser);
app.get("/feed", homeController.showFeed);
app.get("/profile", homeController.showProfile);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), ()=>{
    console.log(`Server is running on port: ${app.get("port")}`)
})
