


var exampleSocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=TESTNAME");
exampleSocket.onopen = function(event){
	console.log("open");
}
exampleSocket.onmessage = function(event){
			console.log("----sgs---------");
	var msg = JSON.parse(event.data);
	console.log(msg);
}

