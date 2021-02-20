import "./App.css";
import Calendar from "./Components/Calendar";
import AddTodo from "./Components/AddTodo";
import { Container } from "react-bootstrap";
import Todo from "./Components/Todo";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";
import { AuthProvider } from "./hoc/AuthenticationProvider";
import PrivateRoute from "./hoc/PrivateRoute";
import UpdateProfile from "./Components/UpdateProfile";

function App() {
    return (
        <Container>
            <AuthProvider>
                <Switch>
                    <PrivateRoute path="/" exact>
                        <Todo />
                    </PrivateRoute>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <PrivateRoute path="/login" exact>
                        <Login />
                    </PrivateRoute>
                    <Route path="/forgotPassword">
                        <ResetPassword />
                    </Route>
                    <Route path="/updateProfile">
                        <UpdateProfile />
                    </Route>
                    <PrivateRoute path="/addTodo" exact>
                        <AddTodo />
                    </PrivateRoute>
                    <PrivateRoute path="/calendar" exact>
                        <Calendar />
                    </PrivateRoute>
                    <Route
                        path="/:date"
                        render={(props) => <Todo dynamic={true} {...props} />}
                    />
                </Switch>
            </AuthProvider>
        </Container>
    );
}

export default App;
