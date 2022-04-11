const http = require('http');
const net = require("net");
const path = require('path')

// 1. Të vendosen variabla te cilat përmbajnë numrin e portit (numri i portit të jetë i çfarëdoshëm) dhe IP adresën

const numberPort = 8000;
const ipAddress = '127.0.0.1'
const server = net.createServer(function (socket) {

    debugger;

    socket.write('Echo server\r\n');
    socket.pipe(socket);
});

// 2. Të jetë në gjendje të dëgjojë (listen) të paktën të gjithë anëtaret e grupit

app.use('/static', express.static(path.join(__dirname, 'public')))
server.listen(numberPort, ipAddress);
console.log('Serveri eshte duke degjuar: ' + ipAddress + ':' + numberPort);


const clientWrite = new net.Socket();
clientWrite.connect(numberPort, ipAddress, function() {
    console.log('Connected client write ');
    clientWrite.write('Hello, server! I am client write');
});

clientWrite.on('data', function(data) {
    console.log('Client write received: ' + data);
    clientWrite.destroy(); // kill client after server's response
});

clientWrite.on('close', function() {
    console.log('Client write Connection closed');
});


