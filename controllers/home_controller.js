module.exports.home = function(req, res){
    // return res.end('<h1> Express is up for todo list app!');
    return res.render('home', {
        title: "home" 
    });
}