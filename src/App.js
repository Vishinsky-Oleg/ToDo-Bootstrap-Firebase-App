import "./App.css";
import Calendar from "./Components/Calendar";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import { Container } from "react-bootstrap";
import Todo from "./Components/Todo";
import Login from "./Components/Login";

function App() {
    // console.log(new Date().toDateString());

    return (
        <Container>
            <Login />
            {/* <Todo /> */}
            {/* <AddTodo /> */}
            {/* <Calendar /> */}
        </Container>
    );
}

export default App;
