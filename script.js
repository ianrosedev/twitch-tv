//$(function() {
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion"];
  
var myString = "";
  
  for (var i = 0; i < twitchUsers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + twitchUsers[i] + '?callback=?',  function(data) {
      if (data.stream === null) {
        myString += '<p>' + data._links.channel +'</p><br>';
        console.log(data);
        console.log('not online')
        $('#main-text').html(myString);
      } else {
        myString += '<p>' + data.stream.game +'</p>';
        myString += '<p>' + data._links.channel +'</p><br>';
        console.log(data);
        console.log(data.stream.game);
        $('#main-text').html(myString);
      }
    });
  }
//});