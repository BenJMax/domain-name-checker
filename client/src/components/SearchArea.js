import { useState, useEffect, useRef } from 'react' 
import tldService from '../services/tldService'

import Form from 'react-bootstrap/Form'
import Results from './Results'
import Container from 'react-bootstrap/Container/'
import Row from 'react-bootstrap/Row/'
import Col from 'react-bootstrap/Col/'

const SearchArea = (props) => {
	// useRef of tlds
	const tlds = useRef(['ca', 'com', 'au', 'cn', 'io', 'br', 'rl', 'en', 'ld'])

	// states
	const [ query, setQuery ] = useState('')
	const [ settings, setSettings ] = useState({ 
		variants : ['', '-', '_'], 
		filters  : ['generic']
	})

	// component functions
	const trackQuery = (event) => {
		setQuery(event.target.value)
	}

	const updateTlds = () => {
		tldService
			.getAll()
			.then(response => {
				const newTlds = response.reduce((soFar, tld) => {
					if (settings.filters.includes(tld.type)) {
						soFar.push(tld.domain)
					}
					return soFar
				}, []) 

				tlds.current = newTlds
			})
	}
	
	// useEffect to update tlds when settings are updated 
	useEffect(updateTlds, [ settings.filters ]) 

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
					<Form.Group>
						<Form.FloatingLabel
								id='search-bar-label'
								label='A domain like' 
						> 
							<Form.Control
									id='search-bar-input'
									size='lg'
									type='text' 
									value={ query }
									onChange={ e => trackQuery(e) } 
									placeholder='Full name' />
						</Form.FloatingLabel>
					</Form.Group>
				</Form>
			</Col>
		</Row>
		<Row id="query-row" className='justify-content-center'> 
			<Col id="query-results" className='col-7 overflow-auto'>
				<Results query={ query } tlds={ tlds.current } settings={ settings } />
			</Col>
		</Row>
	</Container>
	)
}

export default SearchArea 
