
var channelObserver = {
   updateChannelsList: function(msg) {
    console.log("--------------------------");
    console.log(msg);
    var channels = msg.data;
    for (var i in channels) {
      var channel = document.createElement('div');
      setAttributes(channel,{"class": "chatChannelBoard"});
      var channelIcon = document.createElement('div');
      setAttributes(channelIcon,{"class": "channelIconBox"});
      var iconType = "fas fa-plus";
      name = channels[i]["name"] ;
      if( name== "Général"){
        iconType = "fas fa-star";
        console.log(channels[i]["name"]);
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
/*
<div class="chatChannelBoard">
    <div class="channelIconBox">
        <i class="fas fa-star"></i>
    </div>
    <p>General</p>
</div>
*/