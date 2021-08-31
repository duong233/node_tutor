const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db/index");

//connect to db
db.connect();

//use static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

// http logger
// app.use(morgan('combined'));

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    helpers: {
      sum: (a,b) => a+b,
  }
  })
); //config

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//route init
route(app);

app.listen(port, ()=>{
  console.log(`App listening at http://localhost:${port}`);
});
