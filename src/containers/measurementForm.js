import React from 'react';
import { connect, useSelector } from 'react-redux';

const MeasurementForm = () => {
  const state = useSelector((state) => state);
  const { user } = state.user;
  console.log(user);

  const handleSubmit = () => {
    alert('submitted');
  };

  return (
    <div>
      <h1>User Detail</h1>
      <span>{user.id}</span>
      <span>{user.username}</span>
      <span>{user.created_at}</span>
      <h2>Please Enter Measurement</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => e.target.value} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MeasurementForm);
