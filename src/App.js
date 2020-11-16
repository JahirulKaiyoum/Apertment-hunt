import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/Home/HomePage/HomePage";
import Bookings from "./components/Bookings/Bookings";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/details">
          <h1>Details</h1>
        </Route>
        <Route path="/bookings">
          <Bookings></Bookings>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
