import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import search from '../store/searchSlice';
import login from '../store/loginSlice';
import api from '../store/apiSlice';
import categoriesButton from '../store/apiCategoriesSlice';
import surprise from '../store/surpriseSlice';

const renderWithRouterAndRedux = (
  component,
  {
    initialEntries = ['/'],
    store = configureStore({
      reducer: {
        search,
        login,
        api,
        categoriesButton,
        surprise,
      },
    }),
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
