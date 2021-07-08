import React from 'react';
import { create } from 'react-test-renderer';

import Measured from '../components/measured'

it('renders when no props passed', () => {
    const tree = create(<Measured />).toJSON;
    expect(tree).toMatchSnapshot();
})