import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMeasureds } from '../redux/actions';
import Measured from '../components/measured';

const Measureds = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchMeasureds(state.user.id));
  }, []);

  const renderMeasureds = () => {
    if (state.measureds.loading) {
      return <h1>loading...</h1>;
    }

    return state.measureds.items.map((measured, index) => (
      <Measured
        name={state.measurements[measured.measurement_id].name}
        date={measured.created_at}
        measured={measured.value}
        diff={measured - state.measureds.items[index - 1]}
        key={measured.id || index}
      />
    ));
  };
  return (
    <div>{ renderMeasureds() }</div>
  );
};

const mapStateToProps = (state) => ({
  measureds: state.measureds,
});

export default connect(mapStateToProps)(Measureds);
