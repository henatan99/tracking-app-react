import React from 'react';
import { connect, useSelector } from 'react-redux';
import FooterNav from '../components/footerNav';
import More from '../containers/more';

const MorePage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>More</h3>
      </header>
      <More username={state.user.username} userId={state.user.id} />
      <FooterNav user={state.user} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MorePage);
