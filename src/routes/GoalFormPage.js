import React from 'react';
import { connect, useSelector } from 'react-redux';
import GoalForm from '../containers/goalForm';
import FooterNav from '../components/footerNav';

const GoalFormPage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>More</h3>
      </header>
      <GoalForm user={state.user} measurements={state.measurements} />
      <FooterNav user={state.user} />
    </div>
  );
};

GoalFormPage.defaultProps = {
  user: null,
  measurements: [],
};

const mapStateToProps = (state) => ({
  user: state.user,
  measurements: state.measurements,
});

export default connect(mapStateToProps)(GoalFormPage);
