import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchfilterByMeasurementIdMeasureds, fetchGoals } from '../redux/actions';
import Measured from '../components/measured';
import MeasuredsSelector from '../components/measuerdsSelector';
// import formattedDate from '../helpers/dateFormat';

const Measureds = () => {
  const dispatch = useDispatch();
  const { mid } = useParams();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
    dispatch(fetchGoals(state.user.id));
  }, []);

  const renderMeasureds = () => {
    if (state.filteredMeasureds.loading || state.goals.loading) {
      return <h1>loading...</h1>;
    }

    console.log(state.filteredMeasureds.items);

    if (state.filteredMeasureds.items.length > 0) {
      const n = state.filteredMeasureds.items.length;
      return state.filteredMeasureds.items[mid - 1].map((measured, index) => (
        <Measured
          name={state.measurements[measured.measurement_id - 1].name}
          // date={formattedDate(measured.created_at)}
          date={measured.created_at}
          measured={measured.value}
          diff={index > 1 ? measured.value - state.filteredMeasureds.items[n - 1].value : 0}
          progressVal={70}
          user={state.user}
          unit={state.measurements[measured.measurement_id - 1].unit}
          key={measured.id || index}
        />
      ));
    }

    return <h3>No list</h3>;
  };
  return (
    <div>
      <div>{ renderMeasureds() }</div>
      <MeasuredsSelector user={state.user} measurements={state.measurements} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  measureds: state.measureds,
});

export default connect(mapStateToProps)(Measureds);
