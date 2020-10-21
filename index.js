// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('OK');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

app.get('/test', (req, res) => res.send({status:200, message:"ok"}))
app.get('/time', (req, res) => {
    const time = new Date()
    const timeString = `${time.getHours()}:${time.getMinutes()}`
    const result = {
      status: 200,
      message: timeString
    }
    res.status(200).send(result)
  });