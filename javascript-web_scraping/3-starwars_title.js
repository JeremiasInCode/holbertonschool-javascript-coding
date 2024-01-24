#!/usr/bin/node
const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
