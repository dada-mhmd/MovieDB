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

app.get('/test', (req, res) => res.send({status:200, message:"ok"})) // digitalocean saved my life.
app.get('/time', (req, res) => {
    const time = new Date()
    const timeString = `${time.getHours()}:${time.getMinutes()}`
    const result = {
      status: 200,
      message: timeString
    }
    res.status(200).send(result)
  });

 
  app.get('/hello', function(req, res) {
    res.send({ status: 200, message: "Hello" });
});

app.get('/hello/:id', (req, res) =>  {
    res.send(req.params.id) })

    app.get('/search', (req, res) => {
        const search = req.query.s;
    
        if (typeof search != 'undefined') { // stackoverflow :D
    
            const response = {
                status: 200,
                message: "ok",
                data: search
            };
    
            res.send(response);
        } else {
            const response = {
                status: 500,
                error: true,
                message: "you have to provide a search"
            };
    
    
            res.status(500);
            res.send(response);
        }
    });

    const movies = [
        { title: 'Jaws', year: 1975, rating: 8 },
        { title: 'Avatar', year: 2009, rating: 7.8 },
        { title: 'Brazil', year: 1985, rating: 8 },
        { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
    ];
    app.delete('/movies/delete', function(req, res) {
        res.send('delete movie')
    });
    
    app.patch('/movies/update', function(req, res) {
        res.send('update movie')
    });
    
    app.post('/movies/create', function(req, res) {
        res.send('create movie')
    });
    
    app.get('/movies/read', function(req, res) {
        res.send({ status: 200, data: movies })
    });