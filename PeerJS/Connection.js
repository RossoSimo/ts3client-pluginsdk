

var peer = new Peer(options={
    host:'https://tsplugin.herokuapp.com/'
});

function start_stream() {
    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
      });
}

function conn(){
    let id = document.getElementById("ConnID").value;
    var conn = peer.connect(id); // Passare id tramite ts
}

function _send(msg) {
    conn.send(msg)
}

function disc() {
    peer.disconnect();
}
