const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

const gifs = require('./routes/gifs')
const random = require('./routes/random-endpoint')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// request trending gifs when component mounts
app.use('/api/gifs', gifs)

// request a random gif
app.use('/api/random', random)

// catch all config for Single Page App structure
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

// changes port to 3002 to avoid conflict with create-react-app
// see proxy in client side package.json
const port = process.env.PORT || 3002

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
