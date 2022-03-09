const io = require("socket.io")(3001)

io.on('connection', function (socket) {
    console.log("User connected:"+ socket.id);
    socket.on('send-message', message =>{
        io.emit('recieve-message', message)
    })
});


