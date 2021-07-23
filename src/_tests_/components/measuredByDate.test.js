import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
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

//   it('should render four <li>', () => {
//     const wrapper = mount(
//       <MemoryRouter>
//         <FooterNav />
//       </MemoryRouter>
//     );
//     expect(wrapper.find('li').length).toBe(4);
//   });
});
    