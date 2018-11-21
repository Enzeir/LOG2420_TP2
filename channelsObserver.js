
var channelObserver = {
   updateChannelsList: function(msg) {
    console.log("--------------------------");
    var myNode = document.getElementById("channels");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    console.log(msg);
    var channels = msg.data;
    for (var i in channels) {
      var channel = document.createElement('div');
      setAttributes(channel,{"class": "chatChannelBoard", "onclick": "joinChannel('"+channels[i]["id"]+"')"});
      var channelIcon = document.createElement('div');
      setAttributes(channelIcon,{"class": "channelIconBox"});
      var iconType = "fas fa-plus";
      var name = channels[i]["name"] ;
      if( name  == "Général"){
        iconType = "fas fa-star";
        console.log(channels[i]["name"]);
      }
      else if(channels[i]["joinStatus"]){
        iconType = "fas fa-minus";
      }
      var Icon = document.createElement('i');
      setAttributes(Icon,{"class": iconType});
      var channelName = document.createElement('p');
      channelName.innerText = name; 
      channelIcon.appendChild(Icon);
      channel.appendChild(channelIcon);
      channel.appendChild(channelName);
      document.getElementById("channels").appendChild(channel);
  }
}
}
