const express = require('express');
const router = express.Router();
// const request = require('request');
const fetch = require('node-fetch')

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

router.get('/', (req, res, next) => {
// get trending gifs to display when user goes to index page
  fetch(`https://api.tenor.com/v1/trending?key=${process.env.TENOR_API_KEY}`)
    .then(resp => resp.json())
    .then(body => {
      console.log(body);
      let gifs = body.results
      res.json({ gifs })
    })
    .catch(err => console.log(err))

});

module.exports = router;
