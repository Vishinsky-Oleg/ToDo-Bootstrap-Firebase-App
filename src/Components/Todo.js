import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "../hoc/AuthenticationProvider";
import firebase from "firebase/app";

import "firebase/firestore";
import Container from "../Containers/Container";

const Todo = (props) => {
    const [todos, changeTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();
    const dbRef = db.collection("users").doc(currentUser.uid);
    const dateToGet = props.dynamic
        ? props.match.url.replace("/", "").replaceAll("-", "/")
        : new Date().toLocaleDateString();

    const priorities = {
        danger: "High",
        warning: "Average",
        success: "Low",
    };

    const updateTodo = (todo) => {
        setLoading(true);
        const updatedTodos = todos.map((i) => {
            if (i.timeStamp === todo.timeStamp) {
                return { ...i, done: !i.done };
            }
            return i;
        });
        changeTodos(updatedTodos);
        dbRef
            .update({
                [todo.timeStamp]: {
                    ...todo,
                    done: !todo.done,
                },
            })
            .then(() => {
                setLoading(false);
            });
    };

    const handleDelete = (timeStamp) => {
        setLoading(true);
        const updatedTodos = todos.filter(
            (todo) => todo.timeStamp !== timeStamp && todo
        );
        changeTodos(updatedTodos);
        dbRef
            .update({
                [timeStamp]: firebase.firestore.FieldValue.delete(),
            })
            .then(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        (async function getDB() {
            let query = (await dbRef.get()).data();
            if (query) {
                const processedQuery = Object.entries(query)
                    .filter(
                        (instance) => instance[1].date === dateToGet && instance
                    )
                    .map((instance) => {
                        let O = {
                            ...instance[1],
                            timeStamp: instance[0],
                        };
                        return O;
                    });
                changeTodos(processedQuery);
            }
        })();
    }, []);

    let list = [];
    if (todos.length > 0) {
        list = todos.map((todo, index) => {
            let classes = ["m-3"];
            todo.done && classes.push("done");
            return (
                <div key={index} className="m-3">
                    <input
                        type="checkbox"
                        name="todo"
                        id={`todo${index}`}
                        className="d-inline"
                        onChange={() => updateTodo(todo)}
                        checked={todo.done}
                        disabled={loading}
                    />
                    <label
                        htmlFor={`todo${index}`}
                        className={classes.join(" ")}>
                        {todo.text}
                    </label>
                    <Badge variant={todo.priority} className="ml-2 mr-3">
                        {priorities[todo.priority]}
                    </Badge>
                    <Button
                        variant="dark"
                        disabled={loading}
                        onClick={() => handleDelete(todo.timeStamp)}>
                        Delete
                    </Button>
                </div>
            );
        });
    }

    return (
        <Container>
            {list.length > 0 ? (
                <div>
                    <h2>Todo's for {dateToGet}</h2>
                    {list}
                </div>
            ) : (
                <h1> No ToDo's for {dateToGet}</h1>
            )}
        </Container>
    );
};

export default Todo;
