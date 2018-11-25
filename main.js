
var user = prompt("Please enter your name:");
//default channel to join is general channel
//le generale n'a pas toujours le meme id d'apres mes tests
// j'ai set le currentChannelId dans updateChannelsList
var currentChannelId = "invalid";
var generalChannelId = "invalid";
//TODO: uncomment a websocket and comment the othere depanding on which one you want to use
//main server by the teachers
var	websocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=" + user);
var newMessage = false;
var soundSet = true;
//Alternate server by a student
//var	websocket = new WebSocket("ws://inter-host.ca:3000/chatservice?username=" + user);

function updateUsername()
{
	document.getElementById("usernameText").innerHTML = user;
}

var connection = new ConnectionHandler();
	
websocket.onmessage = function(event){
	connection.websocketReceive(event);
}

websocket.onclose = function(){
	alert("Connection closed")
}
websocket.onerror =  function(event){
	console.log(event);
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

function getChannel(channelId, joined)
{
	if(joined){
		console.log("getChannel: " + channelId);
		var message = new Message("onGetChannel", channelId);
		var JSONmessage = JSON.stringify(message);
		websocket.send(JSONmessage);
	}
}

function joinChannel(channelId)
{
	var message = new Message("onJoinChannel",channelId, null, user, Date());
	var jSONmessage = JSON.stringify(message);
	websocket.send(jSONmessage);
	console.log("joined Channel: " + channelId);
}

function leaveChannel(channelID)
{
	if(channelID == currentChannelId)
		currentChannelId = "invalid";
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

function changeSoundSetting(){
	if(soundSet)
		soundSet=false;
	else
		soundSet =true;
}