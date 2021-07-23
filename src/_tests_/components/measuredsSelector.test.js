import React from 'react';
import { create } from 'react-test-renderer';

import MeasuredsSelector from '../../components/measuerdsSelector';

it('renders when no props passed', () => {
  const tree = create(<MeasuredsSelector />).toJSON;
  expect(tree).toMatchSnapshot();
});
