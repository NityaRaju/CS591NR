var express = require('express');
var router = express.Router();

let config= require('../config/ps4')

const request = require("request");
var db= require('../mongo/mongo');

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

let recieveDB = false;

router.get('/', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('quotes').findOne({quote: req.params.quote}, (err, docs) => {
        if (err) {
            return next(err);
        } else {
            if (result == null){
                let resolver = new Promise((resolve, reject) => {
                    request(url, (error, response, body) => {
                        if (error) reject(new Error(error));
                        else resolve(JSON.parse(body));
                    });
                });

                resolver.then(val => {
                        return new Promise((resolve, reject)=> {
                            request(
                                config.url2 + config.url3,

                                (error, response, body) => {
                                    if (error) reject(new Error(error));
                                    else resolve(JSON.parse(body));
                            }
                            );
                        });
                    })
                    .then(val => {
                        recieveDB = false;
                        value= val;
                        mongo.collection('quotes').insertOne({ quote: req.headers.data, obj:val.results });
                        res.send({ quote: val.results, recieveDB: recieveDB});
                    });
            } else{
                recieveDB = true;
                console.log(`Output: ${result.obj}`);
                res.send({
                    quote: result.obj,
                    recieveDB: recieveDB
                })
            }
        }

    })

    })

router.get('/bare', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('KQuoteDB').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});

// const getKanyequotes = new Promise(function (resolve, reject) {
//
//
// const options = {
//     method: 'GET',
//     url: config.url ,
//     headers:
//         { 'cache-control': 'no-cache',
//             Connection: 'keep-alive',
//             'accept-encoding': 'gzip, deflate',
//             Host: 'api.kanye.rest',
//             'Postman-Token': 'df3cb4a1-98b1-42d7-9c3a-6670e9a1be6c,86404319-e8a6-42dd-9441-c94d98f6d9d5',
//             'Cache-Control': 'no-cache',
//             Accept: '*/*',
//             'User-Agent': 'PostmanRuntime/7.13.0',
//             'Content-Type': 'application/x-www-form-urlencoded' } };
//
// //     //request(options,(error, response, body) => {
// //       //  if (error)
// // /
// //             reject (new Error(error));
// //         else {
// //          console.log (JSON.parse(body).quote);
// //         resolve(JSON.parse(body).quote)
// //
// //         }
//
// })
//
// })


// /* GET home page. */
// router.get('/', function(req, res, next) {
//     getKanyequotes.then(val => {
//         res.send( { quote: val, });
//     })
//
//
// });

module.exports = router;
