const express = require("express");
          const app = express();
          var path = require('path');
          app.use(express.static(path.join(__dirname, 'public')));
          app.get("/api/", function (req, res) {
              res.send("Hello World!");
          });
          
          app.listen(8888, function () {
              console.log("Server running at http://localhost:8888");
          });