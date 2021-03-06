// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

//setup web3 per https://web3.hashnode.com/what-is-web3js-an-introduction-into-the-web3js-libraries
const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/47d1365cc1d94d70b061dc255574a787";
const rpcURL2 ='wss://mainnet.infura.io/ws/v3/47d1365cc1d94d70b061dc255574a787';
const web3 = new Web3(rpcURL);

var balance = '' 
var blocknumber=''
// index page 
app.get('/', function(req, res) {

    const address = "0x105cb19ba40384a8f2985816DA7883b076969cA7"

    let result = Web3.utils.isAddress(address)

    let chk_sum_address = Web3.utils.toChecksumAddress(address)

    web3.eth.defaultAccount = chk_sum_address

    let def_account = web3.eth.defaultAccount

    web3.eth.getBalance(chk_sum_address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether')});
    //web3.isConnected()

    web3.eth.getBlockNumber(function (error, result) {
        if(!error) {
             blocknumber = result;
        }
      })

    // 
    // balance = getBalance()

    var mascots = [
        { name: 'Mainnet Ethereum Blance', organization: result, birth_year: blocknumber},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(process.env.PORT || 3000);
console.log('3000 is the magic port');
