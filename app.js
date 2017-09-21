const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cityMap = require('./modules/bd');



const app = express();



app.set('host', '*.localhost');
app.set('port', 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var cities = {};

cityMap(function(err, result){
  cities = result;
});

app.use(express.static('public'));

app.get('/', (req, res) => {

  let cityDomainName = req.hostname.replace(/\..*/,'');
  let city = cities.filter(item => item.cityEn.toLowerCase() === cityDomainName)[0];
  let noCity = cities[0];
  
  res.render('index', {
    title: 'Home',
    city: city || noCity,
    cities: cities,

  });
})

app.listen(app.get('port'), () => {
  console.log('  Press CTRL-C to stop\n');
});