var dotenv = require("dotenv").config();
var keys = require("./keys.js");

if (process.argv[2] === "my-tweets") {
    tweetFunct()
}
else if (process.argv[2] === "spotify-this-song") {
    spotifyFunct()
}

else if (process.argv[2] === "movie-this") {
    movieFunct()
}

else if (process.argv[2] === "do-what-it-says") {
    doWhatFunct()
}


function tweetFunct() {
    //Twitter API
    // var client = new Twitter(keys.twitter);

    // request("fillInYourTwitterURL", function(error, response, body) {

    //   // If the request is successful (i.e. if the response status code is 200)
    //   if (!error && response.statusCode === 200) {

    //     // Response from Twitter API
    //     console.log("The movie's rating is: " + JSON.parse(body));
    //   }
    // });
}


function spotifyFunct() {
//Spotify API
var Spotify = require('node-spotify-api');

//You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);

var songTrack;

if (songTrack === null) {
    songTrack = "The Sign";
}
else {songTrack  = process.argv[3];}

spotify.search({ type: 'track', query: songTrack })
.then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
}

// , function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });


//OMDB API
var request = require("request");

var movieName;

if (movieName === null) {
    movieName = "Mr. Nobody";
}
else {movieName  = process.argv[3];}


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log(
          "Title " + JSON.parse(body).Title + 
          "\nRelease Year: " + JSON.parse(body).Year +
          "\nMovie Plot: " + JSON.parse(body).Plot
        );
    }});