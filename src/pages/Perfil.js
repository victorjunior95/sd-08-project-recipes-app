import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import HeaderLocation from '../components/Header';

class Perfil extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <HeaderLocation />
        <main>
          <container className="perfil-container">
            <span>{email}</span>
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

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Perfil.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Perfil);
