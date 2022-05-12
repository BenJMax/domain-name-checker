import Stack from 'react-bootstrap/Stack'
import Entry from './Entry'
import serveQuery from '../lib/serveQuery'

const Results = ({ query, tlds, settings }) => {
	
	// find all domain options
	const queryResults = serveQuery({ query : query, tlds : tlds, variants : settings.variants })

	console.log(queryResults)
	
	if (query === '') {
		return (
			<div className="text-center">
				This is the default
			</div>
		)
	} else if (queryResults){
		return (
			<Stack id="found-results" gap={ 1 }> 
				{ queryResults 
					.map(domain => <Entry domain={ domain.name } key={ domain.name }/>)
				}
			</Stack>
		)
	}


}

export default Results
