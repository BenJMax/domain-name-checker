import * as React from 'react'
import { Stack } from '@mantine/core'

import { QueryInfo } from '../../types'

import Entry from '../entry/Entry'
import serveQuery from '../../lib/serveQuery'

interface Props {
	query: string,
	tlds: Array<string>,
	settings: any, 
}

export const Results: React.FC<Props> = ({ query, tlds, settings }) => { 

	if (query === '' || query.length < 4) {
		return (
			<div className='results'>
				p
			</div>
		)
	}

	// find all domain options
	const queryResults: Array<string> = serveQuery(query, tlds, settings); 

	// Populate entry component from each result 
	const resultEntries = queryResults.map((domain: any) => 
		<Entry domain={ domain.name } key={ domain.name }/>
	)

	if (queryResults.length) {
		return (
			<Stack spacing='xs'>
				{ resultEntries }
			</Stack>
		)
	}

	return null;
}

