const express = require('express');
const router = express.Router();

const GardenMoisture = require('../models/gardenmoisture');

router.get('/gardenmoistures',function(req,res, next){
    GardenMoisture.find({}).then(function(gardenmoistures){
        res.send(gardenmoistures);
    }).catch(next);
});

router.post('/gardenmoistures', function(req, res, next){
    var betterEntry = req.body;
    betterEntry.entrydate = new Date();
    GardenMoisture.create(req.body).then(function(gardenmoisture){
        res.send(gardenmoisture);
    }).catch(next);
});

router.put('/gardenmoistures/:id', function(req, res, next){
    GardenMoisture.findOneAndUpdate({_id: req.params.id},req.body).then(function(gardenmoisture){
        GardenMoisture.findOne({_id: req.params.id}).then(function(gardenmoisture){
            res.send(gardenmoisture);
        });
    });
});

router.delete('/gardenmoistures/:id', function(req, res, next){
    GardenMoisture.findOneAndDelete({_id: req.params.id}).then(function(gardenmoisture){
        res.send(gardenmoisture);
    });
});

module.exports = router;