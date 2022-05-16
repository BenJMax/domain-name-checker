import * as React from 'react'; 
import tldService from '../../services/tldService';
import { Results } from '../results'
import { QueryBar } from '../queryBar';

// mantine
import { Container, TextInput, Loader, Grid, Image } from '@mantine/core'


// to be dep 
import Row from 'react-bootstrap/Row/'
import Col from 'react-bootstrap/Col/'


interface TLD { 
	domain: string,
	type: "generic" | "country-restricted" 
}

export const SearchArea: React.FC = () => {
	// useRef of tlds
	const tlds = React.useRef(['ca', 'com', 'au', 'cn', 'io', 'br', 'rl', 'en', 'ld'])

	// states
	const [ query, setQuery ] = React.useState('')
	const [ settings, setSettings ] = React.useState({ 
		variants : ['', '-', '_'], 
		filters  : ['generic']
	})

	// component functions
	// TODO
	const trackQuery = (event: React.ChangeEvent<any>): void => {
		setQuery(event.target.value)
	}

	const updateTlds = () => {
		tldService
			.getAll()
			.then(response => {
				const newTlds = response.reduce((soFar: Array<string> , tld: TLD) => {
					if (settings.filters.includes(tld.type)) {
						soFar.push(tld.domain)
					}
					return soFar
				}, []) 

				tlds.current = newTlds
			})
	}
	
	// useEffect to update tlds when settings are updated 
	React.useEffect(updateTlds, [ settings.filters ]) 

	return (
	<>
		<Container size="xl" id="upper-search">
			<Container size="md" id='search-bar-container'>
				<Grid justify='center' align='flex-end' id='search-grid' style={{minHeight: '100%'}}>
					<Grid.Col span={12} style={{ minHeight: '100%' }}>
						<QueryBar query={ query } onChange={ trackQuery } />
					</Grid.Col>
				</Grid>		
			</Container>

		</Container>
		<Container size='md' id='results-container' style={{ maxHeight : '65vh', flexGrow: 1, overflowY: 'auto' }}>
			<Results query={ query } tlds={ tlds.current } settings={ settings } />	
		</Container>
	</>
	);
};

