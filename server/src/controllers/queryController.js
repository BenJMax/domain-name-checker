const dns = require('node:dns').promises
const apiRouter = require('express').Router() 


apiRouter.get('/', (req, res, next) => {
		
})

apiRouter.get('/:id', (req, res, next) => {
	const domain = req.params.id

	dns
		.lookup(domain, 0)
		.then(addresses => {
			res.send({ domain : domain, available : -1})
		})
		.catch(err => {
			console.log(err)
			res.send({ domain : domain, available : 1})
		})
})


module.exports = apiRouter; 
