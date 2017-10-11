'use strict';

/**
 * Created by ahmermalik on 10/5/17.
 */




var express = require('express');
var path = require('path');
var app = express();

//configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))
//use middleware

//define routes
app.get('/', function (req,res) {
    res.render('index');

});



app.listen(1337, function() {
    console.log('ready on port 1337')

}); //localhost:4000







//let bittrex = new ccxt.bittrex();

// app.get('/api/my-route', function(req, res){
//     var someVar = req.query.some_var; //just an example
//
//     console.log(someVar);
//     var current_price = await (bittrex.fetchTicker ('NEO/ETH'));
//
//     res.send(current_price);
// })

// app.get('/api/my-route', function(req, res){
//     var someVar = req.query.some_var; //just an example
//
//     console.log(someVar);
//     // var current_price = await (bittrex.fetchTicker ('NEO/ETH'));
//
//     res.send('hello world');
// })
//
//









const ccxt = require ('ccxt')


async function marketData() {



    let bittrex = new ccxt.bittrex()
    await bittrex.loadMarkets()

    console.log(bittrex.markets['NEO/ETH'])                   // symbol → market (get market by symbol)
    //console.log(bittrex.markets['NEO/BTC'])
    console.log("===============================================")

    var current_price = await (bittrex.fetchTicker ('NEO/ETH'));


    console.log("===============================================")
    //console.log(bittrex.markets) //how to find the symbols for all the pairs on bitfinex.

}

marketData();