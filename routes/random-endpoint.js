const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// list of words to do 'random' query to tenor gifs
const randomSearch = ['smile', 'cat', 'panda', 'dog', 'cute', 'ostrich', 'cheese', 'bike', 'bro', 'shopping', 'sports', 'soccer', 'americans', 'elephant', 'coffee']

router.get('/', (req, res, next) => {
  // get random element
  let randomQuery = randomSearch[Math.floor(Math.random() * randomSearch.length)]

// request Tenor gifs api for random result
  fetch(`https://api.tenor.com/v1/search?q=${randomQuery}&safesearch=strict&key=${process.env.TENOR_API_KEY}`)
    .then(resp => resp.json())
      .then(body => {
        let gif = body.results[0]
        res.json({ gif })
      })
      .catch(err => console.log(err))
});

module.exports = router;
