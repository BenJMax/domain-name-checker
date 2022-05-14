import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import gitHub from '../../assets/github.png' 

const Footer = (props) => {
	return (
		<Container fluid className="page-footer fixed-bottom justify-content-center my-3">
			<Row className="text-center text-dark">
				<Col>
					<a id="footer-text-link" href='#home'>
						Home
					</a>
					<a id="footer-icon-link">
						<img id ="footer-icon" src={ gitHub } alt='GitHub' /> 
					</a>
				</Col>
			</Row>
		</Container>
	)	
}


export default Footer 
