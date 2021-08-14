const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.title = 'Juno Jo Website';

app.get('/', (request, response) => {
  response.render('index', {
    title: 'Homepage'
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    title: 'About Juno Jo',
    message: 'Olá Mundo'
  });
});

app.get('/works', (request, response) => {
  response.render('works', {
    title: 'Works of Juno Jo',
    message: 'Olá Mundo',
    description: `
    lorem ${title}
    `
  });
});

app.get('/photos', (request, response) => {
  response.render('photos', {
    title: 'Photos of Juno Jo',
    message: 'Olá Mundo'
  });
});

app.listen(3040);
