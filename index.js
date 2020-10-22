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


            // step 5

    const movies = [
        { title: 'Jaws', year: 1975, rating: 8 },    // done without google :D
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

            //step 6

    app.get('/movies/read/by-date', (req, res) => {
        res.send({
            status: 200,
            data: movies.sort((a, b) => a.year - b.year)
        });
    });

    app.get('/movies/read/by-rating', (req, res) => {
        res.send({
            status: 200,
            data: movies.sort((a, b) => b.rating - a.rating)
        });
    });

    app.get('/movies/read/by-title', (req, res) => {
        movies1 = movies.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        res.send({
            status: 200,
            data: movies1
        });
    });

    //step 7

    app.get("/movies/read/id/:id", (req, res) => {
        let i = req.params.id;
        if (i <= movies.length) {
            res.send({ status: 200, data: movies[i] });
     } 
        else {
            res.send({
                status: 404,
                error: true,
                message: 'the movie  ' + i + ' does not exist'
            });
        }
     });