import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchfilterByMeasurementIdMeasureds } from '../redux/actions';
import Measured from '../components/measured';
import MeasuredsSelector from '../components/measuerdsSelector';
import progress from '../helpers/calculate';
import formattedDate from '../helpers/dateFormat';

const Measureds = () => {
  const dispatch = useDispatch();
  const { mid } = useParams();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
  }, []);

  const renderMeasureds = () => {
    if (state.filteredMeasureds.loading || state.goals.loading) {
      return <h1>loading...</h1>;
    }

    console.log(state.filteredMeasureds.items);

    if (state.filteredMeasureds.filtered_measureds.length > 0) {
      return state.filteredMeasureds.filtered_measureds[mid - 1].map((measured, index) => (
        <Measured
          name={state.measurements[measured.measurement_id - 1].name}
          date={measured.created_at}
          fDate={formattedDate(measured.created_at)}
          measured={measured.value}
          diff={
            index > 1 ? measured.value - state.filteredMeasureds.filtered_measureds[
              state.filteredMeasureds.filtered_measureds.length - 1
            ].value : 0
          }
          progressVal={progress(
            // state.filteredMeasureds.goals.find(
            //   (goal) => goal.measurement_id === mid,
            // ) ? state.filteredMeasureds.goals.find(
            //   (goal) => goal.measurement_id === mid,
            // ).quantity : 0,
            16,
            mid,
            measured.value,
            state.filteredMeasureds.filtered_measureds[0],
          )}
          userId={state.user.id}
          unit={state.measurements[measured.measurement_id - 1].unit}
          key={measured.id || index}
        />
      ));
    }

    return <h3>No list</h3>;
  };
  return (
    <div className="measureds-wrapper">
      <div className="measureds-list">{ renderMeasureds() }</div>
      <MeasuredsSelector
        user={state.user}
        measurements={state.measurements}
        classVar="measureds-selector"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  measureds: state.measureds,
});

export default connect(mapStateToProps)(Measureds);
