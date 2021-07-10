import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import LoginForm from '../../containers/loginForm';
import { loginUser } from '../../redux/actions/user';

const mockStore = configureStore([]);

describe('LoginForm', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findByType('button').props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            loginUser({ payload: 'sample text' })
        );
    });
})