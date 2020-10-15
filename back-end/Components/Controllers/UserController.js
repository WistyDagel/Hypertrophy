let mongoose = require('mongoose');
let user = mongoose.model('User');

exports.root = (req, res) => {
    res.send("API is working");
}

//Lists all of the current users on the database
exports.users__listAll = (req, res) => {
    user.find({}, (err, result) => {
        if(err) res.send(`Error: cannot read ${err.value}`);
        res.json(result);
    });
}

//Creates a new user and adds it to the database
exports.users__create = (req, res) => {
    let newUser = new user(req.body);
    newUser.save((err, result) => {
        if(err) res.send(`Error: cannot create ${err.value}`);
        res.json(result);
    });
}

//Updates the user based on their unique id
exports.users__updateUser = (req, res) => {
    user.findOneAndUpdate({_id: req.params.userid}, req.body, {new:true}, (err, result) => {
        if(err) res.send(`Error: cannot update ${err.value}`)
        res.json(result);
    })
}

//DEV USE ONLY - deletes the user account for testing purposes
exports.users__deleteUser = (req, res) => {
    user.findOneAndDelete({_id: req.params.userid}, (err, result) => {
        if(err) res.send(`Error: cannot delete ${err.value}`)
        res.json(result);
    })
}