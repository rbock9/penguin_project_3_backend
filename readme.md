# Group Project (Amiibo App) Back-End - Rob Bock, Jeff Li, Seb Patin


## API

Amiibo Data taken from https://www.amiiboapi.com/api/


## Dependencies

- dotenv
- mongoose
- express 
- cors
- morgan

## Models

```
const AmiibosSchema = new mongoose.Schema({

  amiiboSeries: String,
  character: String,
  gameSeries: String,
  image: String,
  name: String,
  type: String,




}

## Backend Route Table

Our routes are listed in the table below:

| url | method | action |
|-----|--------|--------|
| / | get | test route |
| /amiibos | get | displays all amiibos (index)|
| /amiibos | post | add a new amiibo to database (create)|
| /amiibos/:id | put | update an amiibo's data then redirects (update)|
| /amiibos/:id | delete | destroys an amiibos's data then redirects (destroy)|


```
