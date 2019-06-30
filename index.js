// import express and path
const express = require('express')
const path = require('path')
// app runs exress
const app = express()

// import database
const db = require('./db')

require('dotenv').config()

// static to read files like html css
app.use('/', express.static(path.join(__dirname, 'client')))

// gets api
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/index.html'))
})

// for countries
app.get('/api/countries', require('./controller/countries_get.js'))
// for categories
// app.get('/api/types', require('./controller/types_get.js'))

// get the api  of all products first - import from controller
// /api/prop -> shows your imported file-code on localhost:3000/api/prop.
// ./  means the whole file gets imported as prop._get.js
app.get('/api/properties', require('./controller/properties_get.js'))



app.listen(process.env.PORT, () => {
	console.log(`Server is listening on Port ${process.env.PORT}`);
})

// Port 47582
