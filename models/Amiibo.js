const {Schema, model} = require("../db/connection") // import Schema & model

const AmiiboSchema = new Schema({

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
    type: String,
    isWished: Boolean,
    isOwned: Boolean
    
  
  },{timestamps: true})
  
  const Amiibo = model("Amiibo", AmiiboSchema)

module.exports = Amiibo