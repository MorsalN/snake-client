//establishes a connection with the game server
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', //IP address
    port: 50541 //PORT number 
  });

  //interpret incoming data as text
  conn.setEncoding('utf-8');

  conn.on('data', (data) => {
    console.log('Server says: ' + data);
  });

  return conn;
};

module.exports = connect;
