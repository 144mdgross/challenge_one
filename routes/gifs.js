const express = require('express');
const router = express.Router();
const request = require('request');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

router.get('/', (req, res, next) => {
// get trending gifs to display when user goes to index page
  request(`https://api.tenor.com/v1/trending?key=${process.env.TENOR_API_KEY}`, (err, response, body) => {

      console.error('error', err);
      console.log('statusCode', response && response.statusCode);
      console.log('body', body);
    res.send(body)
  })
});

module.exports = router;
