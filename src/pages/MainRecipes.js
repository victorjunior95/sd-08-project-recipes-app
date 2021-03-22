import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

function MainRecipes({ history }) {
  const { pathname } = history.location;
  return (
    <Header title={ pathname } />
  );
}

export default MainRecipes;
