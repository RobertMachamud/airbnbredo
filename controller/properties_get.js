// import database
const db = require('../db.js')  //.js is not needed

// export this file
module.exports = (req, res) => {
  // select everything from properties using query
  db.query(`SELECT * FROM properties`, (err, result) => {
    // if err comes up - display
    if (err) {
      console.log('err', err)
    } else {
      // else - send the result in rows
      res.send(result.rows)
    }
  })
}
