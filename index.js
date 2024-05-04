const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var router = express.Router();
const PORT = 3030;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Parse JSON bodies for POST requests
/* app.use(bodyParser.json());

app.get("/", (request, response) => {
  console.log(request);
  response.send("Hello World 3");
});

app.post("/", (request, response) => {
  const { name } = request.body;

  if (name === "TRONG") {
    return response.send("Hello Trong");
  } else {
    return response.send("Hello world1");
  }
}); */
/* router.get("/", function (req, res) {
  res.send("GET route on things.");
});
router.post("/", function (req, res) {
  res.send("POST route on things.");
});
module.exports = router; */
/* app.get('/:id', function (req, res) {
  res.send('The id you specified is ' + req.params.id);
});
app.get('/things/:name/:id', function (req, res) {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
}); */
/* app.get('/things/:id([0-9]{5})', function (req, res) {
  res.send('id: ' + req.params.id);
});
app.get('*', function(req, res){
 res.send('ERROR 404: Sorry, this is an invalid URL.');
});
 */

/* app.get("/", (request, response) => {
  const products = [
    {
      name: "Iphone 12",
      price: 1000,
      description: "New Iphone 12",
    },
    {
      name: "Iphone 13",
      price: 1000,
      description: "New Iphone 13",
    },
    {
      name: "Iphone 14",
      price: 1000,
      description: "New Iphone 14",
    },
  ];

  response.send(products);
}); */

/* app.all("/test", function (req, res) {
  res.send("HTTP method doesn't have any effect on this route!");
});
 */
//biding data to view
/* 
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING on port ${PORT}`);
}); */
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Hello World!",
    description: "This is a simple example of a web page using EJS.",
    products: products,
  });
});
/* app.get('/conditional', (req, res) => {
  res.render('conditional', null)
})
app.get('/conditional/:name/:age', (req, res) => {
  res.render('conditional', { user: { name: req.params.name, age: req.params.age } })
}) */
/* app.get('/components', function(req, res){
  res.render('content');
});
 */
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING on port ${PORT}`);
});
