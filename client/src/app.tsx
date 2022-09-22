import './App.css'
import { Container } from '@mantine/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react"; 

import { 
	SimpleHeader,
	SimpleFooter,
	SearchArea
} from './components';

export const App = () => {
	return (
		<>
			<div>
				<SimpleHeader />
			</div>

			<SearchArea />

			<div>
				<SimpleFooter />
			</div>
		</>
    )
}