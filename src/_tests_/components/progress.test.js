import React from 'react';
import { create } from 'react-test-renderer';

import Progress from '../../components/progress';

it('renders when no props passed', () => {
  const tree = create(<Progress />).toJSON;
  expect(tree).toMatchSnapshot();
});
