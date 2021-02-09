import React, { Component } from "react";
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

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list,
        };
    }

    render() {
        const todoArray = this.state.list.map((todo, index) => {
            console.log(todo.todos.text);
            return (
                <div key={index}>
                    <h2>{todo.date.toLocaleString()}</h2>
                    {todo.todos.map((t, index) => {
                        const classes = ["d-inline"];
                        t.done && classes.push("done");
                        return (
                            <div ket={index}>
                                <input
                                    type="checkbox"
                                    name="todo"
                                    className="d-inline"
                                    checked={t.done}
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
                    <div>{todoArray}</div>
                <Footer />
            </>
        );
    }
}
