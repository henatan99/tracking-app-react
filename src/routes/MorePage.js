import React from 'react';
import { connect, useSelector } from 'react-redux';
import FooterNav from '../components/footerNav';

const MeasurementPage = () => {
  const state = useSelector((state) => state);
  console.log(state.user);
  console.log(state.measurements);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>More</h3>
      </header>
      <FooterNav user={state.user} />
    </div>
  );
};

MeasurementPage.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MeasurementPage);
