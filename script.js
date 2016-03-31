$(function() {
  var twitchUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion", "comster404", "ungespielt"];
  var myString = "";
  
  for (var i = 0; i < twitchUsers.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/channels/' + twitchUsers[i] + '?callback=?', function(data) {
      if (data) {
        var thumbnailIMG = data.logo;
        if (!thumbnailIMG) {
          thumbnailIMG = 'smiley.jpg';
        }
        
        var displayName = data.display_name;
        if(!displayName) {
          displayName = data.message;
        }
        
        var currentStatus = data.game;
        if (currentStatus) {
          myString += '<p class="display-data online"><a href="' + data.url + '">';
        } else if (currentStatus === null) {
          currentStatus = 'Offline';
          myString += '<p class="display-data offline"><a href="' + data.url + '">';
        } else {
          currentStatus = 'No Account Data';
          thumbnailIMG = 'toilet.jpg';
          //need to have both link disabled
          myString += '<p class="display-data"><a href="#">';
        }
        
        myString += '<img src="' + thumbnailIMG + '" class=\"thumbnail\">';
        myString += displayName;
        myString += '<span class="status">' + currentStatus +'</span></p>';
        $('#main-text').html(myString);
        console.log(data);
        
      } else {
        console.log('ERR');
      }
    });
  }
});