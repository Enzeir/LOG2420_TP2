


class ConnectionHandler {
	constructor(event)
	{}
	websocketReceive(event)
	{
					console.log(event);

		var msg = JSON.parse(event.data)
		var type = msg["eventType"];
			console.log(msg);
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
			default:
				console.log("Event type not recognized!");
				break;
		}
	}
/*
	<div class="row">
		<div class="name"> elie </div>
		<div class="receivedMsg"> hi my name is jeff </div>
		<div class="dateRcvd"> lundi 12.04:14</div>
	</div>
*/

	_onCreateChannel(msg)
	{
		console.log(msg);
	}
	_onJoinChannel(msg)
	{
		console.log(msg);
	}
	_onLeaveChannel(msg)
	{
		console.log(msg);
	}
	_updateChannelsList(msg)
	{
		console.log(msg);
	}
	_onError(msg)
	{
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