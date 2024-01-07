import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import CreateAccount from "./Components/FormikForm/Registration/CreateAccount";
import loginAccount from "./Components/FormikForm/login/loginAccount";

const navLinkStyle = (IsActive) => ({ color: IsActive ? "green" : "blue" });
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/registration">
              registration
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/login">
              login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/registration" component={CreateAccount} />
      </Switch>
      <Switch>
        <Route path="/login" component={loginAccount} />
      </Switch>
    </Router>
  );
}

export default App;
