import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, Row } from 'react-bootstrap';
import { fetchDrinksByFilter, fetchMealsByFilter } from '../../redux/actions';

export default function SeekBar(props) {
  const [onSeek, setOnSeek] = useState('');
  const [onRadio, setOnRadio] = useState('');
  const dispatch = useDispatch();
  const { title } = props;
  const fetchApiByFilters = (e) => {
    e.preventDefault();
    console.log(title);
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

    <Form>
      <Form.Row className="m-3">
        <FormControl
          type="text"
          placeholder="Pesquisar"
          data-testid="search-input"
          value={ onSeek }
          onChange={ handleOnSeek }
        />
      </Form.Row>
      <Form.Group as={ Row } className="justify-content-around mx-0 flex-row">
        <Form.Check
          sm={ 4 }
          data-testid="ingredient-search-radio"
          label="Ingrediente"
          type="radio"
          name="SearchChoise"
          value="Ingrediente"
          onChange={ (e) => setOnRadio(e.target.value) }
        />
        <Form.Check
          sm={ 4 }
          data-testid="name-search-radio"
          label="Nome"
          type="radio"
          name="SearchChoise"
          value="Nome"
          onChange={ (e) => setOnRadio(e.target.value) }
        />
        <Form.Check
          sm={ 4 }
          data-testid="first-letter-search-radio"
          label="Primeira Letra"
          type="radio"
          name="SearchChoise"
          value="Primeira Letra"
          onChange={ (e) => setOnRadio(e.target.value) }
        />
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
