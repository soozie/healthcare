const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const port = 3700;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const server = app.listen(port, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log('listening at host', host, port);
})

const users = {
  admin: {
    name: "Susanna Zandonai",
    username: "admin",
    password: "admin",
    role: "admin",
    created_at: "2018-06-14T15:00:00.000Z",
    updated_at: "2018-06-14T15:00:00.000Z",
    active: true
  },
  doctor: {
    name: "Doctor Bjerki",
    username: "doctor",
    password: "doctor",
    role: "doctor",
    created_at: "2018-06-14T15:00:00.000Z",
    updated_at: "2018-06-14T15:00:00.000Z",
    active: true
  },
  patient: {
    name: "Patiente Pellola",
    username: "patient",
    password: "patient",
    role: "patient",
    created_at: "2018-06-14T15:00:00.000Z",
    updated_at: "2018-06-14T15:00:00.000Z",
    active: true
  },
};

app.post('/api/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  console.log('Requested login:', username, password);

  if (users[username]) {
    if (users[username].password === password) {
      res.json(users[username]);
    } else {
      res.json({
        error: "Wrong Password! Sorry try again."
      });
    }
  } else {
    res.json({
      error: "User Not Found!"
    });
  }
});
