const tldRouter = require('express').Router()
const Tld = require('../models/tld')

// call MongoDB to fetch list of TLDs on client page init
tldRouter.get('/', (req, res, next) => {	
	res.send('<h1>This is working</h1>')
})

/*
* TODO
* fetch TLDs based on search narrowing parameters
*/
tldRouter.get('/:id', (req, res, next) => {
	
})


module.exports = tldRouter; 
