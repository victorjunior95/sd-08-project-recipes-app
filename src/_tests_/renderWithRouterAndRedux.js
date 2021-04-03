import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import storeRedux from '../store/index';

const renderWithRouterAndRedux = (
  component,
  {
    initialEntries = ['/'],
    initialState,
    store = storeRedux,
  } = {},
) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          { component }
        </Provider>
      </Router>,
    ),
    history,
  };
};

export default renderWithRouterAndRedux;
