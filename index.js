const express = require('express');
const port = 8000;
const bodyParser = require('body-parser');

const app = express();

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//use body-parser
app.use(bodyParser.urlencoded({
    extended: false 
}));

//access static files
app.use(express.static('./assets'));

//use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});