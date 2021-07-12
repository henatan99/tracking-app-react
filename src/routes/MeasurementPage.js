import React from 'react';
// import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import MeasurementForm from '../containers/measurementForm';
import FooterNav from '../components/footerNav';

const MeasurementPage = () => {
  const state = useSelector((state) => state);
  console.log(state.user);
  console.log(state.measurements);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>Add measurement</h3>
      </header>
      <MeasurementForm user={state.user} measurements={state.measurements} />
      <FooterNav user={state.user} />
    </div>
  );
};

MeasurementPage.defaultProps = {
  user: null,
  measurements: [],
};

// MeasurementPage.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string,
//   }),

//   measurements: PropTypes.instanceOf(Array),
// };

const mapStateToProps = (state) => ({
  user: state.user,
  measurements: state.measurements,
});

// export default MeasurementPage;
export default connect(mapStateToProps)(MeasurementPage);
