const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
//theme
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// use morgan
app.use(morgan('combined'));
const port = 3000;

// Router
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});



//app.listen(3000);
app.listen(port, () => console.log(`Hello ${port}` ));