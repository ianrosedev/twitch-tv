//$(function() {
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion"];
  
  var myString = "";
  
  for (var i = 0; i < twitchUsers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + twitchUsers[i] + '?callback=?',  function(data) {
      if (data.stream === null) {
        myString += '<h1>' + data.stream +'</h1><br>';
        console.log(data);
        console.log('not online');
        $('#main-text').html(myString);
      } else {
        myString += '<h1>' + data.stream.game +'</h1><br>';
        console.log(data);
        console.log(data.stream.game);
        $('#main-text').html(myString);
      }
    });
    console.log(twitchUsers[i]);
  }
//});