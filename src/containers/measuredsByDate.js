import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMeasureds } from '../redux/actions';
import { FilterByDate } from '../helpers/filters';
import MeasuredByDate from '../components/measuredByDate';
import MeasuredsByDateSelector from '../components/measuredsByDateSelector';
import dateList from '../helpers/getDateList';

const MeasuredsByDate = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { date } = useParams();
  const dates = dateList(state.measureds.measureds);

  useEffect(() => {
    dispatch(fetchMeasureds(state.user.id));
  }, []);

  const renderFilteredMeasureds = () => {
    if (state.measureds.loading) {
      return <h1>loading...</h1>;
    }
    console.log(state.measureds);
    const filterdByDate = FilterByDate(state.measureds.measureds, date);

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
    <div>
      <MeasuredsByDateSelector dates={dates} />
      <div className="measureds-by-date">{ renderFilteredMeasureds() }</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredMeasureds: state.filteredMeasureds,
});

export default connect(mapStateToProps)(MeasuredsByDate);
