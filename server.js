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

// index page 
app.get('/', function(req, res) {

    const address = "0x105cb19ba40384a8f2985816DA7883b076969cA7";
    var balance = '' // Your account address goes here
    web3.eth.getBalance(address, (err, wei) => {
      balance = web3.utils.fromWei(wei, 'ether')
    });

    var mascots = [
        { name: 'Mainnet Ethereum Blance', organization: balance, birth_year: 2012},
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
