const io = require("socket.io").listen(3000);
// const server = io.listen(3000);

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        // socket en este caso es para quien envio; e io es para todos
        io.emit('chat message', msg);
    });

    socket.emit('test event', 'hola pendejo jajaja');
});