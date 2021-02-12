import React, { useState } from "react";
import { Dropdown, Form, FormLabel, Row, Button } from "react-bootstrap";
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
                <div className="w-100 text-center mt-2">
                    <a href="#">Sign up</a>
                </div>
                <Button onClick={handleSignUp}>Log-In</Button>
            </Form>
        </Row>
    );
}
