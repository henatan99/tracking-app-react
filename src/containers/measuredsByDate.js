import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { fetchfilterByMeasurementIdMeasureds } from '../redux/actions';
import { fetchMeasureds } from '../redux/actions';
import { FilterByDate } from '../helpers/filters';
import MeasuredByDate from '../components/measuredByDate';

const MeasuredsByDate = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { date } = useParams();

  useEffect(() => {
    // dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
    dispatch(fetchMeasureds(state.user.id));
  }, []);

  const renderFilteredMeasureds = () => {
    // if (state.filteredMeasureds.loading) {
    //   return <h1>loading...</h1>;
    // }

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
      // <MeasuredByDate
      //   name={measuredArr.length < 1 ? '' :
      // state.measurements[measuredArr[0].measurement_id].name}
      //   measured={measuredArr.length < 1 ? null : measuredArr[0].value}
      //   unit={measuredArr.length < 1 ? '' :
      // state.measurements[measuredArr[0].measurement_id].unit}
      //   progressVal={70}
      //   icon={measuredArr.length < 1 ? '' :
      // state.measurements[measuredArr[0].measurement_id].icon}
      //   key={measuredArr.length < 1 ? index : measuredArr[0].id}
      // />
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
