import React from "react";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

export default function NavBar() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const handleLogout = async () => {
        try {
            await logout();
            history.push("/login");
        } catch (e) {
            throw new Error(e);
        }
    };
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
                <Nav>
                    <NavDropdown title={currentUser.email}>
                        <NavDropdown.Item>
                            <Link to="/changePassword"></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant="outline-info" onClick={handleLogout}>
                    Log Out
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}
