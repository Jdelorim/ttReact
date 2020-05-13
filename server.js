'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 4000;

//forces ssl 
// const enforce = require('express-sslify');
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

require('./routes/index')(app);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}


app.get('/*', (req, res) => {
    console.log('hitting the route');
    res.sendFile(path.join(__dirname, '/client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

  

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})