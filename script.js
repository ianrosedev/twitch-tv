$(function() {
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion"];
  
  for (var i = 0; i < twitchUsers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + twitchUsers[i] + '?callback=?',  function(data) {
      var returnHTML = '';
      if (data.stream === null) {
        returnHTML += '<p>' + twitchUsers[i] + ' offline</p>';
        console.log(data);
        console.log('not online');
      } else {
        returnHTML += '<p>' + twitchUsers[i] + ' ' + data.stream.game + '</p>';
        console.log(data);
        console.log(data.stream.game);
      }
     
    });
  }
  
   $('#main-text').html(returnHTML);
});