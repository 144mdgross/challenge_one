const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

const gifs = require('./routes/gifs')
const random = require('./routes/random')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// request trending gifs when component mounts
app.use('/gifs', gifs)

// request a random gif
app.use('/random', random)

// catch all config for Single Page App structure
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})


const port = process.env.PORT || 3000

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send appropriate error
  res.status(err.status || 500);
  res.send(err);
});


app.listen(port, function () {
  console.log(`Full Stack - JavaScript listening on port ${port}!`)
})
