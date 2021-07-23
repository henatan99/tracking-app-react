import React from 'react';
import { create } from 'react-test-renderer';

import Progress from '../../components/progressBar';

it('renders when no props passed', () => {
  const tree = create(<Progress />).toJSON;
  expect(tree).toMatchSnapshot();
});
