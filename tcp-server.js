net = require('net');
net.createServer(function (connection) {

   

    connection.on('data', function (data) {
        console.log("TCP SERVER UP");
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