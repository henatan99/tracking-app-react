import React from 'react';
import { create } from 'react-test-renderer';

import FooterNav from '../../components/footerNav';

it('renders when no props passed', () => {
    const tree = create(<FooterNav />).toJSON;
    expect(tree).toMatchSnapshot();
});