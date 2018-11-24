
var user = prompt("Please enter your name:");
//default channel to join is general channel
var currentChannelId = "dbf646dc-5006-4d9f-8815-fd37514818ee";
//var	websocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=" + user);
var	websocket = new WebSocket("ws://inter-host.ca:3000/chatservice?username=" + user);

function updateUsername()
{
	document.getElementById("usernameText").innerHTML = user;
}

var connection = new ConnectionHandler();
	
websocket.onopen = function(){
	console.log("open");
	//join a channel right after the connection has been established
	joinChannel(currentChannelId);
}
//When the websocket receives something send the data over to the connection handler
websocket.onmessage = function(event){
	connection.websocketReceive(event);
}

websocket.onclose = function(){
	console.log("Connection closed")
}

function sendMessage()
{
	var text = document.getElementById("messageInput").value;
	document.getElementById("messageInput").value = "";
	if(text != ""){
	var message = new Message("onMessage", currentChannelId,text,"");
	var jSONmessage = JSON.stringify(message);
	websocket.send(jSONmessage);
	}
}

function getChannel(channelId){
	var message = new Message("onGetChannel", channelId);
	var JSONmessage = JSON.stringify(message);
	websocket.send(JSONmessage);
	currentChannelId = channelId;
}

function joinChannel(channelId)
{
	currentChannelId = channelId;
	var message = new Message("onJoinChannel",channelId, null, user, Date());
	var jSONmessage = JSON.stringify(message);
	websocket.send(jSONmessage);
	getChannel(channelId);
	console.log("joined Channel: " + channelId);
}

function leaveChannel(channelID)
{
	var message = new Message("onLeaveChannel", channelID, null, user, Date());
	var JSONmessage = JSON.stringify(message);
	websocket.send(JSONmessage);
	console.log("left channel: " + channelID);
}

function createChannel()
{
	var channelName = prompt("Please enter the channel name: ");
	var createChannelMessage = new Message("onCreateChannel", null, channelName, user, Date());
	var JSONCreateChannel = JSON.stringify(createChannelMessage);
	websocket.send(JSONCreateChannel);
}

