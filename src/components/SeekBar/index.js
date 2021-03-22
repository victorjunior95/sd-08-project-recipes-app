import React, { useState } from 'react';
import { Form, FormCheck, FormControl, Button } from 'react-bootstrap';

export default function SeekBar() {
  const [onSeek, setOnSeek] = useState('');
  console.log(onSeek);
  return (

    <Form>
      <FormControl
        type="text"
        placeholder="Pesquisar"
        className="mt-3"
        data-testid="search-input"
        onChange={ (e) => setOnSeek(e.target.value) }
      />
      <Form.Group>
        <FormCheck
          data-testid="ingredient-search-radio"
          label="Ingrediente"
          type="radio"
        />
        <FormCheck
          data-testid="name-search-radio"
          label="Nome"
          type="radio"
        />
        <FormCheck
          data-testid="first-letter-search-radio"
          label="Primeira Letra"
          type="radio"
        />
      </Form.Group>
      <Button
        data-testid="exec-search-btn"
      >
        Buscar
      </Button>
    </Form>
  );
}
