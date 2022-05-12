const config = require('./config/config') 
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const mongoose = require('mongoose')
const express = require('express')

const app = express() 

const queryRouter = require('./controllers/queryController')
const tldRouter = require('./controllers/tldController')

mongoose
	.connect(config.DB_URI)
	.then(() => {
		logger.info('connected to mongoDB')
	})
	.catch((e) => {
		logger.error('encountered an error while connecting to mongoDB ', e.message)
	})

// Start middleware 
app.use(express.json())
app.use(middleware.morgan('combined'))

// Start routers 
app.use('/api/query', queryRouter)
app.use('/api/tld', tldRouter)

// Start garbage-collecting middleware 
// TODO

module.exports = app



