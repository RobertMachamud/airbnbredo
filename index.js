// import express and path
const express = require('express')
const path = require('path')
// app runs exress
const app = express()

// import database
const db = require('./db.js')

// static to read files like html ctc
app.use('/', express.static(path.join(__dirname, 'client')))

// gets
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'))
})



app.listen(3000, () => {
  console.log('Server is listening on Port 3000');
})
