const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const CITY_MAP = require('./bd');
const noCity = CITY_MAP.filter(item => item.domainName === "default")[0];
const cities = CITY_MAP.filter(item => item.domainName !== "default");

const app = express();

app.set('host', '*.localhost');
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.get('/', (req, res) => {

  const cityDomainName = req.hostname.replace(/\..*/,'');
  const city = CITY_MAP.filter(item => item.domainName === cityDomainName)[0];

  res.render('index', {
    title: 'Home',
    city: city || noCity,
    cities: cities
  });
})

app.listen(app.get('port'), () => {
  console.log('  Press CTRL-C to stop\n');
});