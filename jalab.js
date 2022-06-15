async function getBalance() {
    var address, wei, balance
    address = '0x105cb19ba40384a8f2985816DA7883b076969cA7';
    wei = promisify(cb => web3.eth.getBalance(address, cb))
    try {
        balance = web3.fromWei(await wei, 'ether')
        // document.getElementById("output").innerHTML = balance + " ETH";
    } catch (error) {
        // document.getElementById("output").innerHTML = error;
        balance =''
    }
}

// const web3 = new Web3.providers.HttpProvider(rpcURL)