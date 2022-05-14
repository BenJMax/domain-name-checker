import Stack from 'react-bootstrap/Stack'
import Entry from '../Entry'
import NoResults from '../NoResults'
import serveQuery from '../../lib/serveQuery'

const Results = ({ query, tlds, settings }) => {
	
	// find all domain options
	const queryResults = serveQuery({ query : query, tlds : tlds, variants : settings.variants })

	
	if (query === '') {
		return (
			<NoResults />
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
