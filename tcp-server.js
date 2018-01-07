net = require('net');
var contador = 0;
net.createServer(function (connection) {

   

    connection.on('data', function (data) {
        contador = contador+1;
        console.log("TCP SERVER UP  "+contador);
        console.log(data);

    });

    // Remove the device from the list when it leaves
    // connection.on('end', function () {
    //     _this.devices.splice(_this.devices.indexOf(connection), 1);
    //     connection.device.emit('disconnected');
    // });

    // callback(connection.device, connection);

    // connection.device.emit('connected');
}).listen(5000);