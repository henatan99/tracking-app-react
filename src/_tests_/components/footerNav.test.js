import React from 'react';

import FooterNav from '../../components/footerNav';

it('renders when no props passed', () => {
    const tree = create(<FooterNav />).toJSON;
    expect(tree).toMatchSnapshot();
});