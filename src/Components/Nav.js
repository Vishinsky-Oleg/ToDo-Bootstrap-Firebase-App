import React from "react";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

const NavBar = () => {
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
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>My ToDo's</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/addTodo">
                        <Nav.Link className="mr-3">Add ToDo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/" exact>
                        <Nav.Link className="mr-3">Current ToDo's</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/calendar">
                        <Nav.Link className="mr-3">Calendar</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <NavDropdown title={currentUser.email}>
                        <Link to="/updateProfile" style={{ padding: 15 }}>
                            Update profile
                        </Link>
                    </NavDropdown>
                </Nav>
                <Button variant="outline-info" onClick={handleLogout}>
                    Log Out
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
