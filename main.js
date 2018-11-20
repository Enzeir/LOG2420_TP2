
 var user;

function myFunction() {
    var txt;
    user = prompt("Please enter your name:");

}
myFunction() ;
var websocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username="+user);
var connection = new ConnectionHandler();
	
websocket.onopen = function(){
	console.log("open");
}
//When the websocket receives something send the data over to the connection handler
websocket.onmessage = function(event){
	connection.websocketReceive(event);
}

function test(){
		console.log(user);
	var now = new Date();
	var message = new Message("onMessage","dbf646dc-5006-4d9f-8815-fd37514818ee","this is a test","",now);
		console.log(message);
	var test = JSON.stringify(message);
			console.log(test);

	websocket.send(test);
}
