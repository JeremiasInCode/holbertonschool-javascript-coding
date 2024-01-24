#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const completedTasks = {};
  const bodyData = JSON.parse(body);

  bodyData.forEach(task => {
    if (!completedTasks[task.userId]) {
      completedTasks[task.userId] = 1; 
    }
    completedTasks[task.userId] += 1;
  });

  console.log(completedTasks);
});
