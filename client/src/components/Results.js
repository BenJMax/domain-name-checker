import Stack from 'react-bootstrap/Stack'
import Entry from './Entry'
import serveQuery from '../lib/serveQuery'

const Results = ({ query }) => {
	
	const tld = [ 
		'ca', 'com', 'au', 'cn', 'io', 'br', 'rl', 'en', 'ld'
	]

	
	const queryResults = serveQuery(query)
	console.log(queryResults)
	
	if (query === '') {
		return (
			<div className="text-center">
				This is the default
			</div>
		)
	} else if (queryResults){
		return (
			<Stack id="found-results" gap={1}> 
				{ queryResults 
					.map(item => <Entry title={ item.name } key={ item.name }/>)
				}
			</Stack>
		)
	}


}

export default Results
