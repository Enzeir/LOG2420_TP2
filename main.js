
 var user;

 
function myFunction() {
	var txt;
	user = prompt("Please enter your name:");

}
myFunction();

var	websocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=" + user);


function updateUsername()
{
	document.getElementById("usernameText").innerHTML = user;
}

var connection = new ConnectionHandler();
	
websocket.onopen = function(){
	console.log("open");
}
//When the websocket receives something send the data over to the connection handler
websocket.onmessage = function(event){
	connection.websocketReceive(event);
}

function inputTest()
{
	var text = document.getElementById("messageInput").value;
	document.getElementById("messageInput").value = "";
	if(text != ""){
	var message = new Message("onMessage","dbf646dc-5006-4d9f-8815-fd37514818ee",text,"");
	var jSONmessage = JSON.stringify(message);
	websocket.send(jSONmessage);
	}
}
function joinChannel(channelId)
{
	var message = new Message("onJoinChannel",channelId);
	var message2 = new Message("onGetChannel",channelId);
	var jSONmessage = JSON.stringify(message);
	var jSONmessage2 = JSON.stringify(message2);
	websocket.send(jSONmessage);
	websocket.send(jSONmessage2);
	
}

function test(){
		
	var now = new Date();
	var message = new Message("onJoinChannel","241071d2-7a2d-4070-9732-9094ca70c7cc","this is a test","",now);
	var test = JSON.stringify(message);

	websocket.send(test);
}
