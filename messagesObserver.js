var weekDays = [ "DIM.","LUN.","MAR.", "MER.", "JEU.", "VEN.", "SAM."];

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
				if(newMessage && soundSet){
				var sound = new Audio("sound.mp3");
				sound.play();
				newMessage = false;
				}
			}
			var receivedMsg = document.createElement('div');
			setAttributes(receivedMsg,{"class": msgType});
			receivedMsg.innerText= msg["data"];
					
			var dateRcvd = document.createElement('div');
			setAttributes(dateRcvd,{"class": timeType});
			var time = new Date(msg["timestamp"]);
			var timeStamp = weekDays[time.getDay()] + " " + time.getDate() + ", " + time.getHours() + ":" + time.getMinutes();
			dateRcvd.innerText = timeStamp;
			
			row.appendChild(name);
			row.appendChild(receivedMsg);
			row.appendChild(dateRcvd);
			document.getElementById("chat").appendChild(row);
			var test =	document.getElementById("chat");
			test.scrollTop = test.scrollHeight;
		
    	}
	}
}
  
