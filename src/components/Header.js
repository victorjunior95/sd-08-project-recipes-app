import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/components/Header.css';

class Header extends Component {
  render() {
    const { title, showButton } = this.props;
    return (
      <header className="headerContainer">
        <button
          type="button"
          src={ profileIcon }
          data-testid="profile-top-btn"
        >
          <img
            src={ profileIcon }
            alt="profile"
          />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        {showButton && (
          <button
            type="button"
            src={ searchIcon }
            data-testid="search-top-btn"
          >
            <img
              src={ searchIcon }
              alt="search"
            />
          </button>)}

      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => ({
  title: state.headerReducer.titleHeader,
  showButton: state.headerReducer.showButtonSearch,
});
export default connect(mapStateToProps)(Header);
