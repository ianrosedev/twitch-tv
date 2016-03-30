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
        
        var currentStatus = data.game;
        if (currentStatus) {
          currentStatus = currentStatus;
          myString += '<p class="display-data online"><a href="' + data.url + '">';
        } else if (currentStatus === null) {
          currentStatus = 'Offline';
          myString += '<p class="display-data offline"><a href="' + data.url + '">';
        } else {
          currentStatus = '404';
          myString += '<p class="display-data"><a href="' + data.url + '">';
        }
        
        myString += '<img src="' + thumbnailIMG + '" class=\"thumbnail\">';
        myString += data.display_name + '</a>';
        myString += '<span class="status">' + currentStatus +'</span></p>';
        $('#main-text').html(myString);
        console.log(data);
        
      } else {
        console.log('ERR');
      }
    });
  }
});