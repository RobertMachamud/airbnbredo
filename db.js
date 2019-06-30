// mongo db
// pg reqired - import
const {Client} = require('pg')

// create connection with database - create new Client
const db = new Client ({
	// connectionstring to sql tables - airbnb
	connectionString: process.env.DATABASE_URL
})

// connect to database and handle error - just err needed
// because .connect()  - make sure to log if connected or not
// with if/else
db.connect( (err) => {
	if (err) {
		console.log('error connecting to PostgresSQL database');
	} else {
		console.log('Connected');
	}
})

module.exports = db
