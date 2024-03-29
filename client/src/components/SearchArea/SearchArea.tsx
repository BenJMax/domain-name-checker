import * as React from 'react'; 
import tldService from '../../services/tldService';
import { Results } from '../Results'
import { QueryBar } from '../queryBar';

// types
import { QueryInfo, TLD, TLDType } from '../../types';

// mantine
import { Container, TextInput, Loader, Grid, Image } from '@mantine/core'



export const SearchArea: React.FC = () => {
	// useRef of tlds
	const tlds  = React.useRef(['ca', 'com', 'au', 'cn', 'io', 'br', 'rl', 'en', 'ld'])

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
	<div>
		<Container size="xl" id="upper-search">
			<Container size="md" id='search-bar-container'>
				<Grid justify='center' align='flex-end' id='search-grid' style={{minHeight: '100%'}}>
					<Grid.Col span={12} style={{ minHeight: '100%' }}>
						<QueryBar query={ query } onChange={ trackQuery } />
					</Grid.Col>
				</Grid>		
			</Container>

		</Container>
	</div>
	<div className='res'> 
		<Container>
				<Results query={ query } tlds={ tlds.current } settings={ settings } />	
		</Container>
	</div>
	</>
	);
};

