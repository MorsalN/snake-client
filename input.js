const net = require('net');

let connection; // Stores the active TCP connection object.

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
}


const handleUserInput = function () {
  // on any input from stdin (standard input), output a "." to stdout
  const stdin = process.stdin;
  stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    process.stdout.write("Move: up");
  }

  if (key === 'a') {
    process.stdout.write('Move: left')
  }

  if (key === 's') {
    process.stdout.write("Move: down");
  }

  if (key === 'd') {
    process.stdout.write('Move: right')
  }

});
};

module.exports = { setupInput };