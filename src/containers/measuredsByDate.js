import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMeasureds } from '../redux/actions';
import { FilterByDate } from '../helpers/filters';
import MeasuredByDate from '../components/measuredByDate';

const MeasuredsByDate = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { date } = useParams();

  useEffect(() => {
    dispatch(fetchMeasureds(state.user.id));
  }, []);

  const renderFilteredMeasureds = () => {
    if (state.measureds.loading) {
      return <h1>loading...</h1>;
    }

    const filterdByDate = FilterByDate(state.measureds.items, date);

    return filterdByDate.map((measured, index) => (
      <MeasuredByDate
        name={state.measurements[measured.measurement_id].name}
        measured={measured.value}
        unit={state.measurements[measured.measurement_id].unit}
        progressVal={70}
        icon={state.measurements[measured.measurement_id].icon}
        key={measured.id || index}
      />
    ));
  };
  return (
    <div className="measureds-by-date">{ renderFilteredMeasureds() }</div>
  );
};

const mapStateToProps = (state) => ({
  filteredMeasureds: state.filteredMeasureds,
});

export default connect(mapStateToProps)(MeasuredsByDate);
