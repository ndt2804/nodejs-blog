const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphdb = require('express-handlebars');
const { extname } = require('path');

const route = require('./routes');

const db = require('./config/db');

//connect to db

db.connect();


const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//HTTP Logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', exphdb.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources', 'views'));


//route init
route(app);




app.listen(port, () => {console.log(`App listening on port ${port}`);});