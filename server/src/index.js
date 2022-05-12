const config = require('./config/config')
const app  = require('./app') 
const logger = require('./utils/logger') 

const http = require('http') 

const server = http.createServer(app); 

server.listen(config.PORT, () => { 
	logger.info(`Server running on port ${ config.PORT }`)
})
