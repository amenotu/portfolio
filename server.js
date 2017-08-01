const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8888;

//configure the server to use bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//serve static assets
app.use(express.static(__dirname + '/client'));

// Handles all routes to avoid getting not found error, used later for react-router
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
});

//start server
app.listen(port);
console.log('Website is live at port: ', port);