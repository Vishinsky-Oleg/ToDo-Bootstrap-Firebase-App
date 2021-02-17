import React, { useState } from "react";
import { Form, FormLabel, Row, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";
import Footer from "./Footer";
import Nav from "./Nav";

export default function UpdateProfile() {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [confirmPassword, changeConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const history = useHistory();

    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        changePassword(e.target.value);
    };

    const handlePasswordConfirmChange = (e) => {
        changeConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        const promises = [];

        setLoading(true);
        setError("");

        if (email !== currentUser.email) {
            promises.push(updateEmail(email));
        }

        if (password) {
            promises.push(updatePassword(password));
        }

        Promise.all(promises)
            .then(() => {
                history.push("/");
            })
            .catch((e) => setError(e.toString()))
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <>
            <div
                className="d-flex flex-column justify-content-between"
                // md={3}
                style={{ height: "100vh" }}>
                <Nav />
                <Card style={{ maxWidth: 450, margin: "0 auto" }}>
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <h2 className="text-center mb-4">
                                Update Profile Form
                            </h2>
                            <Form.Group>
                                <FormLabel>New Email:</FormLabel>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleEmailChange}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel>New password:</FormLabel>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={
                                        handlePasswordChange
                                    }></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <FormLabel>
                                    Confirm your new password:
                                </FormLabel>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your new password again"
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
                <Footer />
            </div>
        </>
    );
}
