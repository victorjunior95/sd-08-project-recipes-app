import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import rootReducers from '../store/index';

export default function renderWithRedux(
  component,
  { initialState, store = rootReducers || initialState } = {},
) {
  return {
    ...render(
      <Provider store={ store }>
        { component }
      </Provider>,
    ),
  };
}
