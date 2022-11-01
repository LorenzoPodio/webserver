require('dotenv').config();
const express = require('express');
var hbs = require('hbs');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Lorenzo Podio',
    titulo: 'Curso de Node'
  });
});
app.get('/generic', (req, res) => {
  res.render('generics', {
    nombre: 'Lorenzo Podio',
    titulo: 'Curso de Node'
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Lorenzo Podio',
    titulo: 'Curso de Node'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 