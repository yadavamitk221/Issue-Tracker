const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const db = require('./config/mongoose');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes/index'));

app.listen(port, (error) => {
    if(error){
        console.log(`Error in running the server ${error}`);
        return;
    }
    console.log(`My server is up and running on PORT: ${port}`);
});