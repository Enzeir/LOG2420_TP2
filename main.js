
var user = prompt("Please enter your name:");
var currentChannelId = "invalid";
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
	var message = new Message("onMessage", currentChannelId,text,"");
	var jSONmessage = JSON.stringify(message);
	websocket.send(jSONmessage);
	}
}

function joinChannel(channelId)
{
	currentChannelId = channelId;
	var message = new Message("onJoinChannel",channelId);
	var message2 = new Message("onGetChannel",channelId);
	var jSONmessage = JSON.stringify(message);
	var jSONmessage2 = JSON.stringify(message2);
	websocket.send(jSONmessage);
	websocket.send(jSONmessage2);
}

function leaveChannel()
{

}

function createChannel()
{
	var channelName = prompt("Please enter the channel name: ");
	var createChannelMessage = new Message("onCreateChannel", channelName);
	var JSONCreateChannel = JSON.stringify(createChannelMessage);
	var updateChannelList = new Message("updateChannelsList");
	var JSONUpdateChannel = JSON.stringify(updateChannelList);
	websocket.send(JSONCreateChannel);
	websocket.send(JSONUpdateChannel);
}

function test(){
		
	var now = new Date();
	var message = new Message("onJoinChannel","241071d2-7a2d-4070-9732-9094ca70c7cc","this is a test","",now);
	var test = JSON.stringify(message);

	websocket.send(test);
}
