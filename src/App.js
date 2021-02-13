import "./App.css";
import Calendar from "./Components/Calendar";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import { Container } from "react-bootstrap";
import Todo from "./Components/Todo";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";
import { AuthProvider } from "./hoc/AuthenticationProvider";

function App() {
    // console.log(new Date().toDateString());

    return (
        <Container>
            <AuthProvider>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/forgotPassword">
                        <ResetPassword />
                    </Route>
                </Switch>
            </AuthProvider>

            {/* <Todo /> */}
            {/* <AddTodo /> */}
            {/* <Calendar /> */}
        </Container>
    );
}

export default App;
