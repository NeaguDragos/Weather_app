import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="header-custom" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Weather React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;