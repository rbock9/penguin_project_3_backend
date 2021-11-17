//////////////////////////////////
// Dependencies
/////////////////////////////////
// get .env variables
require("dotenv").config()
// pull PORT from .env, give it a default of 3000 (object destructuring)
const { PORT = 3000, DATABASE_URL } = process.env
// import express
const express = require("express")
// create application object
const app = express()
const allAmiibos = require('./models/amiibos.js')
// import mongoose
const mongoose = require("mongoose")
// IMPORT MIDDLEWARE
const cors = require("cors")
const morgan = require("morgan")


/////////////////////////////////
// Database Connection
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Connection Events
mongoose.connection
.on("open", () => console.log("You are connected to Mongo"))
.on("close", () => console.log("You are disconnected from Mongo"))
.on("error", (error) => console.log(error))

// MODELS
const AmiibosSchema = new mongoose.Schema({

  amiiboSeries: String,
  character: String,
  gameSeries: String,
  head: String,
  image: String,
  name: String,
  release: {
    au: String,
    eu: String,
    jp: String,
    na: String
  },
  tail: String,
  type: String
  

},{timestamps: true})

const Amiibos = mongoose.model("Amiibos", AmiibosSchema)

//MIDDLEWARE
app.use(cors()) // prevent cors errors, opens up access for frontend
app.use(morgan("dev")) // loggging
app.use(express.json()) // parse json bodies



///////////////////////////////
// ROUTES
////////////////////////////////
// Create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// SEED ROUTE - THIS WILL RESET DATABASE WITH SEED DATA
// THIS WILL DELETE ANY OF YOUR ADDITIONAL AMIIBOS!!!!!
// YOU'VE BEEN WARNED!!!!!!!!!!!!!FDAFDSFFEAWFJEKLASL;FJ
app.get("/amiibos/seed", (req, res) => {
  Amiibos.deleteMany({})
  .then((data) => {
    Amiibos.create(allAmiibos)
    .then((data) => {
      res.json(data)
    })
  })
})

// INDEX  //
app.get("/amiibos", async (req, res) => {
  try {
    // send all bookmarks
    res.json(await Amiibos.find({}));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// CREATE
app.post("/amiibos", async (req, res) => {
  try {
    res.json(await Amiibos.create(req.body));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// UPDATE
app.put("/amiibos/:id", async (req, res) => {
  try {
      res.json(await Amiibos.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
      res.status(400).json({ error });
    }
})

// DELETE
app.delete("/amiibos/:id", async (req, res) => {
  try {
      res.json(await Amiibos.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json({ error });
    }
})



///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));