import React, { useState } from "react";
import { Dropdown, Form, FormLabel, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import NavBar from "./Nav";

export default function Login() {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    };

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(
            (userCredentials) => {
                var user = userCredentials.user;
                console.log(user);
            }
        );
    };

    const handlePasswordChange = (e) => {
        changePassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Row
            className="justify-content-center align-items-center"
            md={3}
            style={{ height: "100vh" }}>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Reset password</h2>
                        <Form.Group>
                            <FormLabel>Your Email:</FormLabel>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}></Form.Control>
                        </Form.Group>
                        <Button
                            onClick={handleSignUp}
                            className="justify-content-center w-100 mt-4">
                            Reset
                        </Button>
                        <div className="w-100 text-center mt-4"><Link to="/login">Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}
