import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import DefaultSearch from '../Components/Buttons/DefaultSearch';

function Header(props) {
  const [checked, setChecked] = useState(false);
  const { title, searchType } = props;

  return (
    <Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link as={ Link } to="/perfil">
            <img data-testid="profile-top-btn" src={ profileIcon } alt="Perfil" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Brand data-testid="page-title">{ title }</Navbar.Brand>
      {searchType === 'default'
        && <DefaultSearch checked={ checked } setChecked={ setChecked } />}
    </Navbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchType: PropTypes.string,
};

Header.defaultProps = {
  searchType: 'default',
};

export default Header;
