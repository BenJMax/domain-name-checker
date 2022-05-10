import Stack from 'react-bootstrap/Stack'
import Entry from './Entry'

const Results = ({ query }) => {
	
	const items = [ 
		'one', 'twotwo', 'threethreethree', 'fourfourfourfour', 'five', 'six',
	]
	
	const itemsToRender = items.filter(item => item.length > query.length)	

	
	if (query === '') {
		console.log(query)
		return (
			<div className="text-center">
				This is the default
			</div>
		)
	} else {
		return (
			<Stack id="found-results" gap={1}> 
				{ itemsToRender 
					.map(item => <Entry title={ item } key={ item }/>)
				}
			</Stack>
		)
	}


}

export default Results
