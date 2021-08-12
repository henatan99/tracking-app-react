import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MeasuredByDate from '../../components/measuredByDate';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MeasuredByDate />);
});

describe('FooterNav', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
