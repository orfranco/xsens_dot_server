const io = require("socket.io-client")
const socket = io('http://localhost:3001')
socket.on("connect", ()=> {
    console.log("connected to server!")
})

const readline = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
})
readline.question('', msg =>{
    socket.emit("send-message", msg)})