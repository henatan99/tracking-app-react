import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import FooterNav from '../components/footerNav';
import Progress from '../components/progress';
import { fetchfilterByMeasurementIdMeasureds, fetchGoals } from '../redux/actions';

const ProgressPage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
    dispatch(fetchGoals(state.user.id));
  }, []);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>Progress Report</h3>
      </header>
      <Progress
        progressVal={40}
        togo={10}
        day={8}
        measureds={[15, 20, 30, 44]}
        baseline={12}
        goalValue={50}
        measurementName="BP"
        current={22}
        score={60}
      />
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
