#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const completedTasks = {};
  const todo = JSON.parse(body);
  todo.forEach(task => {
    if (task.completed) {
      if (!completedTasks[task.userId]) completedTasks[task.userId] = 1;
      else completedTasks[task.userId] += 1;
    }
  });
  console.log(completedTasks);
});
