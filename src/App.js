import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import CreateAccount from './Components/FormikForm/Registration/CreateAccount'
import loginAccount from './Components/FormikForm/login/loginAccount'
import ToDoApp from './pages/ToDo App'
import styles from './App.module.css'

const navLinkStyle = IsActive => ({ color: IsActive ? 'green' : 'blue' })
function App () {
  return (
    <Router>
      <nav className={styles.Navigation}>
        <ul>
          <li>
            {' '}
            <NavLink exact style={navLinkStyle} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink style={navLinkStyle} to='/registration'>
              registration
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink style={navLinkStyle} to='/login'>
              login
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink style={navLinkStyle} to='/ToDoApp'>
              ToDoApp
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/registration' component={CreateAccount} />
      </Switch>
      <Switch>
        <Route path='/login' component={loginAccount} />
      </Switch>
      <Switch>
        <Route path='/ToDoApp' component={ToDoApp} />
      </Switch>
    </Router>
  )
}

export default App
