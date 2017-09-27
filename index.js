var http = require('http');
var Bot = require('@kikinteractive/kik');
var request = require('request')
var answer;
 
var bot = new Bot({
 
    username: 'master_alfred',
    apiKey: process.env.API_KEY, 
    baseUrl: process.env.HEROKU_URL
 
});
 
bot.updateBotConfiguration();
 
bot.onTextMessage((message) => {
 
    request('http://api.asksusi.com/susi/chat.json?q=' + encodeURI(query), function(error, response, body) {
 
        if (!error && response.statusCode == 200) {
 
            answer = JSON.parse(body).answers[0].actions[0].expression;
 
        } else {
 
            answer = "Oops, Looks like Susi is taking a break, She will be back soon";
 
        }
 
    });
 
    message.reply(answer)
});
 
http.createServer(bot.incoming()).listen(process.env.PORT || 8080)
