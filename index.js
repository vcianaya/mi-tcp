'use-strict'
var gps = require("./tcp-server");
var app = require('./http-server');

var options = {
    'debug': false,
    'port': 5000,
    'device_adapter': "GT06"
}
var contador = 0;

var server = gps.server(options, function (device, connection) {
    device.on("connected", function (data) {
        console.log("Soy un nuevo dispositivo queriendo conectarme");
    });
    device.on("login_request", function (device_id, msg_parts) {
        console.log('¡Oye! Quiero comenzar a transmitir mi posición. Por favor Acéptame. Me llamo ' + device_id);
        // aqui consultar a la base de datos para autorizar transmision
        this.login_authorized(true);
        console.log("Ok, " + device_id + ", eres aceptado!");
    });
    device.on("ping", function (data) {
        contador = contador + 1;       
        app.emmit_socket({latitude:data.latitude, longitude:data.longitude});
        console.log("Estoy aquí: " + data.latitude + ", " + data.longitude + " (" + this.getName() + ")" + "    NRO MESNAJE:  " + contador);        
        return data;
    });
    
});
// 01->LOGIN
// 12->PING
//SERVER HTTP
var serv=app.listen(3000,()=>{
    console.log("EL SERVIDOR LOCAL CON NODE Y EXPRESS ESTA CORRIENDO");        
});