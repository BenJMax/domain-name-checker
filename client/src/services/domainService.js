import axios from 'axios'

const URL = 'http://localhost:4000/api/query/'

const getAvailability = domain => {
	const request = axios.get(URL.concat(domain))
	return request.then(response => response.data) 
} 

export default { getAvailability } 
