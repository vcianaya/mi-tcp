var gps = require("./tcp-server");
var options = {
    'debug': false,
    'port': 5000,
    'device_adapter': "GT06"
}

var server = gps.server(options, function (device, connection) {
    device.on("connected", function (data) {
        console.log("Soy un nuevo dispositivo queriendo conectarme");
    });
    device.on("login_request", function (device_id, msg_parts) {

        console.log('¡Oye! Quiero comenzar a transmitir mi posición. Por favor Acéptame. Me llamo ' + device_id);

        this.login_authorized(true);

        console.log("Ok, " + device_id + ", eres aceptado!");

    });
});