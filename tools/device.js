util = require('util');
EventEmitter = require('events').EventEmitter;
util.inherits(Device, EventEmitter);
function Device(adapter, connection, gpsServer) {
    EventEmitter.call(this);
    var _this = this;

    this.connection = connection;
    this.server = gpsServer;
    this.adapter = adapter.adapter(this);

    this.uid = false;
    this.ip = connection.ip;
    this.port = connection.port;
    this.name = false;
    this.loged = false;
    console.log(this.connection);
}

module.exports = Device;
