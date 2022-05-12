import axios from 'axios'

const URI = 'http://localhost:4000/api/tlds'

const getAll = () => {
	const request = axios.get(URI)
	return request.then(response => response.data)
}

export default { getAll }
