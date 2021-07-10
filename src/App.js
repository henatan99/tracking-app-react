import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './routes/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/measurement/:id" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
