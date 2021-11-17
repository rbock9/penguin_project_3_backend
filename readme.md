# Group Project (Amiibo App) Back-End - Rob Bock, Jeff Li, Seb Patin


## API

Amiibo Data taken from https://www.amiiboapi.com/api/
./models/amiibos.js is where the amiibo data is stored for seeding.

## Dependencies

- dotenv
- mongoose
- express 
- cors
- morgan

## Models


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
  




}

## Backend Route Table

Our routes are listed in the table below:

| url | method | action |
|-----|--------|--------|

| /amiibos | get | displays all amiibos (index)|
| /amiibos/new | get | displays a form to make a new amiibo (new)|
| /amiibos/ | post | add a new amiibo to database (create)|
| /amiibos/:id | get | show info about a specific amiibo (show)|
| /amiibos/:id/edit | get | show edit form for an amiibo (edit)|
| /amiibos/:id | put | update an amiibo's data then redirects (update)|
| /amiibos/:id | delete | destroys an amiibos's data then redirects (destroy)|



