# Back-End 

## API

https://www.amiiboapi.com/api/

## Dependencies

- dotenv
- mongoose
- express 
- cors
- morgan

## Models

Below is the model for the bookmark schema:

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
| /bookmark/ | post | add a new amiibo to database (create)|
| /bookmark/:id | get | show info about a specific amiibo (show)|
| /bookmark/:id/edit | get | show edit form for an amiibo (edit)|
| /bookmark/:id | put | update an amiibo's data then redirects (update)|
| /bookmark/:id | delete | destroys an amiibos's data then redirects (destroy)|