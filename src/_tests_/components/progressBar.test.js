import React from 'react';
import { create } from 'react-test-renderer';

import ProgressBar from '../../components/progressBar';

it('renders when no props passed', () => {
  const tree = create(<ProgressBar />).toJSON;
  expect(tree).toMatchSnapshot();
});
