import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import FooterNav from '../../components/footerNav';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<FooterNav />);
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
