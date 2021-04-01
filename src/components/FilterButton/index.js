import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// import { Container } from './styles';

function FilterButton(props) {
  const { name } = props;
  return (
    <Button
      variant="light"
      key={ name }
      data-testid={ `${name}-category-filter` }
    >
      { name }
    </Button>
  );
}

export default FilterButton;

FilterButton.defaultProps = {
  name: ' ',
};

FilterButton.propTypes = {
  name: PropTypes.string,
};
