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



app.use(express.static(path.join(__dirname, 'public')));






const ccxt = require ('ccxt')

var current_price
var current_volume
async function marketData() {



    let bittrex = new ccxt.bittrex()
    await bittrex.loadMarkets()

    //console.log(bittrex.markets['NEO/ETH'])                   // symbol → market (get market by symbol)
    //console.log(bittrex.markets['NEO/BTC'])
    console.log("===============================================")

    current_price = await (bittrex.fetchTicker ('NEO/ETH'));
    current_volume = await (bittrex.fetch_l2_order_book('NEO/ETH', {
        'limit_bids': 5, // max = 50
        'limit_asks': 5, // may be 0 in which case the array is empty
        'group': 1, // 1 = orders are grouped by price, 0 = orders are separate
    }));

    console.log("===============================================")
    // console.log(current_price.ask)
    //console.log(bittrex.markets) //how to find the symbols for all the pairs on bitfinex.

}



//define routes
app.get('/', function (req,res) {

    res.render('index')
});

app.get('/api', function(req, res) {
    console.log('get api')
    marketData();

    setTimeout(() => {
            var context = {current_price : current_price, current_volume: current_volume};
            res.send(context)}
        , 1000);
})

app.listen(1337, function() {
    console.log('ready on port 1337')

}); //localhost:4000

