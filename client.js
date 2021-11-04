//establishes a connection with the game server
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', //IP address
    port: 50541 //PORT number 
  });

  //interpret incoming data as text
  conn.setEncoding('utf-8');

  //getting data 
  conn.on('data', (data) => {
    console.log('Server says: ' + data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: RRR")
  })

  return conn;
};

module.exports = connect;

