import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import More from '../../containers/more';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<More />);
});

describe('FooterNav', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
