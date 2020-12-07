

var peer = new Peer(null,{
    host:'tsplugin.herokuapp.com',
    debug: 2,
    port: 80
});
let lastPeerId;
peer.on('open', function (id) {
    // Workaround for peer.reconnect deleting previous id
    if (peer.id === null) {
        console.log('Received null id from peer open');
        peer.id = lastPeerId;
    } else {
        lastPeerId = peer.id;
    }

    console.log('ID: ' + peer.id);
});

function start_stream() {
    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
      });
}

function conn(){
    let id = document.getElementById("ConnID").value;
    var conns = peer.connect(id); // Passare id tramite ts
}

function _send(msg) {
    conn.send(msg)
}

function disc() {
    peer.disconnect();
}
