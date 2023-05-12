const mongoose = require('mongoose');
const express = require('express');
const connection = require('./connection');
const dataModel = require('./data_model');

const app = express();
app.use(express.json());



connection.app.post('/create_log',async (req, res) => {

    var saveData = {};
    saveData.data = req.body; 
    saveData.ip = req.headers['x-forwarded-for'] ?? req.ip ??  '0.0.0.0'; 
    var data = await dataModel.create(req.body);
    var savedData = await data.save();
    return res.send({status: true, message : `Done Bro..`, data : saveData});

});
