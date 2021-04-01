import React from 'react';
import { Router } from 'react-router-dom';
import { creatMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const renderWithRouter = (
  component,
  {
    initialEntries = ['/'],
    initialState,
    store = createStore(rootReducer, initialState),
  } = {},
) => {
  const history = creatMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>,
    ),
    history,
    store,
  };
};

export default renderWithRouter;
