
var channelObserver = {
   updateChannelsList: function(msg) {
    console.log("--------------------------");
    var myNode = document.getElementById("channels");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var channels = msg.data;
    console.log(channels);
    for (var i in channels) {
      var channel = document.createElement('div');
      setAttributes(channel,{"onclick": "getChannel('"+channels[i]["id"]+"',"+channels[i]["joinStatus"]+")"});
      if(i%2 == 0)
      {
        setAttributes(channel,{"class": "chatEvenChannelBoard"});
      }else
      {
        setAttributes(channel,{"class": "chatOddChannelBoard"});
      }
      var channelIcon = document.createElement('div');
      setAttributes(channelIcon,{"class": "channelIconBox", "onclick": "joinChannel('"+channels[i]["id"]+"')"});
      var iconType = "fas fa-plus";
      var name = channels[i]["name"];
      if(name  == "Général"){
        iconType = "fas fa-star";
        generalChannelId = channels[i]["id"];
        if(currentChannelId == "invalid")
          currentChannelId = channels[i]["id"];
      }
      else if(channels[i]["joinStatus"]){
        iconType = "fas fa-minus";
        setAttributes(channelIcon, {"onclick": "leaveChannel('"+channels[i]["id"]+"')" })
      }
      var Icon = document.createElement('i');
      if(iconType == "fas fa-plus")
      {
        setAttributes(Icon, {"style": "color: #5F9EA0"});
      }
      setAttributes(Icon,{"class": iconType});
      var channelName = document.createElement('p');
      channelName.innerText = name; 
      channelIcon.appendChild(Icon);
      channel.appendChild(channelIcon);
      channel.appendChild(channelName);
      document.getElementById("channels").appendChild(channel);
      document.getElementsByClassName("channelIconBox")[0].removeAttribute("onclick");
  }
}
,
  onGetChannel : function(msg){
    var myNode = document.getElementById("chat");
    currentChannelId = msg["data"]["id"]
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var test = msg.data["messages"];
    for (var i in test) {
      messageObserver.onMessage(test[i]);
    }
    document.getElementById("groupeActif").innerHTML = msg["data"]["name"];

  }
}
