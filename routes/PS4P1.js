var express = require('express');
var router = express.Router();

let config= require('../config/ps4')

const request = require("request");

const getKanyequotes = new Promise(function (resolve, reject) {

const options = {
    method: 'GET',
    url: config.url ,
    headers:
        { 'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'accept-encoding': 'gzip, deflate',
            Host: 'api.kanye.rest',
            'Postman-Token': 'df3cb4a1-98b1-42d7-9c3a-6670e9a1be6c,86404319-e8a6-42dd-9441-c94d98f6d9d5',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            'User-Agent': 'PostmanRuntime/7.13.0',
            'Content-Type': 'application/x-www-form-urlencoded' } };

    request(options,(error, response, body) => {
        if (error)

            reject (new Error(error));
        else {
         console.log (JSON.parse(body).quote);
        resolve(JSON.parse(body).quote)

        }

})

})


/* GET home page. */
router.get('/', function(req, res, next) {
    getKanyequotes.then(val => {
        res.render('PS4_P3', { title: val });
    })


});

module.exports = router;