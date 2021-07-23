import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
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
  // it('should render one <h1>', () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <Measured auth={{ loading: false }} />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find('div').length).toBe(12);
  // });
});
