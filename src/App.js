import React from 'react';
// import { connect, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './routes/LoginPage';
import MeasurementPage from './routes/MeasurementPage';

function App() {
  // const state = useSelector((state) => state);
  // const { user } = state.user;
  // const { measurements } = state.measurements;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/:id/measurement" exact component={MeasurementPage} />
        </Switch>
      </div>
    </Router>
  );
}

// const mapStateToProps = (state) => ({
//   user: state.user,
//   // measurements: state.measurements,
// });
export default App;
// export default connect(mapStateToProps)(App);
