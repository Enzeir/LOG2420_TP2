class ConnectionHandler {
	constructor(event)
	{}
	websocketReceive(event)
	{
		var msg = JSON.parse(event.data)
		var type = msg["eventType"];
		switch(type){
			case "onMessage":
				newMessage = true;
				messageObserver.onMessage(msg)
				break;
			case "updateChannelsList":
				channelObserver.updateChannelsList(msg);
				getChannel(currentChannelId, true);
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