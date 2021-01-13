const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: SET');
    //conn.write('Move: up')
    
  })

  

  

  conn.on('data', (data) => {
    console.log(data);
  })

  
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {connect};