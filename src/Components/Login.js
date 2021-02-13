import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Form, FormLabel, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

export default function Login() {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).then((userCredentials) => {
            var user = userCredentials.user;
            console.log(user.uid);
        });
    };

    return (
        <Row
            className="justify-content-center align-items-center"
            md={3}
            style={{ height: "100vh" }}>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Login Form</h2>
                        <Form.Group>
                            <FormLabel>Your Email:</FormLabel>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    changeEmail(e.target.value)
                                }></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel>Your password:</FormLabel>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    changePassword(e.target.value)
                                }></Form.Control>
                        </Form.Group>
                        <div className="w-100 text-center ">
                            <Link to="/forgotPassword">
                                Forgot the password?
                            </Link>
                        </div>
                        <Button
                            className="justify-content-center w-100 mt-4"
                            type="submit">
                            Log-In
                        </Button>
                        <div className="w-100 text-center mt-4">
                            Need an account? <Link to="/signup"> Sign up</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}
