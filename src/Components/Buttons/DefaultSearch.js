import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import searchIcon from '../../images/searchIcon.svg';

function DefaultSearch(props) {
  const { setChecked, checked } = props;
  return (
    <ButtonGroup toggle>
      <ToggleButton
        type="checkbox"
        variant="link"
        checked={ checked }
        value={ 1 }
        onChange={ () => setChecked(!checked) }
      >
        <img src={ searchIcon } data-testid="search-top-btn" alt="Pesquisar" />
      </ToggleButton>
    </ButtonGroup>
  );
}

DefaultSearch.propTypes = {
  setChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default DefaultSearch;
