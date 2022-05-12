import generateValidDomains from "./generate/generateDomains"

const serveQuery = (queryInfo) => {

	// produce all valid domains from query parameters  
	const domains = generateValidDomains(queryInfo)

	return domains
	
}

export default serveQuery 
