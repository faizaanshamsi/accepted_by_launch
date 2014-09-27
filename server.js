// The Twitter variable is an object given to us by the node tweet stream library. It takes four arguments, as indicated by the t variable.
'use strict';

require('locus');
var Twitter = require('node-tweet-stream')
var t = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    token: process.env.TOKEN,
    token_secret: process.env.TOKEN_SECRET
  })

// the syntax of the .on method is below. .on is a listener in javascript for the tweet event. the tweet event was defined by the node tweet stream library, and whn the listener listens to it, it will execute the function tweet. which takes the arguments... ? The console.log command puts to the console, which was handy for debugging.

t.on('tweet', function (tweet) {
  console.log("User:", tweet["user"]["name"], "(" + tweet["user"]["screen_name"] + ")", "says,", tweet["text"], tweet["extended_entities"]["media"][0]["media_url"] );
})

t.on('error', function (err) {
  console.log('Oh no')
})

t.track('accepted_by_launch')

// 10 minutes later
// t.untrack('pizza')
