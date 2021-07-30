import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchfilterByMeasurementIdMeasureds } from '../redux/actions';
import Measured from '../components/measured';
import MeasuredsSelector from '../components/measuerdsSelector';
import formattedDate from '../helpers/dateFormat';
import { progProps } from '../helpers/progressData';

const Measureds = () => {
  const dispatch = useDispatch();
  const { mid } = useParams();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchfilterByMeasurementIdMeasureds(state.user.id));
  }, []);

  const renderMeasureds = () => {
    if (state.filteredMeasureds.loading) {
      return (
        <div className="loader-div">
          <span className="loader" />
        </div>
      );
    }

    if (state.filteredMeasureds.filtered_measureds.length > 0) {
      const filterdByMeasurement = state.filteredMeasureds.filtered_measureds[mid - 1];
      const { goals } = state.filteredMeasureds;
      const myProps = progProps(filterdByMeasurement, goals, mid);

      return filterdByMeasurement.map((measured, index) => (
        <Measured
          name={state.measurements[measured.measurement_id - 1].name}
          date={measured.created_at}
          fDate={formattedDate(measured.created_at)}
          measured={measured.value}
          diff={
            filterdByMeasurement.length > 1 && index > 0
              ? measured.value - filterdByMeasurement[index - 1].value : 0
          }
          progressVal={myProps.score * 100}
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
  filteredMeasureds: state.filteredMeasureds,
});

export default connect(mapStateToProps)(Measureds);
