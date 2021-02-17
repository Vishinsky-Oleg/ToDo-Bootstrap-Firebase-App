import React from "react";
import FullCalendar from "@fullcalendar/react";
// import DatePicker from "react-date-picker";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import NavBar from "./Nav";
import Footer from "./Footer";

export default function Calendar() {
    const handleDateClick = (arg) => {
        // alert(arg.date);
        console.log(arg);
    };

    const date = new Date();
    console.log(date);
    return (
        <>
            <NavBar />
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                // height="600px"
                // contentHeight="100px"
                eventColor="#378006"
                dayMaxEventRows={true}
                events={[
                    {
                        title: "myEvent",
                        date,
                        // end: "2021-02-07T11:30:00",
                        backgroundColor: "rgba(5,30,55, .5)",
                        done: true,
                    },
                    { title: "myEvent", date: "2021-02-09" },
                    { title: "myEvent", date: "2021-02-09" },
                    {
                        title: "SuperEvent",
                        date: "2021-02-09",
                        backgroundColor: "rgba(5,30,55, .3)",
                    },
                    { title: "myEvent", date: "2021-02-09" },
                    { title: "myEvent", date: "2021-02-09" },
                    { title: "myEvent", date: "2021-02-09" },
                ]}
            />
            <Footer />
        </>
    );
}
