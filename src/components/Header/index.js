import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import { toggleButtonSearch } from '../../store/actions';
import SearchBar from './SearchBar';

import '../../styles/components/Header/index.css';

class Header extends Component {
  render() {
    const { title, showButton, setToggle } = this.props;
    return (
      <header className="headerContainer">
        <div>
          <div>
            <Link to="/perfil">
              <img
                className="headerButton"
                data-testid="profile-top-btn"
                src={ ProfileIcon }
                alt="perfil"
              />
            </Link>
          </div>
          <div>
            <h1 data-testid="page-title">
              { title }
            </h1>
          </div>
          {(
            title === 'Comidas'
            || title === 'Bebidas'
            || title.includes('Origem')
          ) && (
            <div>
              <button
                className="headerButton"
                type="button"
                onClick={ () => setToggle() }
              >
                <img
                  data-testid="search-top-btn"
                  src={ SearchIcon }
                  alt="search"
                />
              </button>
            </div>
          )}
        </div>
        {showButton && <SearchBar title={ title } />}

      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
  showButton: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => ({
  showButton: state.headerReducer.showButtonSearch,
});

const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(toggleButtonSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
