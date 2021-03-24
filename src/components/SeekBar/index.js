import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Form, FormControl, Button, Row } from 'react-bootstrap';
import theMeadlDB from '../../services/theMeadlDB';
import { food } from '../../  redux /actions';


export default function SeekBar() {
  const [onSeek, setOnSeek] = useState('');
  const [onradio, setOnradio] = useState('');
  
  const dispatch = useDispatch();

   useEffect((onradio, onSeek) => {
   const endpoint = fetch(theMeadlDB(onradio, onSeek))
   const data = await endpoint.json();
   dispatch(food(data));
  }, [onradio]);

  console.log(onSeek);
  console.log(onradio);
  return (

    <Form>
      <Form.Row className="m-3">
        <FormControl
          type="text"
          placeholder="Pesquisar"
          data-testid="search-input"
          onChange={ (e) => setOnSeek(e.target.value) }
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
          onChange={ (e) => setOnradio(e.target.value) }
        />
        <Form.Check
          sm={ 4 }
          data-testid="name-search-radio"
          label="Nome"
          type="radio"
          name="SearchChoise"
          value="Nome"
          onChange={ (e) => setOnradio(e.target.value) }
        />
        <Form.Check
          sm={ 4 }
          data-testid="first-letter-search-radio"
          label="Primeira Letra"
          type="radio"
          name="SearchChoise"
          value="Primeira Letra"
          onChange={ (e) => setOnradio(e.target.value) }
        />
      </Form.Group>
      <Button
        data-testid="exec-search-btn"
        className="ml-3"
        size="sm"
        variant="outline-info"
      >
        Buscar
      </Button>
    </Form>
  );
}
