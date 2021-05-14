const express = require('express');
const router = express.Router();

router.get('/gardenmoisture',function(req,res){
    res.send({type: 'GET'});
});

router.post('/gardenmoisture', function(req, res){
    res.send({
        type: 'POST',
        name: req.body.name,
        group: req.body.group,
        moisture: req.body.moisture
    });
});

router.put('/gardenmoisture/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/gardenmoisture/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;