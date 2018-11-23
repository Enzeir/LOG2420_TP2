
var messageObserver = {
   
   onMessage: function(msg) {
		var row = document.createElement('div');
		if(currentChannelId == msg["channelId"]){
			setAttributes(row,{"class": "row"});
			var msgType = "sentMsg";
			var timeType = "dateSent";
			var name = document.createElement('div');
			if (msg["sender"] != user){
				msgType = "receivedMsg";
				timeType = "dateRcvd";
				setAttributes(name,{"class": "name"});
				name.innerText= msg["sender"];
			}
			
			var receivedMsg = document.createElement('div');
			setAttributes(receivedMsg,{"class": msgType});
			receivedMsg.innerText= msg["data"];
					
			var dateRcvd = document.createElement('div');
			setAttributes(dateRcvd,{"class": timeType});
			dateRcvd.innerText= msg["timestamp"];
			
			row.appendChild(name);
			row.appendChild(receivedMsg);
			row.appendChild(dateRcvd);
			document.getElementById("chat").appendChild(row);
    }
	}
}
  
