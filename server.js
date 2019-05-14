const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
  app.listen(PORT, function() {
      console.log("Server is running on Port: " + PORT);
  });
  