import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/Home/HomePage/HomePage';
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home"> 
          <HomePage></HomePage>
      </Route>
        <Route exact path="/">
        <HomePage></HomePage>
        </Route>
        <Route path="*">
          
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
