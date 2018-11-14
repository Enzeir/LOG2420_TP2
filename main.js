


var exampleSocket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=TESTNAME");
exampleSocket.onopen = function(event){
	console.log("open");
}
exampleSocket.onmessage = function(event){
			console.log("----sgs---------");
	var msg = JSON.parse(event.data);
	console.log(msg);
}
function test(){
	var now = new Date();
	var message = new Message("onGetChannel","dbf646dc-5006-4d9f-8815-fd37514818ee","this is a test","me",now);
	//var message =  {"eventType":"onMessage","channelId":"dbf646dc-5006-4d9f-8815-fd37514818ee","data":"this is a test","sender":"me","timestamp":now};
	var test = JSON.stringify(message);
	exampleSocket.send(test);
}
