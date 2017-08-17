const express = require('express');
const router = express.Router();
const request = require('request');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// list of words to do random query to tenor gifs
const randomSearch = ['smile', 'cat', 'panda', 'dog', 'cute', 'ostrich', 'cheese', 'bike', 'bro', 'shopping', 'sports', 'soccer', 'americans', 'elephant', 'snl', 'colbert', 'coffee', 'TV', 'hipsters']


router.get('/', (req, res, next) => {
  // get random element
  let randomQuery = randomSearch[Math.floor(Math.random() * randomSearch.length)]

// request Tenor gifs api for random result
  request(`https://api.tenor.com/v1/search?q=${randomQuery}&key=${process.env.TENOR_API_KEY}`, (err, response, body) => {

      console.error('error', err);
      console.log('statusCode', response && response.statusCode);
      console.log('body', body);
    res.send(body)
  })
});

module.exports = router;
