var gps = require("./tcp-server");
var options = {
    'debug': false,
    'port': 5000,
    'device_adapter': "GT06"
}

var server = gps.server(options, function (device, connection) {
    device.on("connected", function (data) {

        console.log("Soy un nuevo dispositivo conectado");
        return data;

    });
});