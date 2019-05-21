
    var socket = io('');
    function send() {
        var message = document.getElementById('m').value;
        socket.emit('chat message', message);
        document.getElementById('m').value = '';
        return false;
    }

    socket.on('chat message', function (msg) {
        var ul = document.getElementById('messages');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(msg));
        ul.appendChild(li);
        window.scrollTo(0, document.body.scrollHeight);
    });
