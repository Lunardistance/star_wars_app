var moviesJSON = require('../movies.json');


//home
exports.home = function(req, res){

    var movies = moviesJSON.movies;

    res.render('home', {
        title:"Star Wars Movies",
        movies:movies
    });
//  res.send("This is a server response on the home page")
};

//movie_single
exports.movie_single = function(req, res){
var episode_number=req.params.episode_number;
res.send("This is the page for episode" + episode_number);
};


//not found
exports.notFound = function(req,res){
    res.send("This is not the page that you are looking for")
};