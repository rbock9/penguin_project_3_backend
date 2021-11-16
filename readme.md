# Group Project (Amiibo App) Back-End - Rob Bock, Jeff Li, Seb Patin


## API

https://www.amiiboapi.com/api/

## Dependencies

- dotenv
- mongoose
- express 
- cors
- morgan

## Models

Below is the model for the amiibo schema:

amiiboSchema = {
            amiiboSeries: String,
            character: String,
            gameSeries: String,
            image: String,
            name: String,
            type: String,
            misc: String
}

## Backend Route Table

Our routes are listed in the table below:

| url | method | action |
|-----|--------|--------|
| /amiibo | get | displays all amiibos (index)|
| /amiibo/new | get | displays a form to make a new amiibo (new)|
| /amiibo/ | post | add a new amiibo to database (create)|
| /amiibo/:id | get | show info about a specific amiibo (show)|
| /amiibo/:id/edit | get | show edit form for an amiibo (edit)|
| /amiibo/:id | put | update an amiibo's data then redirects (update)|
| /amiibo/:id | delete | destroys an amiibos's data then redirects (destroy)|
