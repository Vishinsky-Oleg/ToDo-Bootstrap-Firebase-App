import React from "react";
import { Navbar, Button, Nav} from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
            <Navbar.Brand>My ToDo's</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="mr-3">
                        Add ToDo
                    </Nav.Link>
                    <Nav.Link href="#features" className="mr-3">
                        Current ToDo's
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="mr-3">
                        Calendar
                    </Nav.Link>
                </Nav>
                <Button variant="outline-info">Login</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}
