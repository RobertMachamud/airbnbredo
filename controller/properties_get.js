// import database
const db = require('../db.js')  //.js is not needed

// export this file
module.exports = (req, res) => {
  // select everything from properties using query
  db.query(`SELECT
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
LEFT JOIN types ON properties.type = types.id`, (err, result) => {
    // if err comes up - display
    if (err) {
      console.log('err', err)
    } else {
      // else - send the result in rows
      res.send(result.rows)
    }
  })
}
