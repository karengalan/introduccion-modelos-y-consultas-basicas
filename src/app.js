const express = require('express');
const path = require('path');


const testConecction = require('./utils/dbConnectiontest')

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

const app = express();
testConecction()

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/movies',moviesRoutes);
app.use('/genres',genresRoutes);
app.use('/actors',actorsRoutes);

app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
