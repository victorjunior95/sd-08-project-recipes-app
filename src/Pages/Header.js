import React, { useState } from 'react';
import { ButtonGroup, Nav, Navbar, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const [checked, setChecked] = useState(false);
  const { title } = props;

  return (
    <Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link as={ Link } to="/perfil" data-testid="profile-top-btn">
            <img src={ profileIcon } alt="Perfil" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Brand data-testid="page-title">{ title }</Navbar.Brand>
      <ButtonGroup toggle>
        <ToggleButton
          type="checkbox"
          variant="link"
          checked={ checked }
          value={ 1 }
          onChange={ () => setChecked(!checked) }
          data-testid="search-top-btn"
        >
          <img src={ searchIcon } alt="Pesquisar" />
        </ToggleButton>
      </ButtonGroup>
    </Navbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
