import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MeasuredsByDate from '../containers/measuredsByDate';
import FooterNav from '../components/footerNav';
import formattedDate from '../helpers/dateFormat';

const MeasuredsByDatePage = () => {
  const state = useSelector((state) => state);
  const { date } = useParams();

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>Track.It</h3>
      </header>
      <h1 className="measureds-by-date-date">{ date ? formattedDate(date) : '' }</h1>
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
