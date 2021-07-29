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
      return (
        <div className="loader-div">
          <span className="loader" />
        </div>
      );
    }
    const filterdByDate = FilterByDate(state.measureds.measureds, date);

    return filterdByDate.map((measured, index) => (
      <MeasuredByDate
        name={state.measurements[measured.measurement_id].name}
        measured={measured.value}
        unit={state.measurements[measured.measurement_id].unit}
        icon={state.measurements[measured.measurement_id].icon}
        userId={state.user.id}
        measurementId={measured.measurement_id}
        key={measured.id || index}
      />
    ));
  };
  return (
    <div className="measureds-by-date-wrapper">
      <MeasuredsByDateSelector dates={dates} />
      <div className="measureds-by-date">{ renderFilteredMeasureds() }</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredMeasureds: state.filteredMeasureds,
});

export default connect(mapStateToProps)(MeasuredsByDate);
