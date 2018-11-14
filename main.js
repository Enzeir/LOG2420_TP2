

var websocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=TESTNAME");
var connection = new ConnectionHandler();

websocket.onopen = function(){
	console.log("open");
}
//When the websocket receives something send the data over to the connection handler
websocket.onmessage = function(event){
	connection.websocketReceive(event);
}

function test(){
	var now = new Date();
	var message = new Message("onGetChannel","dbf646dc-5006-4d9f-8815-fd37514818ee","this is a test","me",now);
	var test = JSON.stringify(message);
	exampleSocket.send(test);
}
