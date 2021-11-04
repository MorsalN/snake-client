//establishes a connection with the game server
const net = require('net');
const {IP, PORT} = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP, //IP address
    port: PORT //PORT number 
  });

  //interpret incoming data as text
  conn.setEncoding('utf-8');

  //getting data 
  conn.on('data', (data) => {
    console.log('Server says: ' + data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: RRR");
  });

  conn.on('connect', () => {
    console.log('Say Message: ');
    conn.write("Say: cupcakes");
  });



    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 200);

    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 300);

    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 350);

  

  return conn;
};

module.exports = { connect };

