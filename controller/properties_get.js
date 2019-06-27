// needed zb. to display all "properties" in the DOM
// gets importet by index.js as api -
//  also in app.js where you need it to not getting just numbers (id) on zb. countries/cities/... -

// import database
const db = require('../db.js')  //.js is not needed

// export this file - function
module.exports = (req, res) => {
  // first: select everything from properties using query
  // second: using query to select all items in main table like:
  //         properties.id/name/price/...
  //         then - bring in other tables: countries.name AS "country" -> becomes new column in properties
  //   then - FROM properties
  //        LEFT JOIN countries ON properties.country = countries.id   (with all of them)
  //   now - all "properties" will be displayed in the DOM
  let query = `SELECT
properties.id,
properties.name,
properties.price,
properties.rating,
properties.city,
properties.country,
countries.name AS "country",
cities.name AS "city",
types.name AS "type"

FROM properties
LEFT JOIN countries ON properties.country = countries.id
LEFT JOIN cities ON properties.city = cities.id
LEFT JOIN types ON properties.type = types.id `

  if (req.query && Object.keys(req.query).length) {
    query += `WHERE `
  }

  for (i = 0; i < Object.keys(req.query).length; i++) {

    if (Object.keys(req.query)[i] == 'rating' && i == 0) {
      query += `properties.rating = ${req.query.rating}`
    } else if (Object.keys(req.query)[i] == 'rating') {
      query += ` and properties.rating = ${req.query.rating}`
    }

    if (Object.keys(req.query)[i] == 'city' && i == 0) {
      query += `properties.city = ${req.query.city}`
    } else if (Object.keys(req.query)[i] == 'city') {
      query += ` and properties.city = ${req.query.city}`
    }

    if (Object.keys(req.query)[i] == 'country' && i ==0) {
      query += `properties.country = ${req.query.country}`
    } else if (Object.keys(req.query)[i] == 'country') {
      query += ` and properties.country = ${req.query.country}`
    }
  }



  console.log(query);

  db.query(query, (err, result) => {
    // if err comes up - display
    if (err) {
      console.log('err', err)
    } else {
      // else - send the result in rows ()
      res.send(result.rows)
    }
  })

}
