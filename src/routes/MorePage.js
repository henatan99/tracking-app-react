import React from 'react';
import { connect, useSelector } from 'react-redux';
import FooterNav from '../components/footerNav';

const MorePage = () => {
  const state = useSelector((state) => state);

  return (
    <div className="measurement-page">
      <header className="measurement-page-header">
        <h3>More</h3>
      </header>
      <FooterNav user={state.user} />
    </div>
  );
};

MorePage.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MorePage);
