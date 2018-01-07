net = require('net');
Device = require('../mi-tcp/tools/device');
var _this = this;
var contador = 0;
_this.server = net.createServer(function (connection) {
    connection.device = new Device('GT06', connection, _this);   
    connection.on('data', function (data) {
        contador = contador+1;
        console.log("TCP SERVER UP  "+contador);
        console.log(data);
    });
}).listen(5000);