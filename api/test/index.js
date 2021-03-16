const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');


const ctr = require('./SingleDice.json');
const contract = new web3.eth.Contract(ctr.abi);

web3.eth.getBlockNumber(( err, res) => console.log(res));

web3.eth.getAccounts((err, accounts) => console.log(accounts.length));


contract.deploy({
	data: ctr.bytecode,
	arguments: [`${Math.ceil((Math.random() * 6))}`]
}).send({from: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'}, (e, hash) => console.log(e, hash));



const account = web3.eth.accounts.create();
console.log(account);
//web3.eth.personal.newAccount('test1234').then(e => console.log('--> ', e)).catch(err => console.log('--*', err));
