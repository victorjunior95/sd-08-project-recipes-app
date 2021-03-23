import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import MyContext from '../context/MyContext';

import ExploreButton from './ExploreButton';

function Header({ title, explore }) {
  const {
    type,
    setType,
  } = useContext(MyContext);
  let name;

  useEffect(() => {
    if (title === 'Comidas') {
      name = {
        palavra: 'Meal',
        item: 'meals',
      }
      setType(name);
    } else {
      name = {
        palavra: 'Drink',
        item: 'drinks',
      }
      setType(name);
    }
  }, []);

  return (
    <div>
      <Link to="/perfil">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>
      <h3 data-testid="page-title">{ title }</h3>
      {explore ? <ExploreButton title={ title } /> : null }
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
