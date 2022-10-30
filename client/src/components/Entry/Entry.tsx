import * as React from "react";  

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import domainService from '../../services/domainService'

interface Prop {
	domain: string
}

export const Entry: React.FC<Prop> = ({ domain }) => {
	const [ avail, setAvail ] = React.useState(0)

	const queryAvail = () => {
		domainService
			.getAvailability(domain)
			.then(response => {
				setTimeout(() => setAvail(response.available), Math.random() * 10000)
			})
			.catch(e => {
				console.log(e.message)
			})
	}


	React.useEffect(queryAvail, [])

	if (avail === 0) {
		return (
		<Card id="result-entry">
			<Card.Body>
				<Card.Title>{ domain }</Card.Title>
					<Card.Subtitle>
						<Spinner animation="border" role="status"></Spinner>
					</Card.Subtitle>
			</Card.Body>
		</Card>
		)
	} else if(avail === 1) {
	return (
		<Card id="result-entry">
			<Card.Body>
				<Card.Title>{ domain }</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Available</Card.Subtitle>
				<Card.Text>URL is available for registration</Card.Text>
			</Card.Body>
		</Card>
		)
	} else { 
	return (
		<Card id="result-entry">
			<Card.Body>
				<Card.Title>{ domain }</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Unavailable</Card.Subtitle>
				<Card.Text>URL is unavailable for registration</Card.Text>
			</Card.Body>
		</Card>
		)
	}
}


export default Entry
