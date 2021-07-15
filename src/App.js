import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom';
import './App.css';
import LoginPage from './routes/LoginPage';
import MeasurementPage from './routes/MeasurementPage';
import MorePage from './routes/MorePage';
import ProgressPage from './routes/ProgressPage';
import TrackPage from './routes/TrackPage';
import MeasuredsByDate from './routes/MeasuredsByDatePage';

function App() {
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!state.user) {
      history.push('/');
    }
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/:id/measurement" exact component={MeasurementPage} />
          <Route path="/:id/track" exact component={TrackPage} />
          <Route path="/:id/progress" exact component={ProgressPage} />
          <Route path="/:id/more" exact component={MorePage} />
          <Route path="/:id/measureds_by_date" exact component={MeasuredsByDate} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// export default App;
export default connect(mapStateToProps)(App);
