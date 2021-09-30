import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Add from './Add';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/add">
              <Add/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
