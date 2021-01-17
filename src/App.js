import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Docs from './pages/Docs';
import Features from './pages/Features';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/docs">
          <Docs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
