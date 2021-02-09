import React from "react";
import { Dropdown, Form, FormLabel, Row, Button } from "react-bootstrap";
import NavBar from "./Nav";

export default function Login() {
    return (
        <Row
            className="justify-content-center align-items-center"
            md={3}
            style={{ height: "100vh" }}>
            <Form>
                <h2>Login Form</h2>
                <Form.Group>
                    <FormLabel>Your login:</FormLabel>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <FormLabel>Your password:</FormLabel>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"></Form.Control>
                </Form.Group>
                <div className="w-100 text-center mt-2">
                    <a href="#">Sign up</a>
                </div>
                <Button>Log-In</Button>
            </Form>
        </Row>
    );
}
