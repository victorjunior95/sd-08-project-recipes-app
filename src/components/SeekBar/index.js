import React, { useState } from 'react';
import { Form, FormControl, Button, Row } from 'react-bootstrap';

export default function SeekBar() {
  const [onSeek, setOnSeek] = useState('');
  console.log(onSeek);
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
        />
        <Form.Check
          sm={ 4 }
          data-testid="name-search-radio"
          label="Nome"
          type="radio"
          name="SearchChoise"
        />
        <Form.Check
          sm={ 4 }
          data-testid="first-letter-search-radio"
          label="Primeira Letra"
          type="radio"
          name="SearchChoise"
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
