import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MorePage from '../../routes/MorePage';
import createTestStore from '../factories/storeFactory';

describe('Measureds', () => {
    let store;
    beforeEach(() => {
      store = createTestStore();
    });
    test('should match with snapshot', () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <MemoryRouter>
              <MorePage />
            </MemoryRouter>
          </Provider>,
        ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  