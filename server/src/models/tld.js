const mongoose = require('mongoose')

const tldSchema = new mongoose.Schema({
	domain : {
		type: String,
		required: true
	},
	open : Boolean 
})

tldSchema.set('toJSON', {
	transform: (document, res) => {
		res.id = res._id.toString()
		delete res._id
		delete res.__v
	}
})

module.exports = mongoose.model('Tld', tldSchema)


