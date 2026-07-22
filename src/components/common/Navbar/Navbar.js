import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="primary" variant='dark' className="px-3 rounded">

        <Navbar.Brand as={NavLink} to='/'>Blog.app</Navbar.Brand>

        <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/post/add">Add post</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>

    </Navbar>
  );
}

export default NavBar;