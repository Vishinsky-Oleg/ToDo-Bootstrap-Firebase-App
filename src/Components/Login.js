import React, { useState } from "react";
import { Form, FormLabel, Row, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

export default function Login() {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            await login(email, password);
            history.push("/");
        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
    }

    const handleEmail = (e) => {
        changeEmail(e.target.value);
    };

    const handlePassword = (e) => {
        changePassword(e.target.value);
    };

    return (
        <Row
            className="justify-content-center align-items-center"
            md={3}
            style={{ height: "100vh" }}>
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Login Form</h2>
                        <Form.Group>
                            <FormLabel>Your Email:</FormLabel>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmail}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel>Your password:</FormLabel>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePassword}></Form.Control>
                        </Form.Group>
                        <div className="w-100 text-center ">
                            <Link to="/forgotPassword">
                                Forgot the password?
                            </Link>
                        </div>
                        <Button
                            className="justify-content-center w-100 mt-4"
                            type="submit"
                            disabled={loading}>
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
