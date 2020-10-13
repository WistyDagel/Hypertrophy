let express = require('express');
let app = express();
let port = 3001;

let mongoose = require('mongoose');
let bodyParser = require('body-parser');

//Prevents cors errors from occuring between the front and back end
const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

//Establish the connection with the MongoDB database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/HypertrophyDB');

//Parses any JSON data that be posted within the controllers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//This allows us to route between multiple pages on the back end 
const routes = require('./routes');
routes(app);

//Establishes the port number for the express app
app.listen(port, () => console.log(`Server is running on port ${port}`))