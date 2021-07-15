import React from 'react';
// import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import MeasuredsByDate from '../containers/measuredsByDate';
import FooterNav from '../components/footerNav';

const MeasuredsByDatePage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>Track.It</h3>
      </header>
      <MeasuredsByDate />
      <FooterNav user={state.user} />
    </div>
  );
};

MeasuredsByDatePage.defaultProps = {
  user: null,
  measurements: [],
};

const mapStateToProps = (state) => ({
  user: state.user,
  measurements: state.measurements,
});

export default connect(mapStateToProps)(MeasuredsByDatePage);
