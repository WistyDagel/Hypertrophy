let mongoose = require('mongoose');

let fitnessLog = mongoose.model('FitnessLog');

//Lists all of the current logs on the database - DEV PURPOSES ONLY
exports.logs__listAllLogs = (req, res) => {
    fitnessLog.find({}, (err, result) => {
        if(err) res.send(`Error: cannot read ${err.value}`);
        res.json(result);
    });
}

//Creates a new fitness log collection
exports.logs__createLog = (req, res) => {
    let newLog = new fitnessLog(req.body);
    newLog.save((err, result) => {
        if(err) res.send(`Error: cannot create ${err.value}`);
        res.json(result);
    });
}

//Finds a log based on the given ID
exports.logs__searchLog = (req, res) => {
    fitnessLog.find({_id: req.params.fitnesslogid}, (err, result) => {
        if(err) res.send(`Error: cannot find ${err.value}`);
        res.json(result);
    });
}

//Updates the current log based on the given id
exports.logs__updateLog = (req, res) => {
    fitnessLog.findOneAndUpdate({_id: req.params.fitnesslogid}, req.body, {new:true}, (err, result) => {
        if(err) res.send(`Error: cannot update ${err.value}`);
        res.json(result);
    });
}

//Deletes the current log - this will be used so the user may clear their current log and start over
exports.logs__deleteLog = (req, res) => {
    fitnessLog.findOneAndDelete({_id: req.params.fitnesslogid}, (err, result) => {
        if(err) res.send(`Error: cannot delete ${err.value}`);
        res.json(result);
    });
}