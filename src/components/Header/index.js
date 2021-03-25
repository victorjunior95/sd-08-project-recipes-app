import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import { toggleButtonSearch } from '../../store/actions';
import SearchBar from './SearchBar';
import { CardsButtonsCategories } from '..';

import '../../styles/components/Header/index.css';

const MAX_LENGTH_NAMES_CATEGORIES = 5;

class Header extends Component {
  render() {
    const { title, showButtonSearch, setToggle, filterButtons } = this.props;
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
        {showButtonSearch && <SearchBar title={ title } />}

        {!showButtonSearch
         && filterButtons
          && filterButtons.map((button, index) => {
            if (index < MAX_LENGTH_NAMES_CATEGORIES) {
              return (
                <CardsButtonsCategories
                  key={ index }
                  strCategory={ button.strCategory }
                />
              );
            }
            return false;
          }) }
      </header>
    );
  }
}

// defaultProps

Header.propTypes = {
  title: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
  showButtonSearch: PropTypes.bool.isRequired,
  filterButtons: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  showButtonSearch: state.headerReducer.showButtonSearch,
  filterButtons: state.headerReducer.filterButtons,

});

const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(toggleButtonSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
