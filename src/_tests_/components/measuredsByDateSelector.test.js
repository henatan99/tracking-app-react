import React from 'react';
import { create } from 'react-test-renderer';

import MeasuredsByDateSelector from '../../components/measuredsByDateSelector';

it('renders when no props passed', () => {
  const tree = create(<MeasuredsByDateSelector />).toJSON;
  expect(tree).toMatchSnapshot();
});
