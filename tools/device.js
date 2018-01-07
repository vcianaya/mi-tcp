util = require('util');
EventEmitter = require('events').EventEmitter;
util.inherits(Device, EventEmitter);
function Device(adapter, connection, gpsServer) {
    EventEmitter.call(this);
    console.log('llegue aqui');
}

module.exports = Device;
