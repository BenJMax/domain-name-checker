import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/esm/Container'
import { ReactFragment } from 'react'

const Header = () => {

    return (
        <>
            <Navbar>
                <Container >
                    <Navbar.Brand>
                        <img 
                            src="https://react-bootstrap.github.io/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header