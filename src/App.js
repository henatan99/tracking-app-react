import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './App.css';
import SignupPage from './routes/SignupPage';
import LoginPage from './routes/LoginPage';
import MeasurementPage from './routes/MeasurementPage';
import MorePage from './routes/MorePage';
import ProgressPage from './routes/ProgressPage';
import TrackPage from './routes/TrackPage';
import MeasuredsByDate from './routes/MeasuredsByDatePage';
import GoalFormPage from './routes/GoalFormPage';
import Home from './routes/Home';
import { saveState } from './redux/services/localStorage';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://pure-tundra-23506.herokuapp.com/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          saveState(data.user, 'user');
          saveState(data.measurements, 'measurements');
        });
    }
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/:id/measurement" exact component={MeasurementPage} />
          <Route path="/:id/track/:mid" exact component={TrackPage} />
          <Route path="/:id/progress/:mid" exact component={ProgressPage} />
          <Route path="/:id/more" exact component={MorePage} />
          <Route path="/:id/measureds_by_date/:date" exact component={MeasuredsByDate} />
          <Route path="/:id/setgoal" exact component={GoalFormPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
