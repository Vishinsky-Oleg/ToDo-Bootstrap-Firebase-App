import React, { useState } from "react";
import { Form, FormLabel, Row, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../hoc/AuthenticationProvider";

const ResetPassword = () => {
    const [email, changeEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const { resetPassword } = useAuth();
    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await resetPassword(email);
            setSuccess("Check your inbox for further instructions");
        } catch {
            setError("Reseting password failed");
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
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Reset password</h2>
                        {success && <Alert variant="success">{success}</Alert>}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group>
                            <FormLabel>Your Email:</FormLabel>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}></Form.Control>
                        </Form.Group>
                        <Button
                            disabled={loading}
                            type="submit"
                            className="justify-content-center w-100 mt-4">
                            Reset
                        </Button>
                        <div className="w-100 text-center mt-4">
                            <Link to="/login">Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
};

export default ResetPassword;
