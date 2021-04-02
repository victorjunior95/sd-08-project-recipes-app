import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';
import { useDispatch } from 'react-redux';
import { filterBtnFood, filterBtnDrink } from '../../redux/actions';

// import { Container } from './styles';
function FilterButton(props) {
  const { name } = props;
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  function onClickBtn(btnName) {
    if (path === '/comidas') {
      dispatch(filterBtnFood(btnName));
    } else {
      dispatch(filterBtnDrink(btnName));
    }
  }
  return (
    <Button
      variant="light"
      key={ name }
      data-testid={ `${name}-category-filter` }
      onClick={ () => onClickBtn(name) }
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
