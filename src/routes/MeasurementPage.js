import React from 'react';
import MeasurementForm from '../containers/measurementForm';
import FooterNav from '../components/footerNav';

const MeasurementPage = () => (
  <div className="measurement-page">
    <header className="measurement-header">
      <h3 className="">Add measurement</h3>
    </header>
    <MeasurementForm />
    <FooterNav />
  </div>
);

export default MeasurementPage;
