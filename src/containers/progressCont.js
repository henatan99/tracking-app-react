import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchfilterByMeasurementIdMeasureds } from '../redux/actions';
import Progress from '../components/progress';
import MeasuredsSelector from '../components/measuerdsSelector';
import { progProps } from '../helpers/progressData';

const ProgressCont = () => {
  const dispatch = useDispatch();
  const { mid } = useParams();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
  }, []);

  const renderProgress = () => {
    if (state.filteredMeasureds.loading || state.goals.loading) {
      return (
        <div className="loader-div">
          <span className="loader" />
        </div>
      );
    }

    if (state.filteredMeasureds.filtered_measureds.length > 0) {
      const myFilteredMeasureds = state.filteredMeasureds.filtered_measureds[mid - 1];
      const { goals } = state.filteredMeasureds;
      const myProps = progProps(myFilteredMeasureds, goals, mid);

      return (
        <Progress
          progressVal={Math.round(myProps.progressVal)}
          togo={Math.round(myProps.togo)}
          day={Math.round(myProps.day)}
          data={myProps.getData}
          baseline={Math.round(myProps.baseline)}
          goalValue={Math.round(myProps.goalValue)}
          measurementName={state.measurements[mid - 1].name}
          current={myProps.current}
          score={Math.round(myProps.score * 100)}
          measurementUnit={state.measurements[mid - 1].unit}
          maxVal={Math.round(myProps.maxVal)}
        />
      );
    }

    return <h3>No list</h3>;
  };
  return (
    <div className="measureds-wrapper">
      <div className="measureds-list">{ renderProgress() }</div>
      <MeasuredsSelector
        user={state.user}
        measurements={state.measurements}
        classVar="measureds-selector"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredMeasureds: state.filteredMeasureds,
  measurements: state.measurements,
});

export default connect(mapStateToProps)(ProgressCont);
