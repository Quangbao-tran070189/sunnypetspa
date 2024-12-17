const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();

const port = 3000;

const route = require('./routes/index');

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//use middleware
app.use(express.urlencoded({
  extention: true
}));
app.use(express.json());

console.log('PATH: ',path.join(__dirname, 'public'))

//HTTP logger
app.use(morgan("combined"));
//Template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));



//Routes init
route(app);

app.listen(port, () => {
  console.log(`excample app listening at http://localhost:${port}`);
});