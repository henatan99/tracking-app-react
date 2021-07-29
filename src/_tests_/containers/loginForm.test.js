import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../containers/loginForm';
import { loginUser } from '../../redux/actions';
import storeFactory from '../factories/storeFactory';

const mockStore = configureStore([]);

Enzyme.configure({ adapter: new Adapter() });

// const setup = (initialState={}) => {
//   const store = storeFactory(initialState)
//   const wrapper = mount(<Provider store={store}><LoginForm /></Provider>)
//   console.log(wrapper.debug());
// }

// setup();

describe('LoginForm', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });

    // store.dispatch = jest.fn();
    wrapper = shallow(<LoginForm />);
    component = renderer.create(
      <Provider store={store}>
        {wrapper}
      </Provider>,
    );
  });

  it('does not reload page after submission', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');
    component.find('form').simulate('submit', event);
    expect(event.preventDefault).toBeCalled();
  })

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  // it('should dispatch an action on button click', () => {
  //   renderer.act(() => {
  //     component.root.findByType('form').props.onSubmit();
  //   });

  //   expect(store.dispatch).toHaveBeenCalledTimes(1);
  //   expect(store.dispatch).toHaveBeenCalledWith(
  //     loginUser({ payload: 'sample text' }),
  //   );
  // });
});
