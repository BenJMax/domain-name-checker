import { ReactFragment } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchArea from './components/SearchArea'
import Footer from './components/Footer'
import Header from './components/Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<SearchArea />
			<Footer />
		</>
    )
}

export default App;
