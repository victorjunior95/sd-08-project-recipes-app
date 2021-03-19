import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Footer from '../components/Footer';
import HeaderLocation from '../components/Header';

class Perfil extends Component {
  constructor() {
    super();
    this.state = {
      routeTo: null,
    };

    this.setRoute = this.setRoute.bind(this);
  }

  setRoute(route) {
    this.setState({ routeTo: route });
  }

  render() {
    const { email } = this.props;
    const { routeTo } = this.state;
    return (
      <div>
        <HeaderLocation />
        <main>
          <container className="perfil-container">
            <span data-testid="profile-email">
              {email
            || JSON.parse(localStorage.getItem('user')).email}
            </span>
            <button
              type="button"
              data-testid="profile-done-btn"
              onClick={ () => this.setRoute('/receitas-favoritas') }
            >
              Receitas Feitas
            </button>
            <button
              type="button"
              data-testid="profile-favorite-btn"
              onClick={ () => this.setRoute('/receitas-feitas') }
            >
              Receitas Favoritas
            </button>
            <button
              type="button"
              data-testid="profile-logout-btn"
              onClick={ () => this.setRoute('/') }
            >
              Sair
            </button>
          </container>
        </main>
        {routeTo && <Redirect push to={ routeTo } />}
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
