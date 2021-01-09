import logo from './logo.svg';
import './App.css';

import {Home} from './components/Home';
import {Department} from './components/Department';
import {Employee} from './components/Employee';
// importing for routing
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="nav">
        <NavLink className="navbar" to="/">Home  |</NavLink>
        <NavLink className="navbar" to="/department">  Department  |</NavLink>
        <NavLink className="navbar" to="/employee">  Employee</NavLink>
      </div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/department' component={Department} />
        <Route path='/employee' component={Employee} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
