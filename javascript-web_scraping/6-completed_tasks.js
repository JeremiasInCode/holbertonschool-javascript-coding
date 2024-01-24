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
    if (task.completed) {
      completedTasks[task.userId] = (completedTasks[task.userId] || 0) + 1;
    }
  });

  console.log(completedTasks);
});
