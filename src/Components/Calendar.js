import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { db } from "../firebase";
import { useAuth } from "../hoc/AuthenticationProvider";
import { useHistory } from "react-router-dom";
import Container from "../Containers/Container";

const Calendar = () => {
    const [mounted, changeMounted] = useState(true);
    const [todos, changeTodos] = useState([]);
    const { currentUser } = useAuth();
    const dbRef = db.collection("users").doc(currentUser.uid);
    const history = useHistory();

    const handleDateClick = (arg) => {
        history.push(arg.date.toLocaleDateString().replaceAll("/", "-"));
    };

    const pickColor = (priority, done) => {
        const colors = {
            danger: "#b40000",
            warning: "#d1b61c",
            success: "#008000",
        };
        if (done) {
            return "#808080";
        } else {
            return colors[priority];
        }
    };

    useEffect(() => {
        changeMounted(true);
        mounted &&
            (async function getDB() {
                let query = (await dbRef.get()).data();
                if (query) {
                    const processedQuery = Object.entries(query)
                        .map((instance) => {
                            let O = {
                                ...instance[1],
                                timeStamp: instance[0],
                            };
                            return O;
                        })
                        .map((todo) => {
                            let date = todo.date.split("/");
                            const formattedDate = `${date[2]}-${
                                date[0].length < 2 ? `0${date[0]}` : date[0]
                            }-${date[1].length < 2 ? `0${date[1]}` : date[1]}`;
                            return {
                                title: todo.text,
                                date: formattedDate,
                                backgroundColor: pickColor(
                                    todo.priority,
                                    todo.done
                                ),
                            };
                        });
                    changeTodos(processedQuery);
                }
            })();
        return () => changeMounted(false);
    }, []);
    return (
        <Container>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                eventColor="#378006"
                dayMaxEventRows={true}
                events={todos}
                // moreLinkContent={(args) => {
                //     return `+${args.num}`;
                // }}
            />
        </Container>
    );
};

export default Calendar;
