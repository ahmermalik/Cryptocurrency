/**
 * Created by ahmermalik on 10/6/17.
 */
'use strict';

/**
 * Created by ahmermalik on 10/5/17.
 */

// <script type="text/javascript" src="https://unpkg.com/ccxt"></script>
const ccxt = require ('ccxt')

let exchange = new ccxt.kraken () // default id

// console.log(ccxt)


async function marketData() {

    // await exchange.loadMarkets()

    // let btcusd1 = exchange.markets['BTC/USD']     // get market structure by symbol
    // let btcusd2 = exchange.market ('BTC/USD')     // same result in a slightly different way
    //
    // let btcusdId = exchange.marketId ('BTC/USD')  // get market id by symbol
    //
    // let symbols = exchange.symbols                // get an array of symbols
    // let symbols2 = Object.keys (exchange.markets) // same as previous line
    //
    // console.log (exchange.id, symbols)            // print all symbols
    //
    // let currencies = exchange.currencies          // a list of currencies

    let bitfinex = new ccxt.bitfinex()
    await bitfinex.loadMarkets()

    console.log(bitfinex.markets['NEO/ETH'])                   // symbol → market (get market by symbol)
    //bitfinex.marketsById['XRPBTC']                // id → market (get market by id)

    //bitfinex.markets['BTC/USD']['id']             // symbol → id (get id by symbol)
    //bitfinex.marketsById['XRPBTC']['symbol']      // id → symbol (get symbol by id)
    var current_price = await (bitfinex.fetchTicker ('NEO/ETH'));
    console.log(current_price.ask);
}

marketData();