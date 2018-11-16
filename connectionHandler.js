


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
				this._onMessage(msg)
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
				this._updateChannelsList(msg);
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
	_onMessage(msg)
	{

		var row = document.createElement('div');
		setAttributes(row,{"class": "row"});
		
		var name = document.createElement('div');
		setAttributes(name,{"class": "name"});
		name.innerText= msg["sender"];
		
		var receivedMsg = document.createElement('div');
		setAttributes(receivedMsg,{"class": "receivedMsg"});
		receivedMsg.innerText= msg["data"];
				
		var dateRcvd = document.createElement('div');
		setAttributes(dateRcvd,{"class": "dateRcvd"});
		dateRcvd.innerText= msg["timestamp"];
		
		row.appendChild(name);
		row.appendChild(receivedMsg);
		row.appendChild(dateRcvd);
		document.getElementById("chat").appendChild(row);
		console.log(msg);
	}
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