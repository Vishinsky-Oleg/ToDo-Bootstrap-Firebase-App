import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../firebase";
import Footer from "./Footer";
import NavBar from "./Nav";

const AddTodo = (props) => {
    const [date, changeDate] = useState(new Date());
    const [todoText, changeTodoText] = useState("");
    const [priority, changePriority] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("users")
            .doc("user1")
            .set(
                {
                    [new Date().toLocaleString()]: {
                        text: todoText,
                        priority: priority,
                        date: date.toLocaleDateString(),
                    },
                },
                { merge: true }
            )
            .catch((er) => {
                console.error("Error occured: ", er);
            });
    };
    const handleRadioButton = (e) => {
        changePriority(e.target.value);
    };

    const handleTextChange = (e) => {
        changeTodoText(e.target.value);
    };
    return (
        <>
            <NavBar />
            <Form className="mt-4 mb-4">
                <Form.Group>
                    <Form.Label>Date:</Form.Label>

                    <DatePicker
                        onChange={changeDate}
                        min={new Date()}
                        required
                        selected={date}
                    />
                    <Form.Text className="text-muted">
                        Input date of your 'ToDo' task
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Text:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        required
                        value={todoText}
                        onChange={handleTextChange}></Form.Control>
                    <Form.Text className="text-muted">
                        Input your 'ToDo' task
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose priority of your 'ToDo'</Form.Label>
                    <Form.Check
                        className="ml-3 text-danger"
                        inline
                        label="High"
                        value="High"
                        type="radio"
                        name="priorityRadios"
                        required
                        onChange={handleRadioButton}
                    />
                    <Form.Check
                        className="text-warning"
                        inline
                        label="Average"
                        value="Average"
                        type="radio"
                        name="priorityRadios"
                        required
                        onChange={handleRadioButton}
                    />
                    <Form.Check
                        className="text-success"
                        inline
                        label="Low"
                        value="Low"
                        type="radio"
                        name="priorityRadios"
                        required
                        onChange={handleRadioButton}
                    />
                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>
                    Add ToDo
                </Button>
            </Form>
            <Footer />
        </>
    );
};

export default AddTodo;
