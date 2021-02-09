import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./Nav";

export default class AddTodo extends Component {
    handleDate = (e) => {
        console.log(e.target.value);
    };
    render() {
        const month =
            (new Date().getMonth() + 1).toString().length > 1
                ? (new Date().getMonth() + 1).toString()
                : `0${(new Date().getMonth() + 1).toString()}`;
        const day =
            new Date().getDate().toString().length > 1
                ? new Date().getDate().toString()
                : `0${new Date().getDate().toString()}`;
        const year = new Date().getFullYear().toString();
        return (
            <>
                <NavBar />
                <Form className="mt-4 mb-4">
                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={this.handleDate}
                            pattern="\d{4}-\d{2}-\d{2}"
                            min={`${year}-${month}-${day}`}
                            max={`${parseInt(year) + 1}-${month}-${day}`}
                            required></Form.Control>
                        <Form.Text className="text-muted">
                            Input date of your 'ToDo' task
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Text:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            required></Form.Control>
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
                            type="radio"
                            name="priorityRadios"
                        />
                        <Form.Check
                            className="text-warning"
                            inline
                            label="Average"
                            type="radio"
                            name="priorityRadios"
                        />
                        <Form.Check
                            className="text-success"
                            inline
                            label="Low"
                            type="radio"
                            name="priorityRadios"
                        />
                    </Form.Group>
                    <Button type="submit">Add ToDo</Button>
                </Form>
                <Footer />
            </>
        );
    }
}
