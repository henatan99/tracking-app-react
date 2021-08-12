import React from 'react';
import { connect, useSelector } from 'react-redux';
import FooterNav from '../components/footerNav';
import ProgressCont from '../containers/progressCont';

const ProgressPage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>Progress Report</h3>
      </header>
      <ProgressCont />
      <FooterNav user={state.user} />
    </div>
  );
};

ProgressPage.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProgressPage);
