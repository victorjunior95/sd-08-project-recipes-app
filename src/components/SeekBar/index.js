import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, Row } from 'react-bootstrap';
import { fetchDrinksByFilter, fetchMealsByFilter } from '../../redux/actions';
import './styles.css';

export default function SeekBar(props) {
  const [onSeek, setOnSeek] = useState('');
  const [onRadio, setOnRadio] = useState('Nome');
  const RadioValues = ['ingrediente', 'Nome', 'Primeira letra'];
  const dispatch = useDispatch();
  const { title } = props;

  const fetchApiByFilters = (e) => {
    e.preventDefault();
    if (title === 'Comidas') {
      dispatch(fetchMealsByFilter(onRadio, onSeek));
    }
    if (title === 'Bebidas') {
      dispatch(fetchDrinksByFilter(onRadio, onSeek));
    }
  };

  const handleOnSeek = ({ target }) => {
    const { value } = target;
    if (onRadio === 'Primeira Letra') {
      if (onSeek.length === 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const firstWord = value.slice(0, 1);
      setOnSeek(firstWord);
    } else {
      setOnSeek(value);
    }
  };

  return (

    <Form className="py-2">
      <Form.Row className="mx-3">
        <FormControl
          type="text"
          placeholder="Pesquisar"
          data-testid="search-input"
          value={ onSeek }
          onChange={ handleOnSeek }
        />
      </Form.Row>
      <Form.Group as={ Row } className="justify-content-around mx-0 my-2 flex-row">
        {RadioValues.map(
          (radioValue) => (
            <Form.Check
              sm={ 4 }
              data-testid="ingredient-search-radio"
              label={ radioValue }
              type="radio"
              name="SearchChoise"
              value={ radioValue }
              checked={ radioValue === onRadio }
              onChange={ (e) => setOnRadio(e.target.value) }
              key={ radioValue }
            />),
        )}
      </Form.Group>
      <Button
        type="submit"
        data-testid="exec-search-btn"
        className="ml-3"
        size="sm"
        variant="outline-info"
        onClick={ fetchApiByFilters }
      >
        Buscar
      </Button>
    </Form>
  );
}

SeekBar.propTypes = {
  title: PropTypes.string.isRequired,
};