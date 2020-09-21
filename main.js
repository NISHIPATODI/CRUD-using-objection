const express = require("express");
const bodyParser  = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// Express Router Initialize
const router = express.Router();


const knexConfig = require("./knexfile");           
const Knex = require("knex");
const { Model } = require("objection");

const knex = Knex(knexConfig['development']);

Model.knex(knex);

const app = express()
  .use(bodyParser.json())
  //.use(morgan('dev'))
  .use(router)
  
app.use(express.static(path.join(__dirname, 'public')))

const userRoutes = require("./routes/index");

app.use("/api",userRoutes);

const port =3000;

// Express Server 
app.listen(port, () => {
    console.log('Server listening at port %s', port);
  });
