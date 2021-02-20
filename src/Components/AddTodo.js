import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "../Containers/Container";
import { db } from "../firebase";
import { useAuth } from "../hoc/AuthenticationProvider";

const AddTodo = () => {
    const [date, changeDate] = useState(new Date());
    const [todoText, changeTodoText] = useState("");
    const [priority, changePriority] = useState("");
    const [loading, changeLoading] = useState(false);
    const { currentUser } = useAuth();
    const priorities = {
        High: "danger",
        Average: "warning",
        Low: "success",
    };
    const handleSubmit = (e) => {
        changeLoading(true);
        e.preventDefault();
        const cT = new Date();

        const uniqueTimeStamp = `${cT.getDate()}-${
            cT.getMonth() + 1
        }-${cT.getFullYear()}t${cT.toLocaleTimeString()}`;

        db.collection("users")
            .doc(currentUser.uid)
            .set(
                {
                    [uniqueTimeStamp]: {
                        text: todoText,
                        priority: priority,
                        date: date.toLocaleDateString(),
                        done: false,
                        timeStamp: uniqueTimeStamp,
                    },
                },
                { merge: true }
            )
            .then(() => {
                changeLoading(false);
            })
            .catch((er) => {
                console.error("Error occured: ", er.message);
            });
    };
    const handleRadioButton = (e) => {
        changePriority(priorities[e.target.value]);
    };

    const handleTextChange = (e) => {
        changeTodoText(e.target.value);
    };
    return (
        <Container>
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
                <Button type="submit" onClick={handleSubmit} disabled={loading}>
                    Add ToDo
                </Button>
            </Form>
        </Container>
    );
};

export default AddTodo;
