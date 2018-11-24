
class ConnectionHandler {
	constructor(event)
	{}
	websocketReceive(event)
	{
		var msg = JSON.parse(event.data)
		var type = msg["eventType"];
		switch(type){
			case "onMessage":
				messageObserver.onMessage(msg)
				break;
			case "onCreateChannel":
				this._onCreateChannel(msg);
				break;
			case "onJoinChannel":
				this._onJoinChannel(msg);
				break;
			case "onLeaveChannel":
				this._onLeaveChannel(msg);
				break;
			case "updateChannelsList":
				channelObserver.updateChannelsList(msg);
				break;
			case "onError":
				this._onError(msg);
				break;
			case "onGetChannel":
				channelObserver.onGetChannel(msg)
				break;			
			default:
				console.log(msg);
				console.log("Event type not recognized!");
				break;
		}
	}

	_onCreateChannel(msg)
	{
		var channelName = prompt("Please enter the channel name: ");
		var createChannelMessage = new Message("onCreateChannel", null, channelName, user, Date());
		var JSONCreateChannel = JSON.stringify(createChannelMessage);
		websocket.send(JSONCreateChannel);
		console.log("Creating channel: " + channelName);
	}
	_onJoinChannel(msg)
	{
		console.log(msg);
	}
	_onLeaveChannel(msg)
	{
		console.log(msg);
	}
	_onError(msg)
	{
		alert(msg["data"]);
		console.log(msg);
	}
}
function setAttributes(el, attrs)
{
    for (var key in attrs)
    {
        el.setAttribute(key, attrs[key]);
    }
}