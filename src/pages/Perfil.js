import React, { Component } from 'react';
import Footer from '../components/Footer';
import HeaderLocation from '../components/Header';

class Perfil extends Component {
  render() {
    return (
      <div>
        <HeaderLocation />
        <main>
          <container className="perfil-container">
            <span>e-mail</span>
            <button type="button">Receitas Feitas</button>
            <button type="button">Receitas Favoritas</button>
            <button type="button">Sair</button>
          </container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Perfil;
