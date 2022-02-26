const express = require("express");
const app = express();

const userRoute = express.Router();
let User = require("../models/user");

// Add User
userRoute.route("/user").post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get User
userRoute.route("/user").get((req, res, next) => {
    User.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get UserbyID
userRoute.route("/user/:id").get((req, res, next) => {
    //con "tags:" se declara la parte del schema que quiero buscar equivalencia.
    User.find({id: req.params.tags}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//getbyEmail
userRoute.route("/user/:email").get((req, res, next) => {
    //con "tags:" se declara la parte del schema que quiero buscar equivalencia.
    User.find({email: req.params.tags}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Update User
userRoute.route("/user/:id").put((req, res, next) => {
    User.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("User updated successfully!");
            }
        }
    );
});

// Delete User
userRoute.route("/recipe/:id").delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = userRoute;