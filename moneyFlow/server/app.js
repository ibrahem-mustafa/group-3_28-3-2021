const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {dbConnect} = require('./config/db/db.config')
dbConnect()

const authRoutes = require('./routes/auth.routes')
const swiftRoutes = require('./routes/swift.routes')

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRoutes)
app.use('/swift', swiftRoutes)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
 

  // render the error page
  res.status(err.status || 500);
  res.json({err});
});

module.exports = app;
