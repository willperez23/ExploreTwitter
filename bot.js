console.log('bot starting');

var Twit = require('twit');
var config = require('./config');
console.log(config);
var T = new Twit(config)
/*var pars = {
    q: 'fire',
    count: 2
}

T.get('search/tweets', pars, gotData)
function gotData (err, data, response) {
    var tweets = data.statuses;
    for (var i=0; i< tweets.length; i++){
        console.log(tweets[i].text)
    }
}
*/
var tweet = {
    status: 'Test Tweet (1): Hello World from Anaheim, CA!'
}
T.post('statuses/update', tweet, tweeted);
function tweeted (err, data, response) {
    if(err){
        console.log(data);
    }
    else{
        console.log('It worked!');
  }
}




  
