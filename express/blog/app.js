const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');

const articlesRouter = require('./routes/articles.routes')

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/group3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/articles', articlesRouter)


// app.get('/test', (req, res) => {
//   res.send('Hello From Express')
// })

// app.get('/hello', (req, res) => {
//   res.send("Hello everyone")
// })

// app.post('/hi', (req, res) => {
//   res.send('Hi')
// })

// app.post('/hello', (req, res) => {
//   res.send('Created Successfully')
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send(err)
});

module.exports = app;
