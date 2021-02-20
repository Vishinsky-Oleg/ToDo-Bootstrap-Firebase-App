import React, { useState, useEffect } from "react";
import { Form, FormLabel, Row, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

const SignUp = () => {
    const [mounted, changeMounted] = useState(true);
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [confirmPassword, changeConfirmPassword] = useState("");
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        changeMounted(true);

        return () => {
            changeMounted(false);
        };
    },[]);

    const handleEmailChange = (e) => {
        mounted && changeEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        mounted && changePassword(e.target.value);
    };

    const handlePasswordConfirmChange = (e) => {
        mounted && changeConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password);
            history.push("/");
        } catch (e) {
            setError(e.toString());
        }
        setLoading(false);
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
                        <h2 className="text-center mb-4">Sign-Up Form</h2>
                        <Form.Group>
                            <FormLabel>Your Email:</FormLabel>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel>Your password:</FormLabel>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel>Confirm your password:</FormLabel>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password again"
                                value={confirmPassword}
                                onChange={
                                    handlePasswordConfirmChange
                                }></Form.Control>
                        </Form.Group>
                        <div className="w-100 text-center mt-2">
                            Already have an account?{" "}
                            <Link to="/login"> Log In</Link>
                        </div>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="justify-content-center w-100 mt-4">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
};

export default SignUp;
