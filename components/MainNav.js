import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function MainNav() {
    return (
        <>
            <Navbar className="fixed-top navbar-dark bg-primary">
                <Container>
                    <Navbar.Brand>Zeeshaun Ahmad</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/search" passHref legacyBehavior>
                            <Nav.Link>Advanced Search</Nav.Link>
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}
