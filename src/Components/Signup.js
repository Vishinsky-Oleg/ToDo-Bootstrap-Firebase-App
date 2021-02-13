import React, { useState } from "react";
import { Dropdown, Form, FormLabel, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

export default function SignUp() {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [confirmPassword, changeConfirmPassword] = useState("");
    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const userCredentials = await signup(email, password);
        console.log(userCredentials.user.uid);
    }

    return (
        <Row
            className="justify-content-center align-items-center"
            md={3}
            style={{ height: "100vh" }}>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Sign-Up Form</h2>
                        <Form.Group>
                            <FormLabel>Your login:</FormLabel>
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
                        <Form.Group>
                            <FormLabel>Confirm your password:</FormLabel>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password again"
                                value={confirmPassword}
                                onChange={(e) =>
                                    changeConfirmPassword(e.target.value)
                                }></Form.Control>
                        </Form.Group>
                        <div className="w-100 text-center mt-2">
                            Already have an account?{" "}
                            <Link to="/login"> Log In</Link>
                        </div>
                        <Button
                            type="submit"
                            className="justify-content-center w-100 mt-4">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}
