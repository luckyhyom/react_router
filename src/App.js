import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path={['','/home']} exact>
        <Home/>
      </Route>
      <Route path="/profile" exact>
        <Profile/>
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
