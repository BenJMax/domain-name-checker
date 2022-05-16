import generateValidDomains from "./generate/generateDomains"
import { QueryInfo, SpaceVariant } from "../types"

// TODO - type settings
const serveQuery = (query : string, tlds : Array<string>, settings : any) => {
	// TODO - replace with updated type
	const queryInfo = {
		query: query,
		tlds: tlds,
		settings: settings
	}

	// produce all valid domains from query parameters  
	const domains = generateValidDomains()

	return domains
	
}

export default serveQuery 
