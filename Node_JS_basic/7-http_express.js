const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
/* eslint-disable */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    let consoleOutput = '';
    const originalConsoleLog = console.log;

    console.log = (message) => {
      consoleOutput += `${message}\n`;
    };

    await countStudents(process.argv[2]);

    console.log = originalConsoleLog;

    res.send(`This is the list of our students\n${consoleOutput.trim()}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});
app.listen(port);

module.exports = app;
