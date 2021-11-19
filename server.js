//////////////////////////////////
// Dependencies
/////////////////////////////////
// get .env variables
require("dotenv").config()
// pull PORT from .env, give it a default of 3000 (object destructuring)
const { PORT = 3000, DATABASE_URL } = process.env
// import express
const express = require("express")
//import mercedloggers log function
const { log } = require("mercedlogger")
// create application object
const app = express()
const allAmiibos = require('./models/allAmiibos.js')
// import mongoose
const mongoose = require("mongoose")
// IMPORT MIDDLEWARE
const cors = require("cors")
const morgan = require("morgan")

// ROUTER FOR USER AUTHENTICATION
// imports User route from controllers folder
const UserRouter = require("./controllers/User")
// imports Amiibo route from controllers folder
const AmiiboRouter = require("./controllers/Amiibo")



/////////////////////////////////
// Database Connection
////////////////////////////////
// Establish Connection
// mongoose.connect(DATABASE_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })

// Connection Events
// mongoose.connection
// .on("open", () => console.log("You are connected to Mongo"))
// .on("close", () => console.log("You are disconnected from Mongo"))
// .on("error", (error) => console.log(error))

// MODELS
// const AmiibosSchema = new mongoose.Schema({

//   amiiboSeries: String,
//   character: String,
//   gameSeries: String,
//   head: String,
//   image: String,
//   name: String,
//   release: {
//     au: String,
//     eu: String,
//     jp: String,
//     na: String
//   },
//   tail: String,
//   type: String,
//   isWished: Boolean,
//   isOwned: Boolean


// },{timestamps: true})

// const Amiibos = mongoose.model("Amiibos", AmiibosSchema)

//MIDDLEWARE
app.use(cors({credentials: true, origin: "*"})) // prevent cors errors, opens up access for frontend
app.use(morgan("tiny")) // loggging
app.use(express.json()) // parse json bodies
// {credentials: true, origin: "http"}


///////////////////////////////
// ROUTES
////////////////////////////////
// Create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// UserRouter middleware
// send all "/user" requests to UserRouter for routing
app.use("/user", UserRouter)
// AmiiboRouter middleware
app.use("/amiibos", AmiiboRouter)

// SEED ROUTE - THIS WILL RESET DATABASE WITH SEED DATA
// THIS WILL DELETE ANY OF YOUR ADDITIONAL AMIIBOS!!!!!
// YOU'VE BEEN WARNED!!!!!!!!!!!!!FDAFDSFFEAWFJEKLASL;FJ
app.get("/amiibos/seed", (req, res) => {
  Amiibos.deleteMany({})
    .then((data) => {
      Amiibo.create(allAmiibos)
        .then((data) => {
          res.json(data)
        })
    })
})

// INDEX  //
// app.get("/amiibos", async (req, res) => {
//   try {
//     res.json(await Amiibos.find({}));
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });
// CREATE
// app.post("/amiibos", async (req, res) => {
//   try {
//     res.json(await Amiibos.create(req.body));
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });
// UPDATE
// app.put("/amiibos/:id", async (req, res) => {
//   try {
//       res.json(await Amiibos.findByIdAndUpdate(req.params.id, req.body, {new: true}));
//     } catch (error) {
//       res.status(400).json({ error });
//     }
// })
// DELETE
// app.delete("/amiibos/:id", async (req, res) => {
//   try {
//       res.json(await Amiibos.findByIdAndRemove(req.params.id));
//     } catch (error) {
//       res.status(400).json({ error });
//     }
// })


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));