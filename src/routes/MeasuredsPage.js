import React from 'react';
import { connect, useSelector } from 'react-redux';
import FooterNav from '../components/footerNav';
import Measureds from '../containers/measureds';

const MeasuredsPage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>Measureds</h3>
      </header>
      <Measureds />
      <FooterNav user={state.user} />
    </div>
  );
};

MeasuredsPage.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MeasuredsPage);
