import React, { Component } from 'react';
import DoneAndFavoriteCards from '../components/DoneAndFavoriteCards';
import HeaderLocation from '../components/Header';

class ReceitasFavoritas extends Component {
  render() {
    return (
      <div>
        <HeaderLocation />
        <br />
        <br />
        <br />
        <DoneAndFavoriteCards />
      </div>
    );
  }
}

export default ReceitasFavoritas;
