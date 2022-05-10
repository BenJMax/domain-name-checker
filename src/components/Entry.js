import Card from 'react-bootstrap/Card'

const Entry = ({ title }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{ title }</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Available</Card.Subtitle>
				<Card.Text>Response payload</Card.Text>
			</Card.Body>
		</Card>
	)
}


export default Entry
