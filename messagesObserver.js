
var messageObserver = {
    Messages: []
  , onMessage: function(msg) {
      this.Messages.push(msg)
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
  
}
  
