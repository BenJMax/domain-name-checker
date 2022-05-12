require('dotenv').config()

const PORT = process.env.PORT || 4000 
const DB_URI = process.env.DB_URI

module.exports = {
	DB_URI,
	PORT
}
