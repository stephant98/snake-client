const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');
let connectionFunction = connect();


setupInput(connectionFunction);