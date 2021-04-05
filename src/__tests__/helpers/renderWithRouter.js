import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Provider from '../../core/Provider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={ history }>
        <Provider>{component}</Provider>
      </Router>,
    ),
    history,
  };
};

export default renderWithRouter;
