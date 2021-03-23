import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Footer, Header } from '../../components';
// import { _ } from '../../store/actions';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header title="Perfil" />
        <p data-testid="profile-email">email@email</p>
        <Link
          to="/receitas-feitas"
        >
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link
          to="/receitas-favoritas"
        >
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link
          to="/"
        >
          <button
            type="button"
            data-testid="profile-logout-btn"
          >
            Sair
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}

// _.propTypes = {
//   _: PropTypes.string.isRequired,
// };

// const mapStateToProps = (state) => ({
//   _,
// });

export default connect(null, null)(Profile);
