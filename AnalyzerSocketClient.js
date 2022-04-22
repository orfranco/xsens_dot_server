// a class that represents the SocketClient of the Xsens Module.
class AnalyzerSocketClient {
    constructor(socketServerURL) {
        // Initialize Client:
        const io = require("socket.io-client");
        this.analyzerSocket = io(socketServerURL);
        this.analyzerSocket.on("connect", () => {
            console.log("SOCKET_CLIENT: Connected to SocketServer in " + socketServerURL);
        })
    }
    getSocket(){
        return this.analyzerSocket;
    }
    sendData(msg){
        this.analyzerSocket.emit("send-data", msg);

    }
}
module.exports = AnalyzerSocketClient;