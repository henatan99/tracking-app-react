import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchfilterByMeasurementIdMeasureds } from '../redux/actions';
import MeasuredByDate from '../components/measuredByDate';

const MeasuredsByDate = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
  }, []);

  const renderFilteredMeasureds = () => {
    if (state.filteredMeasureds.loading) {
      return <h1>loading...</h1>;
    }

    return state.filteredMeasureds.items.map((measuredArr, index) => (
      <MeasuredByDate
        name={measuredArr.length < 1 ? '' : state.measurements[measuredArr[0].measurement_id].name}
        measured={measuredArr.length < 1 ? null : measuredArr[0].value}
        unit={measuredArr.length < 1 ? '' : state.measurements[measuredArr[0].measurement_id].unit}
        progressVal={70}
        icon={measuredArr.length < 1 ? '' : state.measurements[measuredArr[0].measurement_id].icon}
        key={measuredArr.length < 1 ? index : measuredArr[0].id}
      />
    ));
  };
  return (
    <div>{ renderFilteredMeasureds() }</div>
  );
};

const mapStateToProps = (state) => ({
  filteredMeasureds: state.filteredMeasureds,
});

export default connect(mapStateToProps)(MeasuredsByDate);
