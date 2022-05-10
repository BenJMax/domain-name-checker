import { useState } from 'react' 
import Form from 'react-bootstrap/Form'
import Results from './Results'
import Container from 'react-bootstrap/Container/'
import Row from 'react-bootstrap/Row/'
import Col from 'react-bootstrap/Col/'

const SearchArea = (props) => {
	const [ query, setQuery ] = useState('')
	
	const trackQuery = (event) => {
		setQuery(event.target.value)
	}

	return (
	<Container fluid="lg">
		<Row className="my-5"> 

		</Row>
		<Row className="justify-content-center mb-2">
			<Col className="col-7">
				<Form id="search-form" className="text-center"> 
					<img 
						id="site-logo"
						src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Dyson_logo.svg"
						alt='stop annoying me'
						/>	
					<Form.Group id='search-bar-input'>
						<Form.Control
								className='shadow-none'
								type='text' 
								value={ query }
								onChange={ e => trackQuery(e) } 
								placeholder='Full name' />
					</Form.Group>
				</Form>
			</Col>
		</Row>
		<Row id="query-row" className='justify-content-center'> 
			<Col id="query-results" className='col-7 overflow-auto'>
				<Results query={ query }/>
			</Col>
		</Row>
	</Container>
	)
}

export default SearchArea 
