const path = require('path');
const axios = require('axios');
require('dotenv').config();

exports.index = function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
};

exports.buscarTemperatura = function(req, res) {


};