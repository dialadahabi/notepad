const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor function
const web3 = new Web3(ganache.provider()); //instance
const { interface, bytecode } = require('../compile');

let fetchedAccounts;
let notepad;
let updatedNote;
const INITIAL_NOTE = 'Test'


beforeEach(async() => {
	// List of all accounts
	fetchedAccounts = await web3.eth.getAccounts();

	// Use an account to deploy contract
	notepad = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: [INITIAL_NOTE]}).send({from: fetchedAccounts[0], gas: '1000000'});
});


describe('notepad', () => {
	it('deploys contract', () =>{
		//console.log(notepad);
		assert.ok(notepad.options.address);
	});

	it('has default note', async() =>{
		const note = await notepad.methods.note().call();
		assert.equal(note, INITIAL_NOTE);
	});

	it('can modify note', async()=>{
		updatedNote = 'Diala'
		await notepad.methods.setNote(updatedNote).send({from: fetchedAccounts[0]});
		const note = await notepad.methods.note().call();
		assert.equal(note, updatedNote);
	})
});

// class Animal {
// 	eat(){
// 		return 'Eating';
// 	}
// 	walk(){
// 		return 'walking';
// 	}
// }

// let animal;

// beforeEach(() => {
// 	animal = new Animal();
// });

// describe('Animal Class', () =>{
// 	it('should return eating', () => {
// 		assert.equal(animal.eat(), 'Eating');
// 	});
// 	it('should return walking', () => {
// 		assert.equal(animal.walk(), 'walking');
// 	});
// });

