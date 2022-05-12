const tldRouter = require('express').Router()
const tldInfo = require('../formats/tld-enum.js')
const Tld = require('../models/tld')


// call MongoDB to fetch list of TLDs on client page init
tldRouter.get('/', (req, res, next) => {	
	res.json(tldInfo)
})

/*
* TODO
* fetch TLDs based on search narrowing parameters
*/
tldRouter.get('/:id', (req, res, next) => {
		
})


module.exports = tldRouter; 
