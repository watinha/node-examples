import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 3000 });
let conns = [];

server.on('connection', (socket) => {
  console.log(`Nova conexão... ${conns.length}`);
  conns.push(socket);

  socket.on('close', () => {
    console.log(`Fechando conexão... ${conns.indexOf(socket)}`);
    conns = conns.filter((s) => s === socket);
  });

  socket.on('message', (msg) => {
    console.log(`${conns.indexOf(socket)}: ${msg}`);

    conns.forEach((conn) => {
      conn.send(`${conns.indexOf(socket)}: ${msg}`);
    });
  });

});

