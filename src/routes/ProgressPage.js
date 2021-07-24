import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FooterNav from '../components/footerNav';
import Progress from '../components/progress';
import { fetchfilterByMeasurementIdMeasureds, fetchGoals } from '../redux/actions';
import MeasuredsSelector from '../components/measuerdsSelector';
import progProps from '../helpers/progressData';

const ProgressPage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mid } = useParams();

  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
    dispatch(fetchGoals(state.user.id));
  }, []);

  const myFilteredMeasureds = state.filteredMeasureds.filtered_measureds[mid - 1];
  console.log(myFilteredMeasureds);
  const { goals } = state.filteredMeasureds;
  const myProps = progProps(myFilteredMeasureds, goals, mid);

  if (state.filteredMeasureds.filtered_measureds.length > 0) {
    return (
      <div className="measurement-page">
        <header className="measurement-page-header">
          <h3>Progress Report</h3>
        </header>
        <Progress
          progressVal={myProps.progressVal}
          togo={myProps.togo}
          day={myProps.day}
          measureds={myProps.measureds}
          baseline={myProps.baseline}
          goalValue={myProps.goalValue}
          measurementName={state.measurements[mid - 1].name}
          current={myProps.current}
          score={myProps.score}
          measurementUnit={state.measurements[mid - 1].unit}
          maxVal={myProps.maxVal}
        />
        <MeasuredsSelector measurements={state.measurements} classVar="progress-measureds-selector" />
        <FooterNav user={state.user} />
      </div>
    );
  }

  return <h3>No list</h3>;
};

ProgressPage.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
  filteredMeasureds: state.filteredMeasureds,
});

export default connect(mapStateToProps)(ProgressPage);
