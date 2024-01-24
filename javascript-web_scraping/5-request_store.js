#!/usr/bin/node
const fs = require('fs');
const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  fs.writeFile(process.argv[3], body, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});
