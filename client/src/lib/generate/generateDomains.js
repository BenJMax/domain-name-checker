
const replaceSpacesWith = (input, replacement) => {
	return input.replaceAll(' ', replacement)
} 

const findDomainOccurences = (input, tld, variants) => {
	const found = [] 
	const lowerInput = input.toLowerCase()
	const size = tld.length 
	var start = 0


	while(start !== -1) {
		// from start, find the first occurrence of tld in input 
		var next = lowerInput.indexOf(tld, start)
		var incStart = next + size + 1 

		while (next !== -1) {

			// get the substring before next tld, if trailing space, don't include 
			const dsInput = input.substring(start, input.charAt(next - 1) === ' ' ? next - 1 : next) 

			// add '.' to tld 
			const dsTld	  = '.'.concat(tld) 	

			// construct domainString from components 
			const domainString = dsInput.concat(dsTld) 

			// add this domainString to our results if it is not just .tld	
			if (domainString.length > dsTld.length + 1) {

				// if domain has spaces, fill with variants	
				if (domainString.includes(' ')) {
					variants.forEach(v => {
						found.push({
							name : replaceSpacesWith(domainString, v)  
						})
					})
				} else {
					found.push({
						name : domainString
					})
				}
			} 

			// search for another unique domainString from this starting point
			next = lowerInput.indexOf(tld, next + size + 1)
		}
		// move the starting point to after the first occurence of tld
		start = lowerInput.indexOf(tld, incStart)
	}				

	return found; 
} 


const generateValidDomains = (queryInfo) => {

	// baseline input
	const rawInput = replaceSpacesWith(queryInfo.query, '').toLowerCase()

	// produce array of all tlds that are substrings of the input string
	const usefulTlds = queryInfo.tlds.filter(t => rawInput.includes(t))

	// if the input string doesn't contain any tlds, return null
	if (!usefulTlds.length) return []; 

	/*
	*  given the array of tlds that we know the input contains at least once,  
	*  generate an array containing all possible domains that can be formed
	*  from the input and tlds
	*/
	const results = usefulTlds.reduce((res, tld) => {
			res.push(...findDomainOccurences(queryInfo.query, tld, queryInfo.variants))
			return res
		}, [])

	// Sort results by non-decreasing length
	results.sort((a, b) => a.name.length > b.name.length ? 1 : -1)


	return results 
} 

export default generateValidDomains
