'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 4000;

//forces ssl 
// const enforce = require('express-sslify');
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})