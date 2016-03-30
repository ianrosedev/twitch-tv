//$(function() {
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion"];
  
var myString = "";
  
  for (var i = 0; i < twitchUsers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + twitchUsers[i] + '?callback=?', function(data) {
      if (data) {

        $.getJSON(data._links.channel + '?callback=?', function(data) {
          myString += '<p><a href="' + data.url + '">' + data.display_name + '</a></p><br>';
          $('#main-text').html(myString);
          console.log(data);
        });
        
        $('#main-text').html(myString);
        
      } else {
        console.log('ERR');
      }
    });
  }
//});