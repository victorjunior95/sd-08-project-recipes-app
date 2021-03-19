import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './pages';

export default function Routes() {
  return (
    <Route exact path="/" component={ Login } />
  );
}
