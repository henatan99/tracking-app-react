const MeasurementForm = () => (
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

export default MeasurementForm;
