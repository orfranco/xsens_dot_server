// a class that represents the SocketServer that connects Xsens Module and DataAnalyzer
// Module clients.
class AnalyzerSocketServer {
    constructor(portNum) {
        // Initialize Server:
        const socketServer = require("socket.io")(portNum);
        socketServer.on('connection', function (socket) {
            console.log("SOCKET_SERVER: User connected:" + socket.id);
            socket.on('send-data', msg => {
                socketServer.emit('recieve-data', msg)
            })
        });
    }
}
module.exports = AnalyzerSocketServer;

