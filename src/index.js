const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphdb = require('express-handlebars');
const { extname } = require('path');


const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
//HTTP Logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', exphdb.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});