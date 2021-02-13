import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "../hoc/AuthenticationProvider";
import Footer from "./Footer";
import NavBar from "./Nav";

const list = [
    {
        date: new Date(2021, 12, 8).toLocaleDateString(),
        todos: [
            {
                text: "Todo 1",
                backgroundColor: "#22c619",
                done: true,
            },
            {
                text: "Todo 23235235",
                backgroundColor: "#22c619",
                done: true,
            },
        ],
    },
    {
        date: new Date(2021, 12, 15).toLocaleDateString(),
        todos: [
            {
                text: "Todo 1",
                backgroundColor: "#ff0019",
                done: false,
            },
        ],
    },
];

const Todo = (props) => {
    const [todos, changeTodos] = useState(list);
    const { currentUser, logout } = useAuth();

    useEffect(() => {
        (async function getDB() {
            let query = await db.collection("users").get();
            // console.log(query);
            query.forEach((name) => {
                console.log(name.data());
            });
        })();
    });

    const todosArray = todos.map((todo, index) => {
        return (
            <div key={index}>
                <h2>{todo.date.toLocaleString()}</h2>
                {todo.todos.map((t, index) => {
                    const classes = ["d-inline"];
                    t.done && classes.push("done");
                    return (
                        <div key={index}>
                            <input
                                type="checkbox"
                                name="todo"
                                className="d-inline"
                                // checked={t.done}
                            />
                            <p
                                className={classes.join(" ")}
                                style={{ color: t.backgroundColor }}>
                                {t.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    });
    return (
        <>
            <NavBar />
            <div>{todosArray}</div>
            <Button
                onClick={() => {
                    console.log(currentUser.uid);
                }}>
                Show Current user
            </Button>
            <Footer />
        </>
    );
};

export default Todo;
