import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Measured from '../../components/measured';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Measured />);
});

describe('Measured', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
