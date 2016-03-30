$(function() {
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion"];
  var myString = "";
  
  for (var i = 0; i < twitchUsers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/channels/' + twitchUsers[i] + '?callback=?', function(data) {
      if (data) {
        var thumbnailIMG = data.logo;
        if (thumbnailIMG === null) {
          thumbnailIMG = 'smiley.jpg';
        }
        
        myString += '<p class="display-data"><a href="' +  data.url + '">' + '<img src="' + thumbnailIMG + '" class=\"thumbnail\">' + data.display_name + '</a></p>';
        $('#main-text').html(myString);
        console.log(data);
      } else {
        console.log('ERR');
      }
    });
  }
});