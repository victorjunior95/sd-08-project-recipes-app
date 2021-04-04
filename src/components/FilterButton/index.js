import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButton } from 'react-bootstrap';

// import { Container } from './styles';
function FilterButton(props) {
  const { name, currentCategory, changeCategory } = props;

  return (
    <ToggleButton
      type="checkbox"
      variant="light"
      key={ name }
      checked={ currentCategory === name }
      data-testid={ `${name}-category-filter` }
      onChange={ () => changeCategory(name) }
    >
      { name }
    </ToggleButton>
  );
}

export default FilterButton;

FilterButton.defaultProps = {
  name: ' ',
  currentCategory: ' ',
};

FilterButton.propTypes = {
  name: PropTypes.string,
  changeCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string,
};
