import * as React from 'react'
import { Stack } from '@mantine/core'

import Entry from '../entry/Entry'
import serveQuery from '../../lib/serveQuery'

interface Props {
	query: string,
	tlds: Array<string>,
	settings: any 
}

export const Results: React.FC<Props> = ({ query, tlds, settings }) => { 

	if (query === '' || query.length < 4) {
		return (
			<>
			</>
		)
	}

	// find all domain options
	const queryResults: Array<string> = serveQuery({ query : query, tlds : tlds, variants : settings.variants })

	// Populate entry component from each result 
	const resultEntries = queryResults.map((domain: any) => 
		<Entry domain={ domain.name } key={ domain.name }/>
	)

	if (queryResults.length) {
		return (
			<>
				<Stack id="found-results" spacing='xs'>
					{ resultEntries }
				</Stack>
			</>
		)
	}

	return null;
}

