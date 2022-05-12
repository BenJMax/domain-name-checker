const tldRouter = require('express').Router()



// call MongoDB to fetch list of TLDs on client page init
tldRouter.get('/', (req, res, next) => {
	// Call and fetch from TLD document 	
})

/*
* TODO
* fetch TLDs based on search narrowing parameters
*/
tldRouter.get('/:id', (req, res, next) => {

})


module.exports = tldRouter; 
